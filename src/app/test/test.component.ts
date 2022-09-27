/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {
  title = 'TestComponent';

  path = 'assets/samples/paint_sample.png';

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
  ) {
    console.log(`[${this.title}#constructor]`);
  }

  ngOnInit(): void {
    console.log(`[${this.title}#ngOnInit]`);

    this.loadImage();
  }

  ngAfterViewInit() {
    console.log(`[${this.title}#ngAfterViewInit]`);

    window.onresize = () => {
      console.log(`[${this.title}#onresize]`);
      this.updateMaskSize();
    };
  }

  updateItem(event: any) {
    console.log(`[${this.title}#updateItem] event`, event);

    const className = event.target.className;
    console.log(`[${this.title}#updateItem] className`, className);

    const allItems = document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>;
    console.log(`[${this.title}#updateItem] allItems`, allItems);

    for (const [index, item] of Object.entries(allItems)) {
      console.log(`[${this.title}#updateItem] index: ${index} | item: `, item);

      item.removeAttribute('isOn');
    }

    event.target.setAttribute('isOn', '');
  }

  updateMaskSize() {
    console.log(`[${this.title}#updateMaskSize]`);

    const img = document.getElementById('img') as HTMLImageElement;
    const mask = document.getElementById('mask') as HTMLDivElement;

    console.log(`[${this.title}#updateMaskSize] img`, img.height);

    // mask.style.width = `${img.clientWidth}px`;
    mask.style.width = `${img.width}px`;
    // mask.style.height = `${img.clientHeight}px`;
    mask.style.height = `${img.height}px`;
  }

  loadImage() {
    console.log(`[${this.title}#loadImage] path`, this.path);

    const img = document.getElementById('img') as HTMLImageElement;
    console.log(`[${this.title}#loadImage] img`, img);

    img.src = this.path;
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
