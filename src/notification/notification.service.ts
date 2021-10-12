import { Injectable, Logger } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

@Injectable()
export class NotificationService {
  private readonly logger = new Logger(NotificationService.name);

  @Cron('0 26 16 * * *', {
    timeZone: 'Asia/Seoul',
  })
  handleCron() {
    const curTime = new Date().toLocaleString();
    this.logger.debug('Called everyday on specific time: ' + curTime);
  }
}
