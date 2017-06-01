const rp = require("request-promise-native");
const crypto = require("crypto");

module.exports = class ZeroKitService {
    constructor(config) {
        this.config = config;
    }

    adminApiCall(urlPart, contentObj) {
        const config = this.config;
        urlPart = `api/v${config.sdkVersion}/admin` + urlPart;
        const contentBuffer = contentObj ? contentify(contentObj) : null;
        const headers = adminCallAuth(urlPart, contentBuffer);

        return rp({
            method: contentObj ? "POST" : "GET",
            uri: `${config.serviceUrl}/` + urlPart,
            headers: headers,
            body: contentBuffer
        }).then(body => body.length > 0 ? JSON.parse(body) : {});

        function getHeaderStringToHash(verb, path, headers, hmacHeaders) {
            return verb + "\n" + path + "\n" + hmacHeaders.map(key => key + ":" + headers[key]).join("\n");
        }

        function adminCallAuth(path, contentBuffer) {
            // Format ISO8601 with no milliseconds
            const date = new Date().toISOString().substr(0, 19) + "Z";
            const headers = {
                UserId: config.adminUserId,
                TresoritDate: date,
                "Content-Type": "application/json"
            };

            if (contentBuffer) headers["Content-SHA256"] = sha256hex(contentBuffer);

            const hmacHeaders = Object.keys(headers);
            hmacHeaders.push("HMACHeaders");
            headers["HMACHeaders"] = hmacHeaders.join(",");

            const headerStringToHash = getHeaderStringToHash(contentBuffer ? "POST" : "GET", path, headers, hmacHeaders);
            headers["Authorization"] = "AdminKey " + hmacSha256base64(headerStringToHash, config.adminKey);
            return headers;
        }

        function contentify(obj) {
            return new Buffer(JSON.stringify(obj));
        }

        function sha256hex(data) {
            return crypto.createHash("sha256").update(data).digest("hex");
        }

        function hmacSha256base64(data, key) {
            return crypto.createHmac("sha256", new Buffer(key, "hex")).update(data).digest("base64");
        }
    }

    initUserRegistration() {
        return this.adminApiCall('/user/init-user-registration', {});
    }

    approveUserRegistration(userId, regSessionId, regSessionVerifier, regValidationVerifier) {
        return this.adminApiCall('/user/validate-user-registration', {
            RegSessionId: regSessionId,
            RegSessionVerifier: regSessionVerifier,
            RegValidationVerifier: regValidationVerifier,
            UserId: userId
        });
    }

    createTresor(tresorId) {
        return this.adminApiCall("/tresor/approve-tresor-creation", {TresorId: tresorId});
    }

    approveInviteToTresor(operationId) {
        return this.adminApiCall("/tresor/approve-share", { OperationId: operationId });
    }
}