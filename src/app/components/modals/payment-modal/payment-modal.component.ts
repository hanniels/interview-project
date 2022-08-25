import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-payment-modal',
  templateUrl: './payment-modal.component.html',
  styleUrls: ['./payment-modal.component.css']
})


export class PaymentModalComponent implements OnInit {

  sum: any;

  constructor(private dialogRef: MatDialogRef<PaymentModalComponent>, @Inject(MAT_DIALOG_DATA) public data: any) { }

  // should really be a form group

  cardDetails = new FormGroup({
    card_name: new FormControl('', [Validators.required]),
    card_number: new FormControl('', [Validators.required, Validators.maxLength(16), Validators.minLength(16),]),
    month_year: new FormControl('', [Validators.required]),
    cvc: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.minLength(3),])
  });

  getErrorMessage(message: String) {
    if (message.valueOf() == "card_name") {
      return this.cardDetails.get('card_name')?.hasError('required') ? 'You must enter a value' : '';
    }

    else if (message.valueOf() == "card_number") {
      return this.cardDetails.get('card_number')?.hasError('required') ? 'You must enter a value' :
        this.cardDetails.get('card_number')?.hasError('minlength') || this.cardDetails.get('card_number')?.hasError('maxlength') ? 'must be a sixteen digit number' : '';
    }

    else if (message.valueOf() == "cvc") {
      return this.cardDetails.get('cvc')?.hasError('required') ? 'You must enter a value' :
        this.cardDetails.get('cvc')?.hasError('minlength') || this.cardDetails.get('cvc')?.hasError('maxlength') ? 'must be a three digit number' : '';

    }

    else if (message.valueOf() == "month_year") {
      return 'month year'
    }

    else { return '' }
    // console.log(this.cardDetails.getError)
    // return this.cardDetails.hasError('required') ? 'You must enter a value' : '';

  }

  dismiss() {
    this.dialogRef.close(null);
  }

  ngOnInit(): void {
    this.sum = this.data
  }

}
