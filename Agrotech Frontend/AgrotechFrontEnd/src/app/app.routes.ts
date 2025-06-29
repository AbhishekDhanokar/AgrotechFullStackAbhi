import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { DealsComponent } from './pages/deals/deals.component';

import { GovernmentSchemesComponent } from './pages/governmemnt-schemes/governmemnt-schemes.component';
import { AboutusComponent } from './pages/aboutus/aboutus.component';

export const routes: Routes = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },   // Default route
    { path: 'login', component: LoginComponent },            // Login page
    { path: 'register', component: RegisterComponent },      // Registration page 
    { path: 'home', component: HomeComponent },  // Wildcard route to redirect to login for any unknown paths
    { path: 'products', component: ProductsComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'deals', component: DealsComponent },
    { path: 'about', component: AboutusComponent },
    { path: 'governmemnt-schemes', component: GovernmentSchemesComponent },
];
