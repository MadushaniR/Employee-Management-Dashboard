import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { ClientManagementComponent } from './client-management/client-management.component';

export const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'header', component: HeaderComponent},
    {path: 'sidenav', component: SidenavComponent},
    {path: 'client-management', component: ClientManagementComponent},
    
];
