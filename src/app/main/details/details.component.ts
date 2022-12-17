import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

   pet: any = {};

  constructor(private petService: PetService, private route: ActivatedRoute) { }
  id: any

  
  ngOnInit(): void {


this.route.params.subscribe(res => {
  this.id = res['id'];
});

this.petService.getSinglePet(this.id).subscribe(res => {
  this.pet = res;
  console.log(this.pet);
})
}

  

}
