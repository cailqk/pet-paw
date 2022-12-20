import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
})
export class EditComponent implements OnInit {
  constructor(private route: ActivatedRoute, private petService: PetService) {}
  id: any;
  pet: any = {};

  ngOnInit(): void {
    this.route.params.subscribe((res) => {
      this.id = res['id'];
    });

    this.petService.getSinglePet(this.id).subscribe((res) => {
      this.pet = res;
    });
  }

  editHandler(form: NgForm) {
    if (form.invalid) {
      return;
    }
    const value = form.value;
    this.petService.editPet(value, this.id);
  }

  discardHandler() {
    this.petService.discardEdit(this.id)
  }
}
