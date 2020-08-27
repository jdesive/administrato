import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ComponentsComponent} from "./components/components.component";
import {ChartsComponent} from "./charts/charts.component";
import {PagesComponent} from "./pages/pages.component";
import {ButtonsComponent} from "./ui/buttons/buttons.component";
import {FormsComponent} from "./ui/forms/forms.component";

const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {
    path: 'ui', children: [
      {path: 'buttons-indicators', component: ButtonsComponent},
      {path: 'forms', component: FormsComponent},
    ]
  },
  {path: 'components', component: ComponentsComponent},
  {path: 'charts', component: ChartsComponent},
  {path: 'pages', component: PagesComponent},
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
