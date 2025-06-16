import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateProfileDto } from './dto/create-profile.dto';

@Injectable()
export class ProfileService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, dto: CreateProfileDto) {
    return this.prisma.profile.create({
      data: { ...dto, userId },
    });
  }

  async getByUserId(userId: number) {
    return this.prisma.profile.findUnique({ where: { userId } });
  }

  async update(userId: number, dto: CreateProfileDto) {
    const existingProfile = await this.prisma.profile.findUnique({ where: { userId } });
    if (!existingProfile) throw new NotFoundException('Profile not found');

    return this.prisma.profile.update({
      where: { userId },
      data: { ...dto },
    });
  }

  async delete(userId: number) {
    const existingProfile = await this.prisma.profile.findUnique({ where: { userId } });
    if (!existingProfile) throw new NotFoundException('Profile not found');

    return this.prisma.profile.delete({ where: { userId } });
  }
}
