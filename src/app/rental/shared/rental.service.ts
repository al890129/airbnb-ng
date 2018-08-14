import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Rental } from './rental.model';

@Injectable()

export class RentalService {
  private rentals: Rental[] = [
    {
      id: '1',
      title: 'Central Apartment',
      city: 'New York',
      street: 'Times Square',
      catogory: 'Apartment',
      image: 'http://via.placeholder.com/350x250',
      bedrooms: 3,
      description: 'very nice apartment',
      dailyRate: 34,
      shared: false,
      createdAt: '09/22/2014'
    },
    {
        id: '2',
        title: 'Central Apartment 2',
        city: 'Washington DC',
        street: '1st street',
        catogory: 'condo',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 2,
        description: 'very nice condo',
        dailyRate: 54,
        shared: false,
        createdAt: '02/21/2015'
      },
      {
        id: '3',
        title: 'Central Apartment 3',
        city: 'Los Angeles',
        street: 'Hollywood street',
        catogory: 'house',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 5,
        description: 'very nice house',
        dailyRate: 85,
        shared: false,
        createdAt: '05/22/2005'
      },
      {
        id: '4',
        title: 'Central Apartment 4',
        city: 'San franciso',
        street: '3rd street',
        catogory: 'condo',
        image: 'http://via.placeholder.com/350x250',
        bedrooms: 4,
        description: 'very nice condo',
        dailyRate: 14,
        shared: false,
        createdAt: '03/12/2016'
      },
  ];

    public getRentalById(rentalId: string): Observable<Rental> {
      return new Observable<Rental>((observer)=>{
        setTimeout(()=>{
          const foundRental = this.rentals.find((rental)=>{
            return rental.id == rentalId
          })
          observer.next(foundRental)
        },500)

      })
    }


    public getRentals(): Observable<Rental[]> {
      return new Observable<Rental[]>((observer)=>{
        setTimeout(()=>{
          observer.next(this.rentals)
        },1000);

        // setTimeout(()=>{
        //   observer.error('I AM AN ERROR')
        // },2000);
        //
        // setTimeout(()=>{
        //   observer.complete()
        // },3000);
      })


    }

}
