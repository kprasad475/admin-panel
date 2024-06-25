import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { SettingsComponent } from './settings/settings.component';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { FilterComponent } from './filter/filter.component';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { LeafletComponent } from './leaflet/leaflet.component';
import { LeafletMapComponent } from './leaflet-map/leaflet-map.component';
import { MapboxMapComponent } from './mapbox-map/mapbox-map.component';
import { DataTableComponent } from './data-table/data-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ListingsComponent } from './listings/listings.component';
import { UserDialogComponent } from './user-dialog/user-dialog.component';




@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UserManagementComponent,
    SettingsComponent,
    FilterComponent,
   
    LeafletMapComponent,
        MapboxMapComponent,
        DataTableComponent,
        ListingsComponent,
        UserDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatInputModule,
    MatListModule,
    MatIconModule,
    MatTableModule,MatPaginatorModule
    ,MatSortModule,
    
    
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
