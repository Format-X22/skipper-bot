import { Component, Inject } from '@angular/core';
import { DIALOG_DATA, DialogRef } from '@angular/cdk/dialog';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss'],
})
export class ConfirmDialogComponent {
    constructor(
        public dialogRef: DialogRef<boolean>,
        @Inject(DIALOG_DATA) public data: { icon: string; message: string },
    ) {}

    ok(): void {
        this.dialogRef.close(true);
    }

    cancel(): void {
        this.dialogRef.close(false);
    }
}
