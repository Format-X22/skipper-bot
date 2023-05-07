import { Component } from '@angular/core';
import { Dialog } from '@angular/cdk/dialog';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';

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

export interface IBot {
    id: string;
    name: string;
    type: EBotType;
    status: EBotStatus;
    onlineTime: string;
    state: string;
}

const BOTS_LIST_DEMO: Array<IBot> = [
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

    constructor(public dialog: Dialog) {}

    onStatusClick(bot: IBot): void {
        // TODO -
        switch (bot.status) {
            case EBotStatus.ACTIVE:
                this.doWithConfirm(bot, 'stop', 'Stop a bot?', () => {
                    bot.status = EBotStatus.BOOT_OUT;
                    setTimeout(() => (bot.status = EBotStatus.DISABLED), 5000);
                });
                break;
            case EBotStatus.BOOT_OUT:
            case EBotStatus.BOOT_IN:
                this.doWithConfirm(bot, 'close', 'Make a hard stop of the bot?', () => {
                    bot.status = EBotStatus.HARD_STOP;
                    setTimeout(() => (bot.status = EBotStatus.DISABLED), 5000);
                });
                break;
            case EBotStatus.DISABLED:
                this.doWithConfirm(bot, 'play_arrow', 'Launch a bot?', () => {
                    bot.status = EBotStatus.BOOT_IN;
                    setTimeout(() => (bot.status = EBotStatus.ACTIVE), 5000);
                });
                break;
        }
    }

    onEditClick(bot: IBot): void {
        // TODO -
    }

    onStatsClick(bot: IBot): void {
        // TODO -
    }

    onStartClick(bot: IBot): void {
        // TODO -
        this.doWithConfirm(bot, 'play_arrow', 'Launch a bot?', () => {
            bot.status = EBotStatus.BOOT_IN;
            setTimeout(() => (bot.status = EBotStatus.ACTIVE), 5000);
        });
    }

    onStopClick(bot: IBot): void {
        // TODO -
        this.doWithConfirm(bot, 'stop', 'Stop a bot?', () => {
            bot.status = EBotStatus.BOOT_OUT;
            setTimeout(() => (bot.status = EBotStatus.DISABLED), 5000);
        });
    }

    onDeleteClick(bot: IBot): void {
        // TODO -
        switch (bot.status) {
            case EBotStatus.ACTIVE:
            case EBotStatus.BOOT_IN:
            case EBotStatus.BOOT_OUT:
                this.doWithConfirm(bot, 'close', 'Make a hard stop of the bot?', () => {
                    bot.status = EBotStatus.HARD_STOP;
                    setTimeout(() => (bot.status = EBotStatus.DISABLED), 5000);
                });
                break;
            case EBotStatus.DISABLED:
                this.doWithConfirm(bot, 'close', 'Remove a bot from the bot list?', () => {
                    const index = this.dataSource.indexOf(bot);

                    this.dataSource.splice(index, 1);
                });
                break;
        }
    }

    private doWithConfirm(bot: IBot, icon: string, message: string, action: (bot: IBot) => void) {
        const confirmRef = this.dialog.open<boolean>(ConfirmDialogComponent, {
            width: '300px',
            data: { icon, message },
        });

        confirmRef.closed.subscribe((result) => {
            if (result) {
                action(bot);
            }
        });
    }
}
