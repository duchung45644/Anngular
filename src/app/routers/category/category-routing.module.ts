import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestCategoryComponent } from './test-category/test-category.component';

const routes: Routes = [{ path: 'testcategory', component: TestCategoryComponent, data: { title: 'test-category' } }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class CategoryRoutingModule {}
