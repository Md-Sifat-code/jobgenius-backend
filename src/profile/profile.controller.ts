import { Controller, Post, Body, Param, Get, Put, Delete, ParseIntPipe } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { CreateProfileDto } from './dto/create-profile.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('profile')
@Controller('profile')
export class ProfileController {
  constructor(private profileService: ProfileService) {}

  @Post(':userId')
  @ApiOperation({ summary: 'Create Profile for user' })
  create(@Param('userId', ParseIntPipe) userId: number, @Body() dto: CreateProfileDto) {
    return this.profileService.create(userId, dto);
  }

  @Get(':userId')
  @ApiOperation({ summary: 'Get Profile by user ID' })
  getByUserId(@Param('userId', ParseIntPipe) userId: number) {
    return this.profileService.getByUserId(userId);
  }

  @Put(':userId')
  @ApiOperation({ summary: 'Update Profile for user' })
  update(@Param('userId', ParseIntPipe) userId: number, @Body() dto: CreateProfileDto) {
    return this.profileService.update(userId, dto);
  }

  @Delete(':userId')
  @ApiOperation({ summary: 'Delete Profile for user' })
  delete(@Param('userId', ParseIntPipe) userId: number) {
    return this.profileService.delete(userId);
  }
}
