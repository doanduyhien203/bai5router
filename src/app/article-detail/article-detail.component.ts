import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrls: ['./article-detail.component.css'],
})
export class ArticleDetailComponent implements OnInit {
  article$: Observable<Article> | undefined;
  constructor(private _route: ActivatedRoute, private _api: ArticleService) {}

  ngOnInit(): void {
    let slug = this._route.snapshot.paramMap.get('slug');
    this.article$ = this._api.getArticleBySlug(slug);
  }
}
