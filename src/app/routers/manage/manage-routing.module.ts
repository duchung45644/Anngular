import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TestManageComponent } from './test-manage/test-manage.component';

const routes: Routes = [{ path: 'testmanage', component: TestManageComponent, data: { title: 'test-manage' } }];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ManageRoutingModule {}
