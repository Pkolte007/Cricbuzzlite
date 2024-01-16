import { Component } from '@angular/core';


@Component({
  selector: 'app-cricket-tickets',
  templateUrl: './cricket-tickets.component.html',
  styleUrls: ['./cricket-tickets.component.css']
})
export class CricketTicketsComponent {
payment() {
alert('Payment done');
alert('Enjoy your match');
}

paymentRequest: google.payments.api.PaymentDataRequest = {
  apiVersion: 2,
  apiVersionMinor: 0,
  allowedPaymentMethods: [
    {
      type: 'CARD',
      parameters: {
        allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
        allowedCardNetworks: ['AMEX', 'VISA', 'MASTERCARD']
      },
      tokenizationSpecification: {
        type: 'PAYMENT_GATEWAY',
        parameters: {
          gateway: 'example',
          gatewayMerchantId: 'exampleGatewayMerchantId'
        }
      }
    }
  ],
  merchantInfo: {
    merchantId: '12345678901234567890',
    merchantName: 'Demo Merchant'
  },
  transactionInfo:  {
    totalPriceStatus: 'FINAL',
    totalPriceLabel: 'Total',
    totalPrice: '8000',
    currencyCode: 'INR',
    countryCode: 'IN'
  },

  

 
  callbackIntents: ['PAYMENT_AUTHORIZATION']
};

onLoadPaymentData = (
  event: Event
): void => {
  const eventDetail = event as CustomEvent<google.payments.api.PaymentData>;
  console.log('load payment data', eventDetail.detail);
}

onPaymentDataAuthorized: google.payments.api.PaymentAuthorizedHandler = (
  paymentData
  ) => {
    console.log('payment authorized', paymentData);
    return {
      transactionState: 'SUCCESS'
    };
  }

onError = (event: ErrorEvent): void => {
  console.error('error', event.error);
}




}
