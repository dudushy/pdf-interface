/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-pdf-interface',
  templateUrl: './pdf-interface.component.html',
  styleUrls: ['./pdf-interface.component.scss']
})
export class PdfInterfaceComponent implements OnInit {
  title = 'PdfInterfaceComponent';

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);
  }

  updateView(from: string) {
    console.log(`[${this.title}#updateView] from`, from);

    this.cdr.detectChanges;
  }

  redirectTo(url: any, from: any) {
    console.log(`[${this.title}#redirectTo] ${from} | url`, url);

    this.router.navigateByUrl(`/${url}`);

    this.updateView(this.title);
  }
}
