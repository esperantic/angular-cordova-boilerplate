import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HistoryComponent} from './components/history/history.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';

const routes: Routes = [
  {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'history', component: HistoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
