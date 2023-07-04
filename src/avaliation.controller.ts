import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { Avaliation } from './avaliation.entity';
import { AvaliationService } from './avaliation.service';

@Controller('avaliations')
export class AvaliationController {
  constructor(private readonly avaliationService: AvaliationService) {}

  @Get()
  findAll(): Promise<Avaliation[]> {
    return this.avaliationService.findAllAvaliation();
  }

  @Get(':id')
  findOne(@Param('id') id: number): Promise<Avaliation> {
    return this.avaliationService.findOneAvaliation(id);
  }

  @Post()
  create(@Body() avaliation: Avaliation): Promise<Avaliation> {
    return this.avaliationService.createAvaliation(avaliation);
  }

  @Put(':id')
  update(
    @Param('id') id: number,
    @Body() avaliation: Avaliation,
  ): Promise<Avaliation> {
    return this.avaliationService.update(id, avaliation);
  }

  @Delete(':id')
  remove(@Param('id') id: number): Promise<void> {
    return this.avaliationService.remove(id);
  }
}
