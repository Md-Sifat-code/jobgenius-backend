import { Controller, Get, Param } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiParam,ApiOkResponse } from '@nestjs/swagger';
import { JobService } from './job.service';
import { JobDto } from './dto/job.dto';
@ApiTags('Jobs')
@Controller('jobs')
export class JobController {
  constructor(private readonly jobService: JobService) {}

  @Get('refresh')
  @ApiOperation({ summary: 'Fetch and store job data from top companies' })
  async refresh() {
    await this.jobService.fetchAndStoreJobs();
    return { message: 'Job data fetched and stored successfully' };
  }
  @Get()
  @ApiOperation({ summary: 'Get all jobs' })
  @ApiOkResponse({ type: [JobDto] }) // 🛠️ Add this line
  getAllJobs() {
    return this.jobService.getAllJobs();
  }


  @Get('company/:name')
  @ApiOperation({ summary: 'Get jobs by company name (from database)' })
  @ApiParam({ name: 'name', description: 'Company name to filter jobs (e.g., stripe)' })
  getByCompany(@Param('name') name: string) {
    return this.jobService.getJobsByCompany(name);
  }
}
