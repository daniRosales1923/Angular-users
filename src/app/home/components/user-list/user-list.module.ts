import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { UserListComponent } from './user-list.component';
import {MatListModule} from '@angular/material/list';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

const routes : Routes =[{
    path: '',
    component: UserListComponent
}]

const COMMON_IMPORTS = [
    CommonModule,
    FlexLayoutModule,
    MatListModule,
    MatIconModule
];
const COMMON_DECLARATIONS = [UserListComponent];

@NgModule({
    imports: [COMMON_IMPORTS,RouterModule.forChild(routes)],
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})

export class UserListModule{}

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}