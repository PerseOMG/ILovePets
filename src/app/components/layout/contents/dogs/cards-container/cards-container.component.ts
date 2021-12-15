import { Component, Input, OnInit } from '@angular/core';
import { DogsService } from '../../../../../services/dogs.service';


@Component({
  selector: 'app-cards-container',
  templateUrl: './cards-container.component.html',
  styleUrls: ['./cards-container.component.scss']
})
export class CardsContainerComponent implements OnInit {
  @Input() breedSelected!: string;
  images: string[] = [];

  constructor(private dogS: DogsService) { }

  ngOnInit(): void {
  }

  ngOnChanges(){
    if(this.breedSelected)
      this.dogS.getDogsByBreed(this.breedSelected).subscribe((resp: any) => {
        if(resp.status === 'success' ){
          this.images = resp.message;
        }
      })
    }
}
