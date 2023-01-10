import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

   pet: any = {};

  constructor(private petService: PetService, private route: ActivatedRoute, private router: Router) { }
  id: any
  show: boolean = false;
  own: boolean = false;
  
  ngOnInit(): void {
    const user = localStorage.getItem('user');
    if(user) {
      this.show = true;
    };
    
this.route.params.subscribe(res => {
  this.id = res['id'];
});

this.petService.getSinglePet(this.id).subscribe(res => {
  this.pet = res;
  if(res.owner == user) {
    this.own = true;
  }
})
}

deleteHandler() {
  const confirm = window.confirm('Do you really want to delete this pet ?');
  if(confirm == true) {
    this.petService.deletePet(this.id).subscribe(res => {
      this.router.navigate(['catalog']);
    })
  }
  
}

editHandler() {
  this.router.navigate([`edit/${this.id}`])
}
  

}
