import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PetService } from '../pet.service'; 

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  constructor(private petService: PetService) { }

  ngOnInit(): void {
  }

  createHandler(form: NgForm) {
    if(form.invalid) {return;}
    const value = form.value;
    this.petService.createPet(value);
  }

}
