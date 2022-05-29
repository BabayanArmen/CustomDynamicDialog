# CustomDialog

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.2.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## ===== my custom dialog module =====

## important !
1.  In App Component inject ViewContainerRef.
    example 
        constructor(private ref: ViewContainerRef) { AppViewContainerRef = this.ref }

2.  Export ViewContainerRef as variable from app.component.ts file (not from class)
    examlpe
        export let AppViewContainerRef: ViewContainerRef;
        
3.  Inject DialogService in component where you need dialog
    example
        constructor(private dialogService: DialogService) { }

4.  To open/close dialog, call openDialog/closeDialog method form DialogService.
    You must pass specefic component class in open method, to open that component
    in dialog. Also you can pass any data you need in dialog component.
    Also you need to subscribe to openDialog method.
    examlpe
          openDialog() {
            this.dialogService.openDialog(PageComponent, { name:'Johnes' })
            .pipe(take(1))
            .subscribe(evn => {
            console.log(evn);
            })
        }
    
    in some cases you may have problems with unsubscribe, so it will be better to
    use some observable destroy$, in pipe, and unsubscribe with component onDestroy.

5.  To get passed data in dialog component, you need to inject dialogData
    example 
      constructor(@Inject('dialogData') public dialogData: any) { }
        ngOnInit(): void {
            this.data = this.dialogData;
        }
    
6.  If you need some output event, you can use DialogService dialogOutputEvent event.
    Value is optional
    example
        this.dialogService.dialogOutputEvent(value)
        
        or

        this.dialogService.dialogOutputEvent()
        