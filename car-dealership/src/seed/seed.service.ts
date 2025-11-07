import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { carsSeed } from './data/cars.seed';
import { BrandsService } from 'src/brands/brands.service';
import { brandsSeed } from './data/brands.seed';
@Injectable()
export class SeedService {
  constructor(
    private carService: CarsService,
    private brandService: BrandsService,
  ) {}
  runCarSeed() {
    this.carService.fillCarsWithSeedData(carsSeed);
    return 'Seed executed';
  }
  runBrandsSeed() {
    this.brandService.fillBrandsWithSeedData(brandsSeed);
    return 'Brands Seed executed';
  }
}
