import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './Layout/banner/banner.component';
import { DataTableComponent } from './Layout/data-table/data-table.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { RouterModule } from '@angular/router';
import { ChartComponent } from './Layout/chart/chart.component';
import { NavbarComponent } from './Layout/navbar/navbar.component';
import { TableComponent } from './Layout/table/table.component';
import { TabsComponent } from './Layout/tabs/tabs.component';
import { LoginComponent } from './Layout/login/login.component';
import { BreadCrumbComponent } from './Layout/bread-crumb/bread-crumb.component';
import { SafePipe } from '../safe.pipe';
import { DefaultLayoutComponent } from './Layout/default-layout/default-layout.component';

@NgModule({
    declarations: [
        BannerComponent,
        DataTableComponent,
        DefaultLayoutComponent,
        FooterComponent,
        ChartComponent,
        NavbarComponent,
        TableComponent,
        TabsComponent,
        LoginComponent,
        BreadCrumbComponent,
        SafePipe,
    ],
    imports: [CommonModule, RouterModule],
})
export class ThemeModule {}
exports: [
    BannerComponent,
    DataTableComponent,
    DefaultLayoutComponent,
    FooterComponent,
    ChartComponent,
    NavbarComponent,
    TableComponent,
    TabsComponent,
    LoginComponent,
    BreadCrumbComponent,
];
