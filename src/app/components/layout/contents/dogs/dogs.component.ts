import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Breeds } from 'src/app/models/dogsResponse';
import { DogsService } from '../../../../services/dogs.service';

@Component({
  selector: 'app-dogs',
  templateUrl: './dogs.component.html',
  styleUrls: ['./dogs.component.scss'],
})
export class DogsComponent implements OnInit {
  breedSelected = new FormControl('');
  breeds!: string[];

  constructor(private dogsS: DogsService) {
    dogsS.getAllBreeds().subscribe((resp) => {
      if (resp.status === 'success') this.breeds = Object.keys(resp.message);
    });
  }

  ngOnInit(): void {
  }
}
