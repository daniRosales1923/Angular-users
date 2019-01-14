import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterModule } from '@angular/router';

const COMMON_IMPORTS = [
    CommonModule,
    MatToolbarModule,
    MatButtonModule, 
    MatIconModule,
    FlexLayoutModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    RouterModule

];
const COMMON_DECLARATIONS = [NavbarComponent];

@NgModule({
    imports: COMMON_IMPORTS,
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class NavbarModule{}

export default {
    COMMON_IMPORTS,
    COMMON_DECLARATIONS
}