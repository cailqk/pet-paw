import { Component } from '@angular/core';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})


export class CatalogComponent{
  
    animals = [
    {
      name: 'John',
      information: 'Something about John',
      image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/chihuahua-dog-running-across-grass-royalty-free-image-1580743445.jpg?crop=0.446xw:1.00xh;0.254xw,0&resize=980:*'
    },
    {
      name: 'Sam',
      information: 'Something about Sam',
      image: 'https://www.petmd.com/sites/default/files/jack%20russell-dog.jpg'
    },
    {
      name: 'Something',
      information: 'Something about Something',
      image: 'https://www.cdc.gov/healthypets/images/pets/cute-dog-headshot.jpg?_=42445'
    },
    {
      name: 'Another',
      information: 'Something about Another',
      image: 'Another picture'
    }
  ];

  constructor() { }



}