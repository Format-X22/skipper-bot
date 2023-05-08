import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TStatus } from '../api.type';
import { APP_PRODUCTION_VERSION } from '../api.const';

@ApiTags('Status')
@Controller('')
export class StatusController {
    @Get('status')
    getStatus(): TStatus {
        const appVersion = APP_PRODUCTION_VERSION;
        const versionSplit = appVersion.split('.');

        return {
            version: {
                full: appVersion,
                major: Number(versionSplit[0]),
                minor: Number(versionSplit[1]),
                fix: Number(versionSplit[2]),
            },
        };
    }
}
