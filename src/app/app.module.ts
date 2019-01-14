import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { environment } from '../environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import { UserListModule } from './home/components/user-list/user-list.module';
import { reducers } from './shared/store/reducers';
import { effects } from './shared/store/effects';
import { UserService } from './shared/services/users.service';
import { AppRoutingModule } from './app.routing';
import { PostUserModule } from './home/components/post-user/post-user.module';
import { PostService } from './shared/services/post.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MessageService } from './shared/services/message.service';
import { MessageUserModule } from './home/components/message-user/message-user.module';

export const STORE_CONFIG = StoreModule.forRoot(reducers);
export const EFFECTS_CONFIG = EffectsModule.forRoot(effects);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FlexLayoutModule,
    NavbarModule,
    UserListModule,
    PostUserModule,
    MessageUserModule,
    STORE_CONFIG,
    EFFECTS_CONFIG,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    EffectsModule
  ],
  providers: [UserService,PostService,MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
