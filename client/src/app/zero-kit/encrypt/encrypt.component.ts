import {Component, OnInit} from '@angular/core';
import {ZeroKitService} from "../zero-kit.service";
import {ZeroKitSdkService} from "../zero-kit-sdk.service";

@Component({
  selector: 'encrypt',
  templateUrl: './encrypt.component.html'
})
export class EncryptComponent implements OnInit {
  tresorId: string;
  text: string = '';
  encryptedText: string;

  constructor(private zeroKitService: ZeroKitService,
              private zeroKitSdkService: ZeroKitSdkService) {
  }

  ngOnInit(): void {

  }

  encrypt(): void {
    if (this.text.length > 0) {
      this.zeroKitSdkService.createTresor()
        .then((tresorId) => {
          this.zeroKitService.createTresor(tresorId)
            .then(() => {
              this.tresorId = tresorId;
              this.zeroKitSdkService.encrypt(this.tresorId, this.text)
                .then((encryptedText) => this.encryptedText = encryptedText);
            });
        })
        .catch((err) => console.error(err));
    }
  }

}
