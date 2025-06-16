// src/profile/profile.module.ts
import { Module } from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ProfileController } from './profile.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [ProfileService, PrismaService],
  controllers: [ProfileController],
  exports: [ProfileService],
})
export class ProfileModule {}
