import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() section!: 'dogs' | 'cats' | 'about';
  @Output() aux = new EventEmitter<'dogs' | 'cats' | 'about'>();

  constructor() { }

  ngOnInit(): void {
  }

  changeSection(section: 'dogs' | 'cats' | 'about'){
    this.section = section;
    this.aux.emit(this.section)
  }

}
