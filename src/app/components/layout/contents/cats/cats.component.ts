import { Component, OnInit } from '@angular/core';
import { CatsService } from '../../../../services/cats.service';
import { FactsResponse } from '../../../../models/catsResponse';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {
  factsData!: string;

  constructor(private catsS: CatsService) {
    this.getAFact();
  }

  ngOnInit(): void {
  }

  getAFact(){
    this.catsS.getFact().subscribe((resp) => {
      this.factsData = resp.text;
    });
  }

}
