import { Component } from '@angular/core';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.component.html',
  styleUrl: './listings.component.scss'
})
export class ListingsComponent {
  listings = [
    {
      title: 'Cozy 5 Stars Apartment',
      description: 'The place is close to Barceloneta Beach and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Barcelona.',
      price: '$899/night',
      location: 'Barcelona, Spain',
      image: 'assets/apartment.jpg'
    },
    {
      title: 'Office Studio',
      description: 'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the night life in London, UK.',
      price: '$1,119/night',
      location: 'London, UK',
      image: '/assets/studio.jpg'
    },
    {
      title: 'Beautiful Castle',
      description: 'The place is close to Metro Station and bus stop just 2 min by walk and near to "Naviglio" where you can enjoy the main night life in Milan.',
      price: '$459/night',
      location: 'Milan, Italy',
      image: 'assets/building.jpg'
    }
  ];
}
