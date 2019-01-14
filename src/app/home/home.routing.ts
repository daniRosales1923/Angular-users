import { NgModule } from "@angular/core";
import {Routes, RouterModule} from '@angular/router'

const routes: Routes =[
    {
        path: '',
        loadChildren: './components/user-list/user-list.module#UserListModule'
    },
    {
        path: '',
        loadChildren: './components/post-user/post-user.module#PostUserModule'
    },
    {
        path: '',
        loadChildren: './components/message-user/message-user.module#MessageUserModule'
    }
]

@NgModule({
    imports:[RouterModule.forChild(routes)]
})

export class HomeRoutingModule{

}