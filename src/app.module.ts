import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { ProfileModule } from './profile/profile.module';
import { CvModule } from './cv/cv.module';
import { JobModule } from './job/job.module';

@Module({
  imports: [AuthModule, UserModule, ProfileModule, CvModule, JobModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
