import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Post } from 'src/app/shared/components/interfaces';
import { PostService } from 'src/app/shared/post.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {
posts: Post[] = []
pSub!: Subscription

  constructor(private postService: PostService) { }

  ngOnInit(): void {
		this.pSub = this.postService.getAll().subscribe(posts => {
			this.posts = posts
		})
  }

	remove(id: string) {
		
	}

	ngOnDestroy(): void {
		if(this.pSub) {
			this.pSub.unsubscribe()
		}
	}

}
