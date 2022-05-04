import { Component, OnInit, Type } from '@angular/core';
import { DialogService } from '../dialog.service';

@Component({
  selector: 'app-dialog-wrapper',
  templateUrl: './dialog-wrapper.component.html',
  styleUrls: ['./dialog-wrapper.component.scss']
})
export class DialogWrapperComponent implements OnInit {
  public component?: Type<any>;
  public params!: any;
  
  constructor(public dialogService: DialogService) {}

  ngOnInit(): void {
    this.component = this.params.component;
    this.params = this.params.params;
  }

}
