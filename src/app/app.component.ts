import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  activeSide: boolean = true;
  mode: any = 'side';

  ngOnInit() {
    this.setMatDrawer(window.innerWidth);
  }

  onResize(event: any) {
    this.setMatDrawer(event.target.innerWidth);
  }

  setMatDrawer(windowInnerWidth: number) {
    if (windowInnerWidth < 1100) {
      this.mode = 'over';
      this.activeSide = false;
    } else {
      this.mode = 'side';
      this.activeSide = true;
    }
  }
}
