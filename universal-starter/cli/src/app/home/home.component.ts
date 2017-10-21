import { Component, OnInit, APP_ID, PLATFORM_ID, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'home',
  template: `<h3>{{ message }}</h3><p>{{ news | json }}</p><div id="div">inner</div>`
})
export class HomeComponent implements OnInit {
  public message: string;


  news: string[] = [];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    @Inject(APP_ID) private appId: string, 
    private transferState: TransferState) {}


  ngOnInit() {

    const NEWS_KEY = makeStateKey<string[]>('news');

    console.log(document.getElementById('div').innerText);

    console.log('platformId', this.platformId);
    console.log('appId', this.appId);
    console.log('isPlattformServer', isPlatformServer(this.platformId));
    console.log('isPlatformBrowser', isPlatformBrowser(this.platformId));

    if (this.transferState.hasKey(NEWS_KEY)) {
      this.news = this.transferState.get<string[]>(NEWS_KEY, null);
      this.transferState.remove(NEWS_KEY);
      console.log('get news from cache');
    }
    else {
      this.news = ['A', 'B', 'C'];
      this.transferState.onSerialize<string[]>(NEWS_KEY, () => this.news);
    }

    this.message = 'Hello';
  }
}