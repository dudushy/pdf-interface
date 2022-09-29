/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
    this.setupDate();
  }

  ngAfterViewInit() {
    console.log(`[${this.title}#ngAfterViewInit]`);

    window.onresize = () => {
      console.log(`[${this.title}#onresize]`);
      this.updateMaskSize();
    };
  }

  setupDate() {
    console.log(`[${this.title}#setupDate]`);

    const date = new Date();
    console.log(`[${this.title}#setupDate] date`, date);

    const currentHour = date.getHours() > 10 ? date.getHours() : ('0' + date.getHours());
    const currentMinute = date.getMinutes() > 10 ? date.getMinutes() : ('0' + date.getMinutes());
    const currentTime = `${currentHour}:${currentMinute}`;
    console.log(`[${this.title}#setupDate] currentTime`, currentTime);

    const dateTime = document.getElementById('date-time');
    console.log(`[${this.title}#setupDate] dateTime`, dateTime);
    dateTime!.innerHTML = currentTime;

    const currentDay = date.getDate() > 10 ? date.getDate() : ('0' + date.getDate());
    console.log(`[${this.title}#setupDate] currentDay`, currentDay);

    const dateDay = document.getElementById('date-day');
    console.log(`[${this.title}#setupDate] dateDay`, dateDay);
    dateDay!.innerHTML = currentDay.toString();

    const currentMonth = (date.getMonth() + 1) > 10 ? (date.getMonth() + 1) : ('0' + (date.getMonth() + 1));
    console.log(`[${this.title}#setupDate] currentMonth`, currentMonth);

    const dateMonth = document.getElementById('date-month');
    console.log(`[${this.title}#setupDate] dateMonth`, dateMonth);
    dateMonth!.innerHTML = currentMonth.toString();

    const currentYear = date.getFullYear().toString().slice(-2);
    console.log(`[${this.title}#setupDate] currentYear`, currentYear);

    const dateYear = document.getElementById('date-year');
    console.log(`[${this.title}#setupDate] dateYear`, dateYear);
    dateYear!.innerHTML = currentYear;
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
