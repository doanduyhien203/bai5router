import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Article } from "./model/article";
import { delay } from 'rxjs/operators';

const Articles: Article[] = [
    {
      id: '1',
      slug: 'bai-viet-1',
      title: 'Bai viet 1',
      content: 'Day la noi dung bai viet 1',
      updateAt: '2020-07-06T13:26:31.785Z',
    },
    {
      id: '2',
      slug: 'bai-viet-2',
      title: 'Bai viet 2',
      content: 'Day la noi dung bai viet 2 nhe',
      updateAt: '2020-07-15:00:00.000Z',
    },
  ];
  @Injectable({
    providedIn: 'root',
  })
  export class ArticleService {
    getArticleBySlug(slug: string | null): Observable<Article> {
      throw new Error('Method not implemented.');
    }
    getArticles(): Observable<Article[]> {
      return of(Articles).pipe(delay(500));
    }
  }