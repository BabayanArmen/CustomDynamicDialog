import { Component, Injector, OnInit, Type } from '@angular/core';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog-wrapper',
  template: `
    <div class="dialog-wrapper">
      <div class="dialog-container">
          <div class="dialog-header">
              <span>Dialog header</span>
              <span class="close" (click)="dialogService.closeDialog()">&#x2715;</span>
          </div>
          <hr style="padding: 0; margin: 0;">
          <div class="dialog-content">
              <ng-container 
              *ngIf="component" 
              [ngComponentOutlet]="component"
              [ngComponentOutletInjector]="dialogDataInjector"
              ></ng-container>
          </div>
      </div>
    </div>
  `,
  styles: [`
      .dialog-wrapper {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: rgba(83, 75, 75, 0.445);
        z-index: 1;

        .dialog-container{
          width: 800px;
          height: auto;
          background-color: white;
          margin: 50px auto;
          z-index: 2;

          .dialog-header{
              height: 30px;
              padding: 5px;
              line-height: 30px;

              .close{
                  float: right; 
                  cursor: pointer;
              }
          }
          .dialog-content{
              padding: 5px;
          }
        } 
      }
  `]
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
