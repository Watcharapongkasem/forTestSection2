import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  inputNumber: number = 0;
  selectMode: string = 'isPrime';
  result: boolean = false;
  constructor() {}

  ngOnInit() {
    this.calFn();
  }

  InputChanged(event: any) {
    if (event < 0) {
      this.inputNumber = 1;
    } else {
      this.inputNumber = Math.round(event);
      this.calFn();
    }
  }

  selectChanged(event: any) {
    this.selectMode = event;
    this.calFn();
  }

  calFn() {
    if (this.selectMode == 'isFibonacci') {
      console.log(this.isFibonacci());
      if (this.inputNumber != 0 && this.inputNumber != 1) {
        this.result = this.isFibonacci();
      } else {
        this.result = true;
      }
    } else {
      if (this.inputNumber > 1) {
        this.result = this.isPrime();
      } else {
        this.result = false;
      }
    }
  }

  isFibonacci(): boolean {
    var start = 0;
    var next = 1;
    var sum;
    for (let index = 0; index < this.inputNumber; index++) {
      sum = start + next;
      start = next;
      next = sum;
      if (sum == this.inputNumber) {
        return true;
      }
    }
    return false;
  }

  isPrime(): boolean {
    for (let index = 2; index < this.inputNumber; index++) {
      if (this.inputNumber % index == 0) {
        return false;
      }
    }
    return true;
  }
}
