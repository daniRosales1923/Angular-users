import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'

const routes: Routes =[
    {
        path: '',
        loadChildren: './components/user-list/user-list.module#UserListModule'
    },
    {
        path: '',
        loadChildren: './components/detail-user/detail-user.module#DetailUserModule'
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})

export class HomeRoutingModule{

}