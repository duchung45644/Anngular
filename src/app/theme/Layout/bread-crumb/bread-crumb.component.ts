import { Component } from '@angular/core';

@Component({
    selector: 'app-bread-crumb',
    templateUrl: './bread-crumb.component.html',
    styleUrls: ['./bread-crumb.component.scss'],
})
export class BreadCrumbComponent {
    breadCrumbList = [
        { name: 'Home', icon: 'icon-home2 mr-2' },
        { name: 'Youtube', icon: 'icon-youtube mr-2' },
        { name: 'breadcrumb', icon: '' },
    ];
}
