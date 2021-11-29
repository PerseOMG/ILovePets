import { Component, Input, OnInit } from '@angular/core';
import { Breeds } from '../../../../../models/dogsResponse';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() breeds!: string[];

  constructor() {
  }

  ngOnInit(): void {}

}
