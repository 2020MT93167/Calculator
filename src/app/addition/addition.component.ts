import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  templateUrl: './addition.component.html',
  styleUrls: ['./addition.component.css']
})
export class AdditionComponent implements OnInit {

  val1!: any;
  val2!: any;
  val3!: any;
  invalidInputs: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  getSum(){
    if(this.val1== null || this.val2== null) {
      this.invalidInputs = true;
    } else {
    this.val3 = this.val1 + this.val2;
    this.invalidInputs = false;
    } 
    }

}
