import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuyBotComponent } from './buy-bot.component';

describe('BuyBotComponent', () => {
    let component: BuyBotComponent;
    let fixture: ComponentFixture<BuyBotComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BuyBotComponent],
        });
        fixture = TestBed.createComponent(BuyBotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
