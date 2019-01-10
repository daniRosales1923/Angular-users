import { NgModule } from "@angular/core";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from "@angular/material/toolbar";
import { NavbarComponent } from './navbar.component';
import { CommonModule } from '@angular/common';

const COMMON_IMPORTS = [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule
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