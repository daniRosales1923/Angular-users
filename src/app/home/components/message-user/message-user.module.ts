import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MessageUserComponent } from './message-user.component';

const routes : Routes =[{
    path: ':id',
    component: MessageUserComponent
}]

const COMMON_IMPORTS = [
    CommonModule,
    FlexLayoutModule
];
const COMMON_DECLARATIONS = [MessageUserComponent];

@NgModule({
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})

export class MessageUserModule{}

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}