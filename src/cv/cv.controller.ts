import { Controller, Post, Body, Param, Get, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { CvService } from './cv.service';
import { CreateCVDto } from './dto/create-cv.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('cv')
@Controller('cv')
export class CvController {
  constructor(private cvService: CvService) {}

  @Post(':userId')
  @ApiOperation({ summary: 'Create CV for user' })
  create(@Param('userId', ParseIntPipe) userId: number, @Body() dto: CreateCVDto) {
    return this.cvService.create(userId, dto);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get CV by user ID' })
  getByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.cvService.getByUserId(userId);
  }

  @Put(':userId')
  @ApiOperation({ summary: 'Update CV for user' })
  update(@Param('userId', ParseIntPipe) userId: number, @Body() dto: CreateCVDto) {
    return this.cvService.update(userId, dto);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Delete CV for user' })
  delete(@Param('userId', ParseIntPipe) userId: number) {
    return this.cvService.delete(userId);
  }
}
