import { Injectable } from '@nestjs/common';
import { NotFoundException } from '@nestjs/common';
import { Car } from './interfaces/car.interface';
import { v4 as uuid } from 'uuid';
import { CreateCarDto, UpdateCarDto } from './dto';
@Injectable()
export class CarsService {
  private cars: Car[] = [
    // { id: uuid(), brand: 'Toyota', model: 'Corolla' },
    // { id: uuid(), brand: 'Honda', model: 'Civic' },
    // { id: uuid(), brand: 'Ford', model: 'Mustang' },
  ];

  public getCars() {
    return this.cars;
  }
  public getCarById(id: string) {
    const car = this.cars.find((cars) => cars.id === id);
    if (!car) throw new NotFoundException('Id Car not found');

    return car;
  }
  public createCar(createCarDto: CreateCarDto) {
    const newCar: Car = {
      id: uuid(),
      ...createCarDto,
    };
    this.cars.push(newCar);

    return newCar;
  }
  public updateCar(id: string, updateCarDto: UpdateCarDto) {
    let carDB = this.getCarById(id);
    this.cars = this.cars.map((car) => {
      if (car.id === id) {
        carDB = { ...carDB, ...updateCarDto, id };
        return carDB;
      }
      return car;
    });
    return carDB;
  }
  public deleteCar(id: string) {
    const car = this.getCarById(id);
    if (!car) throw new NotFoundException('Id Car not found');
    this.cars = this.cars.filter((car) => car.id !== id);
    return car;
  }
  public fillCarsWithSeedData(cars: Car[]) {
    this.cars = cars;
    return this.cars;
  }
}
