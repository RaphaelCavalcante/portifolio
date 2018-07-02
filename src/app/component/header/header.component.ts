import { Component, OnInit, Inject } from '@angular/core';
import { PageScrollService, PageScrollInstance, EasingLogic } from 'ngx-page-scroll';
import { DOCUMENT } from '@angular/common';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
    faCoffee = faCoffee;
    constructor(private scrollService: PageScrollService, @Inject(DOCUMENT) private document: any) { }

    ngOnInit() {
    }
}
