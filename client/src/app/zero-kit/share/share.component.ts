import {Component, OnInit} from '@angular/core';
import {ZeroKitService} from "../zero-kit.service";
import {ZeroKitSdkService} from "../zero-kit-sdk.service";

@Component({
  selector: 'share',
  templateUrl: './share.component.html'
})
export class ShareComponent implements OnInit{
  tresorId: string;
  zeroKitUserId: string;

  constructor(private zeroKitService: ZeroKitService,
              private zeroKitSdkService: ZeroKitSdkService) {
  }

  ngOnInit(): void {

  }

  share(): void {
    this.zeroKitSdkService
      .shareTresor(this.tresorId, this.zeroKitUserId)
      .then((operationId) => this.zeroKitService.approveInviteToTresor(operationId))
      .then(() => console.log('Success'))
      .catch((err) => console.error(err))
  }

}
