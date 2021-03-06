import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../../models/post.model";
import { Store, select } from "@ngrx/store";
import { AppState } from "src/app/shared/store/reducers";
import * as fromActions from "../../../shared/store/actions/Post-user.actions";
import { User } from "../../models/users.model";
import { ActivatedRoute } from '@angular/router';
import { getUsers, getUserById } from 'src/app/shared/store/selectors/users.selectors';
import { PostService } from 'src/app/shared/services/post.service';
import { getDetail, getDetailUserId } from 'src/app/shared/store/selectors/post-user.selector';
@Component({
  selector: "app-post-user",
  templateUrl: "./post-user.component.html",
  styleUrls: ["./post-user.component.scss"]
})
export class PostUserComponent implements OnInit {
  posts$: Observable<Post[]>;
  user$: Observable<User>;
  id: any;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private postService: PostService) {
    this.id = this.route.snapshot.params.id;
    this.user$ = this.store.select(getUserById, { id: this.id });
    
    this.posts$ = this.store.select(getDetailUserId(this.id));
  }

  ngOnInit() {
    this.store.dispatch(new fromActions.GetPost(this.id));
  }
}
