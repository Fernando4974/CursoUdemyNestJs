import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class CarsService {
  private cars = [
    { id: 1, brand: 'Toyota', model: 'Corolla', year: 2020 },
    { id: 2, brand: 'Honda', model: 'Civic', year: 2019 },
    { id: 3, brand: 'Ford', model: 'Mustang', year: 2021 },
  ];

  public getCars() {
    return this.cars;
  }
  public getCarById(id: number) {
    if (id > this.cars.length || id < 0)
      throw new NotFoundException('Id Car not found');

    return this.cars.find((car) => car.id === id);
  }
}
