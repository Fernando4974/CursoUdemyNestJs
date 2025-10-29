import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CarsService {
  private cars: Car[] = [
    { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    { id: uuid(), brand: 'Honda', model: 'Civic' },
    { id: uuid(), brand: 'Ford', model: 'Mustang' },
  ];

  public getCars() {
    return this.cars;
  }
  public getCarById(id: string) {
    const car = this.cars.find((cars) => cars.id === id);
    if (!car) throw new NotFoundException('Id Car not found');

    return car;
  }
}
