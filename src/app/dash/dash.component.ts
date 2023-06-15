import { Component, inject } from '@angular/core';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent {
  private breakpointObserver = inject(BreakpointObserver);

  panelOpenState = false;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'BREAKING', cols: 1, rows: 1 },
          { title: 'BREAKING NEWS', cols: 1, rows: 1 },
          { title: 'BREAKING NEWS', cols: 1, rows: 1 },
          { title: 'BREAKING', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'BREAKING NEWS', cols: 2, rows: 1 },
        { title: 'BREAKING NEWS', cols: 1, rows: 1 },
        { title: 'BREAKING NEWS', cols: 1, rows: 2 },
        { title: 'BREAKING NEWS', cols: 1, rows: 1 }
      ];
    })
  );
}
