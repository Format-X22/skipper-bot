import { Injectable } from '@nestjs/common';
import { CreateBotDto, TListResponse, UpdateBotDto } from './bot.dto';
import { Bot } from './bot.entity';

@Injectable()
export class BotService {
    getBot(id: Bot['id']): Bot {
        // TODO -
        return;
    }

    getBots(): TListResponse<Bot> {
        // TODO -
        return;
    }

    createBot(data: CreateBotDto): Bot {
        // TODO -
        return;
    }

    updateBot(id: Bot['id'], data: UpdateBotDto): Bot {
        // TODO -
        return;
    }

    deleteBot(id: Bot['id']): void {
        // TODO -
        return;
    }

    startBot(id: Bot['id']): void {
        // TODO -
        return;
    }

    stopBot(id: Bot['id']): void {
        // TODO -
        return;
    }

    hardStopBot(id: Bot['id']): void {
        // TODO -
        return;
    }
}
