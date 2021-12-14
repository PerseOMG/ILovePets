import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-main-content-container',
  templateUrl: './main-content-container.component.html',
  styleUrls: ['./main-content-container.component.scss']
})
export class MainContentContainerComponent implements OnInit {

  breedSelected = new FormControl('');

  constructor() {
  }

  ngOnInit(): void {}

}
