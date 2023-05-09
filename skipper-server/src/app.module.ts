import { Module } from '@nestjs/common';
import { StatusModule } from './status/status.module';
import { BotModule } from './bot/bot.module';

@Module({
    imports: [StatusModule, BotModule],
    controllers: [],
    providers: [],
})
export class AppModule {}
