import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import axios from 'axios';

@Injectable()
export class JobService {
  constructor(private prisma: PrismaService) {}

  async fetchAndStoreJobs() {
    const companies = [
      'stripe',
      'airbnb',
      'linkedin',
      'dropbox',
      'twilio',
      'coinbase',
      'databricks',
      'cloudflare',
      'instacart',
      'pinterest',
      'figma',
      'notion',
      'turing',
      'duolingo',
      'squarespace',
      'reddit',
      'roku',
    ];

    for (const company of companies) {
      try {
        const url = `https://boards-api.greenhouse.io/v1/boards/${company}/jobs`;
        const { data } = await axios.get(url);
        const jobs = (data as { jobs: any[] }).jobs;

        if (!jobs || jobs.length === 0) {
          console.log(`⚠️ No jobs found for ${company}`);
          continue;
        }

        for (const job of jobs) {
          await this.prisma.job.upsert({
            where: { internalJobId: BigInt(job.id) },
            update: {
              title: job.title,
              companyName: job.company_name,
              location: job.location?.name ?? 'Unknown',
              absoluteUrl: job.absolute_url,
              updatedAt: new Date(job.updated_at),
              firstPublished: new Date(job.first_published),
              requisitionId: job.requisition_id ?? null,
              dataCompliance: job.data_compliance ?? [],
              metadata: job.metadata ?? [],
            },
            create: {
              title: job.title,
              companyName: job.company_name,
              location: job.location?.name ?? 'Unknown',
              absoluteUrl: job.absolute_url,
              internalJobId: BigInt(job.id),
              updatedAt: new Date(job.updated_at),
              firstPublished: new Date(job.first_published),
              requisitionId: job.requisition_id ?? null,
              dataCompliance: job.data_compliance ?? [],
              metadata: job.metadata ?? [],
            },
          });
        }

        console.log(`✅ ${jobs.length} jobs fetched for ${company}`);
      } catch (err) {
        console.error(`❌ Error fetching jobs for ${company}:`, err.message);
        if (err.response) {
          console.error(`Status: ${err.response.status}, Data:`, err.response.data);
        }
      }
    }
  }

  async getAllJobs() {
    const jobs = await this.prisma.job.findMany({
      orderBy: { updatedAt: 'desc' },
    });

    return jobs.map((job) => ({
      ...job,
      internalJobId: job.internalJobId.toString(),
    }));
  }

  async getJobsByCompany(companyName: string) {
    const jobs = await this.prisma.job.findMany({
      where: {
        companyName: {
          contains: companyName,
          mode: 'insensitive',
        },
      },
      orderBy: { updatedAt: 'desc' },
    });

    return jobs.map((job) => ({
      ...job,
      internalJobId: job.internalJobId.toString(),
    }));
  }
}
