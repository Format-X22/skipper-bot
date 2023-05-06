import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { MyBotsComponent } from './my-bots/my-bots.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { AccountComponent } from './account/account.component';
import { BuyBotComponent } from './buy-bot/buy-bot.component';
import { SellBotComponent } from './sell-bot/sell-bot.component';

const routes: Routes = [
    { path: 'overview', component: OverviewComponent },
    { path: 'my-bots', component: MyBotsComponent },
    { path: 'create-new', component: CreateNewComponent },
    { path: 'buy-bot', component: BuyBotComponent },
    { path: 'sell-bot', component: SellBotComponent },
    { path: 'account', component: AccountComponent },
    { path: '', redirectTo: '/overview', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
