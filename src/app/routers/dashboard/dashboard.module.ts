import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { TestDashboardComponent } from './test-dashboard/test-dashboard.component';

@NgModule({
    declarations: [TestDashboardComponent],
    imports: [CommonModule, DashboardRoutingModule],
})
export class DashboardModule {}
