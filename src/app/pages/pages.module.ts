import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import {PagesRoutingModule} from "./pages-routing.module";
import { UiComponent } from './ui/ui.component';
import { ComponentsComponent } from './components/components.component';
import { ChartsComponent } from './charts/charts.component';
import { PagesComponent } from './pages/pages.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatButtonModule, MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule, MatChipsModule,
  MatDatepickerModule,
  MatFormFieldModule, MatIconModule, MatInputModule, MatNativeDateModule,
  MatRadioModule, MatSelectModule
} from "@angular/material";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ButtonsComponent } from './ui/buttons/buttons.component';
import {FaIconComponent, FaIconLibrary, FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {library} from "@fortawesome/fontawesome-svg-core";
import {faCheckSquare, fas, faSquare} from "@fortawesome/free-solid-svg-icons";
import { faSquare as farSquare, faCheckSquare as farCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { faStackOverflow, faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { FormsComponent } from './ui/forms/forms.component';



@NgModule({
  declarations: [DashboardComponent, UiComponent, ComponentsComponent, ChartsComponent, PagesComponent, ButtonsComponent, FormsComponent],
  providers: [FaIconComponent],
  imports: [
    CommonModule,
    PagesRoutingModule,
    MatCardModule,
    MatCheckboxModule,
    MatRadioModule,
    FormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatBadgeModule,
    MatChipsModule,
    MatAutocompleteModule,
    FontAwesomeModule
  ]
})
export class PagesModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas);
    library.addIcons(faSquare, faCheckSquare, farSquare, farCheckSquare, faStackOverflow, faGithub, faMedium);
  }
}
