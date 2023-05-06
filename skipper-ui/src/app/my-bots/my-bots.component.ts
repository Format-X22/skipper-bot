import { Component } from '@angular/core';

export enum EBotState {
    ACTIVE = 'active',
    BOOT = 'boot',
    DISABLED = 'disabled',
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
    status: EBotState;
    onlineTime: string;
    state: string;
}

const BOTS_LIST_DEMO: Array<IBotListElement> = [
    {
        id: 'aaa',
        name: 'Super bot',
        type: EBotType.FULL_AUTO,
        status: EBotState.ACTIVE,
        onlineTime: '0d 01:23',
        state: 'In position',
    },
    {
        id: 'bbb',
        name: 'Alpha bot',
        type: EBotType.PARAMETRIZED,
        status: EBotState.DISABLED,
        onlineTime: 'Offline',
        state: 'Disabled',
    },
    {
        id: 'ccc',
        name: 'Beta bot',
        type: EBotType.SEMI_AUTO,
        status: EBotState.ACTIVE,
        onlineTime: '5d 01:23',
        state: 'Wait',
    },
    {
        id: 'ddd',
        name: 'Helper bot',
        type: EBotType.TOOL,
        status: EBotState.ACTIVE,
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
    EBotState = EBotState;
    dataSource = BOTS_LIST_DEMO;

    onStatusClick(bot: IBotListElement): void {
        // TODO -
        alert(bot.name);

        if (bot.status === EBotState.ACTIVE) {
            this.onStopClick(bot);
        } else if (bot.status === EBotState.DISABLED) {
            this.onStartClick(bot);
        } else {
            alert('Hard drop?');
            this.onStopClick(bot);
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
        bot.status = EBotState.BOOT;
        setTimeout(() => (bot.status = EBotState.ACTIVE), 5000);
    }

    onStopClick(bot: IBotListElement): void {
        // TODO -
        alert(bot.name);
        bot.status = EBotState.BOOT;
        setTimeout(() => (bot.status = EBotState.DISABLED), 5000);
    }

    onDeleteClick(bot: IBotListElement): void {
        // TODO -
        alert(bot.name);
    }
}
