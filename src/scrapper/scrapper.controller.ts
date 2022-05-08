import { Controller, Get, Param } from '@nestjs/common';
import { ScrapperService } from './scrapper.service';

@Controller('computers')
export class ScrapperController {
  constructor(private readonly scrapperService: ScrapperService) {}

  @Get()
  findAll() {
    return this.scrapperService.findAll();
  }

  @Get(':brand')
  findByBrand(@Param('brand') brand: string) {
    return this.scrapperService.findByBrand(brand);
  }
}
