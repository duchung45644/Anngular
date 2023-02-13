import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryRoutingModule } from './category-routing.module';
import { TestCategoryComponent } from './test-category/test-category.component';

@NgModule({
    declarations: [TestCategoryComponent],
    imports: [CommonModule, CategoryRoutingModule],
})
export class CategoryModule {}
