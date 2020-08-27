import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {NavigationStart, Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output() sideNavToggleSwitch = new EventEmitter();
  @Input() isSideNavOpen: boolean;

  @Output() settingsMenuToggleSwitch = new EventEmitter();
  @Input() isSettingsMenuOpened: boolean;

  constructor() { }

  ngOnInit() {
  }

  sideNavToggle() {
    this.sideNavToggleSwitch.emit();
  }

  settingsMenuToggle() : void {
    this.settingsMenuToggleSwitch.emit();
  }

}
