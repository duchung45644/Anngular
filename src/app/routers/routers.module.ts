import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutersRoutingModule } from './routers-routing.module';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
    declarations: [],
    imports: [CommonModule, RoutersRoutingModule, ThemeModule],
})
export class RoutersModule {}
