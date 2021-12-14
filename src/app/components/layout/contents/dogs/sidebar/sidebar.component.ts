import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Breeds } from '../../../../../models/dogsResponse';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() breedSelected!: FormControl;
  @Input() breeds!: string[];
  @Output() aux = new EventEmitter<FormControl>();

  constructor() {
  }

  ngOnInit(): void {}

  a(breed: string){
    if(breed != this.breedSelected.value) this.breedSelected.setValue(breed);
    else this.breedSelected.setValue('');
    this.aux.emit(this.breedSelected)
  }
}
