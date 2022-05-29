import { Component, Injector, OnInit, Type } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialog-wrapper',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.scss']
})
export class DialogWrapperComponent implements OnInit {
  public component?: Type<any>;
  public dialogDataInjector: Injector;
  public params: any;
  
  constructor(public dialogService: DialogService) {
    this.dialogDataInjector = this.dialogService.getDialogDataInjector();
  }

  ngOnInit(): void {
    this.component = this.params.component;
  }

}
