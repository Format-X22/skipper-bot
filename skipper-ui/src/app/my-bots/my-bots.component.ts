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

export interface BotListElement {
    name: string;
    type: EBotType;
    status: EBotState;
    onlineTime: string;
    state: string;
}

const BOTS_LIST_DEMO: Array<BotListElement> = [
    {
        name: 'Super bot',
        type: EBotType.FULL_AUTO,
        status: EBotState.ACTIVE,
        onlineTime: '0d 01:23',
        state: 'In position',
    },
    {
        name: 'Alpha bot',
        type: EBotType.PARAMETRIZED,
        status: EBotState.DISABLED,
        onlineTime: 'Offline',
        state: 'Disabled',
    },
    {
        name: 'Beta bot',
        type: EBotType.SEMI_AUTO,
        status: EBotState.ACTIVE,
        onlineTime: '5d 01:23',
        state: 'Wait',
    },
    {
        name: 'Helper bot',
        type: EBotType.TOOL,
        status: EBotState.BOOT,
        onlineTime: '0d 00:00',
        state: 'Boot',
    },
];

@Component({
    selector: 'app-my-bots',
    templateUrl: './my-bots.component.html',
    styleUrls: ['./my-bots.component.scss'],
})
export class MyBotsComponent {
    dataSource = BOTS_LIST_DEMO;
}
