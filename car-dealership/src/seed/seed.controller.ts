import { Controller, Get } from '@nestjs/common';
import { SeedService } from './seed.service';

@Controller('seed')
export class SeedController {
  constructor(private readonly seedService: SeedService) {}

  @Get('cars')
  findAll() {
    return this.seedService.runCarSeed();
  }
  @Get('brands')
  seedBrands() {
    this.seedService.runBrandsSeed();
    return `Brands seeded successfully`;
  }
}
