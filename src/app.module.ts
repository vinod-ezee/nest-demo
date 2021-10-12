import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksModule } from './tasks/tasks.module';
import { NotificationModule } from './notification/notification.module';

@Module({
  imports: [ScheduleModule.forRoot(), TasksModule, NotificationModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
