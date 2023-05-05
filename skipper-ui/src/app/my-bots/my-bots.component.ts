import { Component } from '@angular/core';

export enum EBotState {
    NEW = 'NEW',
    ACTIVE = 'ACTIVE',
    DISABLED = 'DISABLED',
}

export interface BotListElement {
    name: string;
    botStatus: EBotState;
}

const BOTS_LIST_DEMO: Array<BotListElement> = [
    {
        name: 'Super bot',
        botStatus: EBotState.ACTIVE,
    },
    {
        name: 'Alpha bot',
        botStatus: EBotState.DISABLED,
    },
    {
        name: 'Beta bot',
        botStatus: EBotState.ACTIVE,
    },
];

@Component({
    selector: 'app-my-bots',
    templateUrl: './my-bots.component.html',
    styleUrls: ['./my-bots.component.scss'],
})
export class MyBotsComponent {
    dataSource = BOTS_LIST_DEMO;
    displayedColumns: Array<keyof BotListElement> = ['name', 'botStatus'];
}
