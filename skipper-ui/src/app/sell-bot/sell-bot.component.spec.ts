import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellBotComponent } from './sell-bot.component';

describe('SellBotComponent', () => {
    let component: SellBotComponent;
    let fixture: ComponentFixture<SellBotComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [SellBotComponent],
        });
        fixture = TestBed.createComponent(SellBotComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
