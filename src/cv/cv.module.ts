// src/cv/cv.module.ts
import { Module } from '@nestjs/common';
import { CvService } from './cv.service';
import { CvController } from './cv.controller';
import { PrismaService } from '../prisma.service';

@Module({
  providers: [CvService, PrismaService],
  controllers: [CvController],
  exports: [CvService],
})
export class CvModule {}
