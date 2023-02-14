import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './theme/Layout/login/login.component';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./routers/routers.module').then((x) => x.RoutersModule),
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
