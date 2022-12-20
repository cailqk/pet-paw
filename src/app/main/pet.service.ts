import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Injectable({
  providedIn: 'root',
})
export class PetService {
  constructor(private apiService: ApiService, private router: Router) {}

  createPet(value: any) {
    this.apiService.createPet(value).subscribe((res) => {
      console.log(res);
      this.router.navigate(['catalog']);
    });
  }

  getPets() {
    return this.apiService.getAllPets();
  }

  getSinglePet(id: any) {
    return this.apiService.getSinglePet(id);
  }

  deletePet(id: any) {
    return this.apiService.deletePet(id);
  }

  editPet(value: any, id: any) {
    this.apiService.editPet(value, id).subscribe(res => {
      console.log(res.toString());
      this.router.navigate([`catalog/${id}`])
    })
  }

  discardEdit(id: any) {
    this.router.navigate([`catalog/${id}`]);
  }

}
