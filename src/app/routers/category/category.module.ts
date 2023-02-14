import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { TestCategoryComponent } from './test-category/test-category.component';
import { ThemeModule } from 'src/app/theme/theme.module';

@NgModule({
    declarations: [TestCategoryComponent],
    imports: [CommonModule, CategoryRoutingModule, ThemeModule],
})
export class CategoryModule {}
