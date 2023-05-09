import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { CreateBotDto, TListResponse, UpdateBotDto } from './bot.dto';
import { Bot } from './bot.entity';
import { BotService } from './bot.service';

@ApiTags('Bots api')
@Controller('bot')
export class BotController {
    constructor(private botService: BotService) {}

    @Get(':id')
    getBot(@Param('id', ParseUUIDPipe) id: string): Bot {
        return this.botService.getBot(id);
    }

    @Get('list')
    getBots(): TListResponse<Bot> {
        return this.botService.getBots();
    }

    @Post('new')
    createBot(@Body() data: CreateBotDto): Bot {
        return this.botService.createBot(data);
    }

    @Patch(':id')
    updateBot(@Param('id', ParseUUIDPipe) id: string, @Body() data: UpdateBotDto): Bot {
        return this.botService.updateBot(id, data);
    }

    @Delete(':id')
    deleteBot(@Param('id', ParseUUIDPipe) id: string): void {
        return this.botService.deleteBot(id);
    }

    @Post(':id/start')
    startBot(@Param('id', ParseUUIDPipe) id: string): void {
        return this.botService.startBot(id);
    }

    @Post(':id/stop')
    stopBot(@Param('id', ParseUUIDPipe) id: string): void {
        return this.botService.stopBot(id);
    }

    @Post(':id/hard-stop')
    hardStopBot(@Param('id', ParseUUIDPipe) id: string): void {
        return this.botService.hardStopBot(id);
    }
}
