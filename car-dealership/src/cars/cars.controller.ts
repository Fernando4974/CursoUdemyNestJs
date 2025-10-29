import {
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Patch,
  Delete,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { Json } from 'sequelize/lib/utils';
import { CreateCarDto } from './dto/create-car.dto';

@Controller('cars')
export class CarsController {
  constructor(private readonly _carService: CarsService) {}
  @Get('/FindAll')
  getAllCars() {
    const cars = this._carService.getCars();

    return cars;
  }
  @Get(':id')
  getCarById(
    @Param('id', new ParseUUIDPipe({ version: '4', errorHttpStatusCode: 404 }))
    id: string,
  ) {
    const cars = this._carService.getCarById(id);
    console.log(cars);
    return cars;
  }
  @Post('/create')
  createCar(@Body() createCarDto: CreateCarDto) {
    return createCarDto;
  }
  @Patch(':id/update')
  updateCar(@Param('id', ParseIntPipe) id: number) {
    return `This action updates a #${id} car`;
  }
  @Patch(':id/update')
  updateCarByBody(@Body() body: Json) {
    // crear interface per al body de este endpoint
    return body;
  }
  @Delete(':id/delete')
  deleteCar(@Param('id', ParseIntPipe) id: number) {
    return `This action deletes a #${id} car`;
  }
}
