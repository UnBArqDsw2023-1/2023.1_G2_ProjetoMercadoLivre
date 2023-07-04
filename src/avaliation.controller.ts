import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { Avaliation } from './avaliation.entity';
import { AvaliationService } from './avaliation.service';

@Controller('avaliations')
export class AvaliationController {
  constructor(private readonly avaliationService: AvaliationService) {}

  @Get()
  findAll() {
    return this.avaliationService.findAllAvaliation();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.avaliationService.findOneAvaliation(id);
  }

  @Post()
  create(@Body() avaliation: Avaliation) {
    return this.avaliationService.createAvaliation(avaliation);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() avaliation: Avaliation) {
    return this.avaliationService.update(id, avaliation);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.avaliationService.remove(id);
  }
}
