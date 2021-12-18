import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main-content-container',
  templateUrl: './main-content-container.component.html',
  styleUrls: ['./main-content-container.component.scss']
})
export class MainContentContainerComponent implements OnInit {
  @Input() section!: 'dogs' | 'cats' | 'about';

  constructor() {
  }

  ngOnInit(): void {
  }

}
