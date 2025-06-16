// src/profile/dto/create-profile.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class CreateProfileDto {
  @ApiProperty() fullName: string;
  @ApiProperty() email: string;
  @ApiProperty() phoneNumber: string;
  @ApiProperty() location: string;
  @ApiProperty() linkedinProfile: string;
  @ApiProperty() portfolioLink: string;
  @ApiProperty() preferredJobRole: string;
  @ApiProperty() professionalSummary: string;
}
