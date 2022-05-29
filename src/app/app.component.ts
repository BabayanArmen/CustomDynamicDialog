import { Component, ViewContainerRef } from '@angular/core';
import { take } from 'rxjs';
import { DialogService } from './dialog/dialog.service';
import { PageComponent } from './page/page.component';

export let AppViewContainerRef: ViewContainerRef; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'custom-dialog';

  constructor(private ref: ViewContainerRef, private dialogService: DialogService) {
    AppViewContainerRef = this.ref;
  }

  openDialog() {
    this.dialogService.openDialog(PageComponent, { name:'Johnes' })
    .pipe(take(1))
    .subscribe(evn => {
      console.log(evn);
    })
  }

}
