import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../model/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})
export class ArticleListComponent implements OnInit {

  articles$: Observable<Article[]> | undefined;
  constructor(private _api: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
  }
}