import {Component, HostBinding, OnInit} from '@angular/core';
import {OverlayContainer} from "@angular/cdk/overlay";
import {themes} from "../../core/models/theme.model";

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  sideNavOpened = true;
  settingsMenuOpened = false;

  @HostBinding('class') activeThemeCssClass: string;
  activeTheme: string;
  isThemeDark = false;

  constructor(private overlayContainer: OverlayContainer) {
    this.isThemeDark = themes[0].dark;
    this.setActiveTheme(themes[0].value);
  }

  ngOnInit() : void {
  }

  setActiveTheme(theme: string) : void {
    this.activeTheme = theme;
    const cssClass = this.isThemeDark === true ? theme + '-dark' : theme;

    const classList = this.overlayContainer.getContainerElement().classList;
    if (classList.contains(this.activeThemeCssClass)) {
    classList.replace(this.activeThemeCssClass, cssClass);
    }else {
      classList.add(cssClass);
    }
    this.activeThemeCssClass = cssClass;
  }

  setThemeDark(darkness: boolean) : void {
    this.isThemeDark = darkness;
    this.setActiveTheme(this.activeTheme);
  }

  toggleSideNav() : void {
    this.sideNavOpened = !this.sideNavOpened;
  }

  toggleSettingsMenu() : void {
    this.settingsMenuOpened = !this.settingsMenuOpened;
  }

}
