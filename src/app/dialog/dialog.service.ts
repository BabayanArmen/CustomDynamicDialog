import { Injectable, InjectionToken, Injector, OnInit, Type } from '@angular/core';
import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';
import { AppViewContainerRef } from 'src/app/app.component';
import { Subject } from 'rxjs';

export interface IOutputEvent {
  data: any;
  outputEvent: boolean;
  dialogClose: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class DialogService implements OnInit {
  private dialogDataInjector!: Injector;
  private dialogData = new InjectionToken<string>('dialogData');
  private dialogOutpuEvent: Subject<IOutputEvent> = new Subject<IOutputEvent>();

  constructor(private injector: Injector) { }

  ngOnInit(): void {}

  public openDialog(component: Type<any>, data: any = {}) {
    this.dialogDataInjector = Injector.create({
      providers: [{ provide: 'dialogData', useValue: data }],
      parent: this.injector,
    });
    AppViewContainerRef.clear();
    let dialog = AppViewContainerRef.createComponent(DialogWrapperComponent);
    dialog.instance.params = {
      component,
      data
    }
    return this.dialogOutpuEvent.asObservable();
  }

  closeDialog() {
    AppViewContainerRef.clear();
    this.dialogOutpuEvent.next({
      data: null,
      outputEvent: false,
      dialogClose: true,
    });
  }

  public getDialogDataInjector() {
    return this.dialogDataInjector
  }

  public dialogOutputEvent(value: any = {}) {
    this.dialogOutpuEvent.next({
      data: value,
      outputEvent: true,
      dialogClose: false,
    })
  }

}
