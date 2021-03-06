import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    loadChildren: "./home/home.routing#HomeRoutingModule"
  },
  {
    path: "detail-user",
    loadChildren: "./home/components/post-user/post-user.module#PostUserModule"
  },
  {
    path: "detail-message",
    loadChildren: "./home/components/message-user/message-user.module#MessageUserModule"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
