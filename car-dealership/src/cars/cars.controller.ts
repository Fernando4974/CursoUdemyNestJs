import {
  Controller,
  Get,
  Param,
  Post,
  Patch,
  Delete,
  Body,
  ParseUUIDPipe,
} from '@nestjs/common';
import { CarsService } from './cars.service';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';

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
    @Param('id', new ParseUUIDPipe())
    id: string,
  ) {
    const cars = this._carService.getCarById(id);
    console.log(cars);
    return cars;
  }
  @Post('/create')
  createCar(@Body() createCarDto: CreateCarDto) {
    this._carService.createCar(createCarDto);
    console.log('Creating car:', createCarDto);
    return createCarDto;
  }
  // @Patch(':id')
  // updateCar(@Param('id', ParseUUIDPipe) id: string) {
  //   return `This action updates a #${id} car`;
  // }
  @Patch(':id/update')
  updateCarByBody(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() updateCarDto: UpdateCarDto,
  ) {
    return this._carService.updateCar(id, updateCarDto);
  }
  @Delete(':id/delete')
  deleteCar(@Param('id', ParseUUIDPipe) id: string) {
    return this._carService.deleteCar(id);
  }
}
