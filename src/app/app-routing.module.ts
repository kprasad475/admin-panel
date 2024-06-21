import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { Settings } from 'http2';
import { SettingsComponent } from './settings/settings.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'user-management', component: UserManagementComponent },
  { path: 'settings', component: SettingsComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
