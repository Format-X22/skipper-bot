import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { OverviewComponent } from './overview/overview.component';
import { MyBotsComponent } from './my-bots/my-bots.component';
import { CreateNewComponent } from './create-new/create-new.component';
import { AccountComponent } from './account/account.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BuyBotComponent } from './buy-bot/buy-bot.component';
import { SellBotComponent } from './sell-bot/sell-bot.component';

@NgModule({
    declarations: [
        ConfirmDialogComponent,
        AppComponent,
        OverviewComponent,
        MyBotsComponent,
        CreateNewComponent,
        AccountComponent,
        BuyBotComponent,
        SellBotComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTableModule,
        MatCardModule,
        MatDialogModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
