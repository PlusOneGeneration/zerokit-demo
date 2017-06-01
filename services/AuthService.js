module.exports = class AuthService {
    constructor() {}
    
    isAuthorized() {
        return (req, res, next) => {
            req.isAuthenticated();
            next();
        };
    }
}
