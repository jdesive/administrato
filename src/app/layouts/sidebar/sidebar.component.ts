import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {themes} from "../../core/models/theme.model";
import {sideNavAnimation, sideNavContainerAnimation} from "../../core/animations/sidenav.animations";
import {NavigationStart, Router} from "@angular/router";

export interface ICallback {
  ( error: Error, result?: any ) : void;
}

export interface NavLocation {
  path?: string;
  title: string;
  icon?: string;
  clickAction?: Function;
  activeToggle?: Function;
  submenus?: NavLocation[];
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [sideNavAnimation, sideNavContainerAnimation]
})
export class SidebarComponent implements OnInit {

  @Input() opened = true;
  @Input() settingsMenuOpened = false;
  @Input() currentTheme;
  @Output() darknessToggle = new EventEmitter();
  @Output() changeThemeToggle = new EventEmitter();

  themes = themes;
  isDark = themes[0].dark;
  activeTheme = this.currentTheme;

  // Submenus
  uiSubmenuShowing = false;
  uiActive = false;
  toggleUISidenav: Function = this.toggleUIActive.bind(this);
  isUIActiveFunc: Function = this.isUIActive.bind(this);

  nav: NavLocation[] = [
    {path: '/dashboard', title: 'Dashboard', icon: 'dashboard'},
    {
      title: 'User Interface', icon: 'invert_colors',
      clickAction: this.toggleUISidenav,
      activeToggle: this.isUIActiveFunc,
      submenus: [
        {path: '/ui/buttons-indicators', title: 'Buttons & Indicators'},
        {path: '/ui/forms', title: 'Forms'}
      ]
    },
    {path: '/components', title: 'Components', icon: 'donut_small'},
    {path: '/charts', title: 'Charts', icon: 'bar_chart'},
    {path: '/pages', title: 'Pages', icon: 'pages'}
  ];

  constructor(private router: Router) { }

  ngOnInit() {

    this.router.events.subscribe(event => {
      if(event instanceof NavigationStart) {

        // Reset All nav items
        this.uiSubmenuShowing = false;
        this.uiActive = false;

        if(event.url.includes('ui')) {
          this.uiSubmenuShowing = true;
          this.uiActive = true;
        }
      }
    });

    if(this.router.isActive('/ui', false)) {
      this.uiActive = true;
      this.uiSubmenuShowing = true;
    }

  }

  toggleDarkness() {
    this.isDark = !this.isDark;
    this.darknessToggle.emit(this.isDark);
  }

  changeTheme(theme: string) {
    this.activeTheme = theme;
    this.changeThemeToggle.emit(theme);
  }

  toggleUIActive() : void {
    this.uiSubmenuShowing = !this.uiSubmenuShowing;
  }

  isUIActive() : boolean {
    return this.uiActive;
  }

}
