import { Component, OnInit, Inject } from '@angular/core';
import { PageScrollService, PageScrollInstance, EasingLogic } from 'ngx-page-scroll';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private scrollService: PageScrollService, @Inject(DOCUMENT) private document:any) { }
  
  ngOnInit() {
  }
  public goToAbout() {
    let pageScrollInstance: PageScrollInstance = PageScrollInstance.simpleInstance(this.document, '#about');
    this.scrollService.start(pageScrollInstance);
  }
}
