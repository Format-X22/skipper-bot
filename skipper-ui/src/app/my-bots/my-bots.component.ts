import { Component } from '@angular/core';

export enum EBotState {
    NEW = 'NEW',
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED',
}

export enum EBotType {
    FULL_AUTO = 'Full-auto bot',
    PARAMETRIZED = 'Parametrized bot',
    SEMI_AUTO = 'Semi-auto bot',
    TOOL = 'Tool bot',
}

export interface BotListElement {
    name: string;
    type: EBotType;
    status: EBotState;
    state: string;
}

const BOTS_LIST_DEMO: Array<BotListElement> = [
    {
        name: 'Super bot',
        type: EBotType.FULL_AUTO,
        status: EBotState.ACTIVE,
        state: 'In position',
    },
    {
        name: 'Alpha bot',
        type: EBotType.PARAMETRIZED,
        status: EBotState.DISABLED,
        state: '-',
    },
    {
        name: 'Beta bot',
        type: EBotType.SEMI_AUTO,
        status: EBotState.NEW,
        state: '-',
    },
    {
        name: 'Helper bot',
        type: EBotType.TOOL,
        status: EBotState.NEW,
        state: '-',
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
