import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})

export class CatalogComponent implements OnInit {
  
    animals = [
    {
      name: 'John',
      information: 'Something about John',
      age: 5,
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chihuahua-dog-running-across-grass-royalty-free-image-1580743445.jpg?crop=0.446xw:1.00xh;0.254xw,0&resize=980:*'
    },
    {
      name: 'Sam',
      information: 'Something about Sam',
      age: 4,
      image: 'https://www.petmd.com/sites/default/files/jack%20russell-dog.jpg'
    },
    {
      name: 'Something',
      information: 'Something about Something',
      age: 2,
      image: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445'
    },
  ];

  constructor(private apiService: ApiService) {
   }  

  ngOnInit(): void {
    this.apiService.getAllPets()
  }


}
