import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `
        <books></books>
    `,
    styleUrls: [ 'app.component.css'],
    moduleId: module.id
})
export class AppComponent { name = 'Angular 2'; }
