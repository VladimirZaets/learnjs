import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorizationPageComponent } from '../layout/authorization.page.component/authorization.page.component';

export const routes: Routes = [
    { path: 'authorization', component: AuthorizationPageComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
