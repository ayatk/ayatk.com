import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})

export class AppComponent {
  title = '(´・ω・｀)やあ';
  message = '以下のリンクのどれかを選ぶとええぞ…';
  links = [
    { name: 'Twitter', url: 'https://twitter.com/AyaTokikaze' },
    { name: 'GitHub', url: 'https://github.com/ayatk' },
    { name: 'Mastodon (ぱおぱお)', url: 'https://pawoo.net/@ayatk' },
    { name: 'Blog', url: 'http://ayatk.hatenablog.com' },
  ];
}
