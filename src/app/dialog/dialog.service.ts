import { ApplicationRef, Component, ComponentRef, ElementRef, Injectable, Injector, OnInit, Type, ViewContainerRef } from '@angular/core';
import { AppComponent, AppViewContainerRef } from '../app.component';
import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService{

  constructor() { }

  async openDialog(component: Type<any>, params: any = {}) {
    AppViewContainerRef.clear();
    let dialog = await AppViewContainerRef.createComponent(DialogWrapperComponent);
    dialog.instance.params = {
      component,
      params
    };
  }

  closeDialog() {
    AppViewContainerRef.clear();
  }

}
