import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  @Cron('*/30 * * * * *') // run cron every 30 sec
  handleCrons() {
    const curTime = new Date().toLocaleString();
    this.logger.debug('Called on every second: ' + curTime);
  }
  
  @Cron('50 40 19 * * *', {
    timeZone: 'Asia/Seoul',
  })
  handleCron() {
    const curTime = new Date().toLocaleString();
    this.logger.debug('Called everyday on specific time: ' + curTime);
  }
}
