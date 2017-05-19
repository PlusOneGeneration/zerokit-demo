import {Component} from '@angular/core';
import {ZeroKitSdkService} from "../zero-kit-sdk.service";

@Component({
  selector: 'decrypt',
  templateUrl: './decrypt.component.html'
})
export class DecryptComponent {
  decryptedText: string;
  encryptedText: string = '';

  constructor(private zeroKitSdkService: ZeroKitSdkService) {}

  decrypt(): void {
    this.zeroKitSdkService.decrypt(this.encryptedText)
      .then((decryptedText) => this.decryptedText = decryptedText);
  }

}
