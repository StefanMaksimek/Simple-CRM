import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.scss'],
})
export class LastFewTransactionsComponent implements OnInit {
  transactions = [
    {
      id: 1,
      title: 'Ryzen 5 Processor',
      price: '$299',
      shop: 'Tech Pro',
      location: 'East Hartford',
      status: 'pending',
      imgSrc: '1.jpeg',
    },
    {
      id: 2,
      title: 'Denver Blackcode',
      price: '$7.89',
      shop: 'Pick the best',
      location: 'Miamisburg',
      status: 'shipped',
      imgSrc: '2.jpeg',
    },
    {
      id: 3,
      title: 'Nike Shoes',
      price: '$69',
      shop: 'Quality Leathers',
      location: 'Phoenix',
      status: 'confirmed',
      imgSrc: '3.jpeg',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
