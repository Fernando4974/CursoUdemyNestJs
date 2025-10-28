import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';

import { CarsService } from './cars.service';

@Controller('cars')
export class CarsController {
  errorP: string;
  constructor(private readonly _carService: CarsService) {
    this.errorP = 'Method not implemented.';
  }
  @Get('/FindAll')
  getAllCars() {
    const car = this._carService.getCars();

    return car;
  }
  @Get(':id')
  getCarById(@Param('id', ParseIntPipe) id: number) {
    // if (parseInt(id).toString() === 'NaN') {
    //   return console.log('Error de tipos');
    // }

    const cars = this._carService.getCarById(+id);
    console.log(cars);
    return cars;
  }
}
