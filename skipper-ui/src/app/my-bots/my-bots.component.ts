import { Component } from '@angular/core';

export enum EBotStatus {
    ACTIVE = 'active',
    BOOT_IN = 'boot-in',
    BOOT_OUT = 'boot-out',
    DISABLED = 'disabled',
    HARD_STOP = 'hard-stop',
}

export enum EBotType {
    FULL_AUTO = 'Full-auto bot',
    PARAMETRIZED = 'Parametrized bot',
    SEMI_AUTO = 'Semi-auto bot',
    TOOL = 'Tool bot',
    FOLLOW = 'Follow bot',
}

export interface IBotListElement {
    id: string;
    name: string;
    type: EBotType;
    status: EBotStatus;
    onlineTime: string;
    state: string;
}

const BOTS_LIST_DEMO: Array<IBotListElement> = [
    {
        id: 'aaa',
        name: 'Super bot',
        type: EBotType.FULL_AUTO,
        status: EBotStatus.ACTIVE,
        onlineTime: '0d 01:23',
        state: 'In position',
    },
    {
        id: 'bbb',
        name: 'Alpha bot',
        type: EBotType.PARAMETRIZED,
        status: EBotStatus.DISABLED,
        onlineTime: 'Offline',
        state: 'Disabled',
    },
    {
        id: 'ccc',
        name: 'Beta bot',
        type: EBotType.SEMI_AUTO,
        status: EBotStatus.ACTIVE,
        onlineTime: '5d 01:23',
        state: 'Wait',
    },
    {
        id: 'ddd',
        name: 'Helper bot',
        type: EBotType.TOOL,
        status: EBotStatus.ACTIVE,
        onlineTime: '0d 00:00',
        state: 'Wait',
    },
];

@Component({
    selector: 'app-my-bots',
    templateUrl: './my-bots.component.html',
    styleUrls: ['./my-bots.component.scss'],
})
export class MyBotsComponent {
    EBotStatus = EBotStatus;
    dataSource = BOTS_LIST_DEMO;

    onStatusClick(bot: IBotListElement): void {
        // TODO -
        alert(bot.name);

        switch (bot.status) {
            case EBotStatus.ACTIVE:
                bot.status = EBotStatus.BOOT_OUT;
                setTimeout(() => (bot.status = EBotStatus.DISABLED), 5000);
                break;
            case EBotStatus.BOOT_OUT:
            case EBotStatus.BOOT_IN:
                alert('Hard stop?');
                bot.status = EBotStatus.HARD_STOP;
                setTimeout(() => (bot.status = EBotStatus.DISABLED), 5000);
                break;
            case EBotStatus.DISABLED:
                bot.status = EBotStatus.BOOT_IN;
                setTimeout(() => (bot.status = EBotStatus.ACTIVE), 5000);
                break;
        }
    }

    onEditClick(bot: IBotListElement): void {
        // TODO -
        alert(bot.name);
    }

    onStatsClick(bot: IBotListElement): void {
        // TODO -
        alert(bot.name);
    }

    onStartClick(bot: IBotListElement): void {
        // TODO -
        alert(bot.name);
        bot.status = EBotStatus.BOOT_IN;
        setTimeout(() => (bot.status = EBotStatus.ACTIVE), 5000);
    }

    onStopClick(bot: IBotListElement): void {
        // TODO -
        alert(bot.name);
        bot.status = EBotStatus.BOOT_OUT;
        setTimeout(() => (bot.status = EBotStatus.DISABLED), 5000);
    }

    onDeleteClick(bot: IBotListElement): void {
        // TODO -
        alert(bot.name);

        switch (bot.status) {
            case EBotStatus.ACTIVE:
                alert('Hard stop?');
                bot.status = EBotStatus.HARD_STOP;
                setTimeout(() => (bot.status = EBotStatus.DISABLED), 5000);
                break;
            case EBotStatus.BOOT_IN:
            case EBotStatus.BOOT_OUT:
                alert('Hard stop?');
                bot.status = EBotStatus.HARD_STOP;
                setTimeout(() => (bot.status = EBotStatus.DISABLED), 5000);
                break;
            case EBotStatus.DISABLED:
                const index = this.dataSource.indexOf(bot);

                this.dataSource.splice(index, 1);
                break;
        }
    }
}
