import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLayoutComponent } from '../theme/Layout/default-layout/default-layout.component';
import { TestDashboardComponent } from './dashboard/test-dashboard/test-dashboard.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultLayoutComponent,
        // canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            {
                path: 'dashboard',
                component: TestDashboardComponent,
                data: { title: 'Dashboard', titleI18n: 'dashboard' },
            },
            {
                path: 'category',
                loadChildren: () => import('./category/category.module').then((m) => m.CategoryModule),
                data: { title: 'category', titleI18n: 'category' },
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
                data: { title: 'dashboard', titleI18n: 'dashboard' },
            },
            {
                path: 'manage',
                loadChildren: () => import('./manage/manage.module').then((m) => m.ManageModule),
                data: { title: 'manage', titleI18n: 'manage' },
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class RoutersRoutingModule {}
