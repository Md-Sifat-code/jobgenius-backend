// src/job/dto/job.dto.ts
import { ApiProperty } from '@nestjs/swagger';

export class JobDto {
  @ApiProperty()
  id?: number;

  @ApiProperty()
  title: string;

  @ApiProperty()
  companyName: string;

  @ApiProperty()
  location: string;

  @ApiProperty()
  absoluteUrl: string;

  @ApiProperty({ description: 'BigInt converted to string for Swagger compatibility' })
  internalJobId: string;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  firstPublished: Date;

  @ApiProperty({ required: false })
  requisitionId?: string;

  @ApiProperty({ type: 'object', isArray: true, additionalProperties: true })
  dataCompliance: any[];

  @ApiProperty({ type: 'object', isArray: true, additionalProperties: true })
  metadata: any[];
}
