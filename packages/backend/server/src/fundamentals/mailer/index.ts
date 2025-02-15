import { Global, Module } from '@nestjs/common';

import { OptionalModule } from '../nestjs';
import { MailService } from './mail.service';
import { MAILER } from './mailer';

@Global()
@OptionalModule({
  providers: [MAILER],
  exports: [MAILER],
  requires: ['mailer.auth.user', 'mailer.auth.pass'],
})
class MailerModule {}

@Global()
@Module({
  imports: [MailerModule],
  providers: [MailService],
  exports: [MailService],
})
export class MailModule {}
export { MailService };
