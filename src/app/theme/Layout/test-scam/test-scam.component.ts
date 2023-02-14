import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-test-scam',
    templateUrl: './test-scam.component.html',
    styleUrls: ['./test-scam.component.scss'],
    standalone: true, // Mark the component as standalone
})
export class TestSCAMComponent {
    // SCAM is Single Component Angular Module
    // Make component stand alone and use it every where in the project, just import to the required module

    @Input() name: any;

    constructor() {
        this.ngOnChanges();
    }

    ngOnChanges() {
        console.warn('cak:', this.name);
    }
}
