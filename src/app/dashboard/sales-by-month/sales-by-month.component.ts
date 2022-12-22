import { Component, OnInit } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss'],
})
export class SalesByMonthComponent implements OnInit {
  chart = new Chart({
    chart: {
      type: 'line',
    },
    title: {
      text: 'Month wise sales',
      style: {
        color: '#ededed',
      },
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Revenue in $',
      },
    },
    series: [
      {
        name: 'Germany',
        color: '#044342',
        type: 'line',
        data: [454, 154, 554, 884, 546, 854, 698, 223, 1058, 888, 334, 1568],
      },
      {
        name: 'USA',
        color: '#7e0505',
        type: 'line',
        data: [586, 254, 158, 554, 669, 684, 325, 475, 845, 765, 856, 448],
      },
      {
        name: 'United Kingdom',
        color: '#ed9e20',
        type: 'line',
        data: [582, 968, 584, 225, 336, 648, 598, 475, 254, 854, 669, 987],
      },
    ],
    credits: {
      enabled: false,
    },
  });
  constructor() {}

  ngOnInit(): void {}
}
