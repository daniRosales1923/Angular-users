import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from '@angular/common';
import { PostUserComponent } from './post-user.component';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';

const routes : Routes =[{
    path: ':id',
    component: PostUserComponent
}]

const COMMON_IMPORTS = [
    CommonModule,
    FlexLayoutModule,
    MatCardModule,
    MatIconModule,
    MatListModule
];
const COMMON_DECLARATIONS = [PostUserComponent];

@NgModule({
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})

export class PostUserModule{}

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}