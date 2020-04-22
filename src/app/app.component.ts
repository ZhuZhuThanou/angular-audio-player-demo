import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  playlist = [
    {
      title: 'Listen and move',
      link: 'https://funksyou.com/fileDownload/Songs/128/13080.mp3'
    }
  ];
}
