import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotsLibraryComponent } from './bots-library.component';

describe('BotsLibraryComponent', () => {
    let component: BotsLibraryComponent;
    let fixture: ComponentFixture<BotsLibraryComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [BotsLibraryComponent],
        });
        fixture = TestBed.createComponent(BotsLibraryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
