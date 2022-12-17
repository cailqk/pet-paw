import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
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

}
