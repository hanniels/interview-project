import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})


export class PaymentModalComponent implements OnInit {

  sum: any;

  constructor(private dialogRef: MatDialogRef<PaymentModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  // should really be a form group

  card_number = new FormControl('', [
    Validators.required,
    Validators.maxLength(16),
    Validators.minLength(16),
  ]);

  month_year = new FormControl('', [Validators.required]);

  cvc = new FormControl('', [
    Validators.required,
    Validators.maxLength(3),
    Validators.minLength(3),
  ]);

  getErrorMessage() {
    return this.card_number.hasError('required') ? 'You must enter a value' : '';
  }

  dismiss() {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {
    this.sum = this.data
  }

}
