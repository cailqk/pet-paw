import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { PetService } from '../pet.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss'],
})
export class CatalogComponent implements OnInit {
  petsArr: any[] = [];

  constructor(private petService: PetService, private router: Router) {}

  ngOnInit(): void {
    this.petService
      .getPets()
      .pipe(
        map((resData) => {
          for (let key in resData) {
            if (resData.hasOwnProperty(key)) {
              this.petsArr.push({ ...resData[key], id: key });
            }
          }
          return this.petsArr;
        })
      )
      .subscribe((pets) => {
        // console.log(pets);
      });
  }

  showDetails(id: any) {
    console.log(id);
    this.router.navigate([`catalog/${id}`], id)
    return this.petService.getSinglePet(id);
  }
}
