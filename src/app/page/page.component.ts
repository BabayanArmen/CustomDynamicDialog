import { Component, Inject, OnInit } from '@angular/core';
import { DialogService } from '../dialog/dialog.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  public data: any;

  constructor(@Inject('dialogData') public dialogData: any, private dialogService: DialogService) { }

  ngOnInit(): void {
    this.data = this.dialogData;
  }

  public outPutEvent(value = {}) {
    this.dialogService.dialogOutputEvent(value);
    this.dialogService.closeDialog();
  }

}
