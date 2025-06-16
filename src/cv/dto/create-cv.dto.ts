// src/cv/dto/create-cv.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class WorkExperienceDto {
  @ApiProperty() jobTitle: string;
  @ApiProperty() company: string;
  @ApiProperty() startYear: string;
  @ApiProperty() endYear: string;
  @ApiProperty() responsibilities: string;
}

export class CreateCVDto {
  @ApiProperty() fullName: string;
  @ApiProperty() email: string;
  @ApiProperty() phone: string;
  @ApiProperty() location: string;
  @ApiProperty() degree: string;
  @ApiProperty() university: string;
  @ApiProperty() duration: string;
  @ApiProperty() description: string;

  @ApiProperty({ type: [WorkExperienceDto] })
  experiences: WorkExperienceDto[];

  @ApiProperty({ type: [String] })
  skills: string[];
}
