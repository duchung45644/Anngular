import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from './theme/Layout/default-layout/default-layout.component';
import { LoginComponent } from './theme/Layout/login/login.component';

const routes: Routes = [
    {
        path: '',
        // component: DefaultLayoutComponent,
        loadChildren: () => import('./routers/routers.module').then((x) => x.RoutersModule),
    },
    {
        path: 'login',
        component: LoginComponent,
        // loadChildren: () => import('./routers/routers.module').then((x) => x.RoutersModule),
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
