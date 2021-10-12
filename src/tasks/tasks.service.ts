import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class TasksService {
  private readonly logger = new Logger(TasksService.name);
  
  @Cron('*/30 * * * * *') // run cron every 30 sec
  handleCron() {
    const a = new Date().toLocaleString();
    this.logger.debug('Called on every second: ' + a);
  }
}
