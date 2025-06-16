import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateCVDto } from './dto/create-cv.dto';

@Injectable()
export class CvService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, dto: CreateCVDto) {
    const { experiences, ...cvData } = dto;
    return this.prisma.userCv.create({
      data: {
        ...cvData,
        userId,
        experiences: {
          create: experiences,
        },
      },
      include: { experiences: true },
    });
  }

  async getByUserId(userId: number) {
    return this.prisma.userCv.findUnique({
      where: { userId },
      include: { experiences: true },
    });
  }

  async update(userId: number, dto: CreateCVDto) {
    const existingCv = await this.prisma.userCv.findUnique({ where: { userId } });
    if (!existingCv) throw new NotFoundException('CV not found');

    // Delete old experiences first (simplest way)
    await this.prisma.workExperience.deleteMany({ where: { userCvId: existingCv.id } });

    const { experiences, ...cvData } = dto;
    return this.prisma.userCv.update({
      where: { userId },
      data: {
        ...cvData,
        experiences: {
          create: experiences,
        },
      },
      include: { experiences: true },
    });
  }

  async delete(userId: number) {
    const existingCv = await this.prisma.userCv.findUnique({ where: { userId } });
    if (!existingCv) throw new NotFoundException('CV not found');
    return this.prisma.userCv.delete({ where: { userId } });
  }
}
