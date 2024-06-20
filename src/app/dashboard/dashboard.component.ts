import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  stats = [
    { title: 'Total Users', value: 1234 },
    { title: 'Active Users', value: 567 },
    { title: 'Revenue', value: '$12,345' }
  ];

  recentActivities = [
    'User John Doe signed up',
    'Post "New Features" published',
    'Order #12345 completed'
  ];

  ngAfterViewInit() {
    if (typeof window !== 'undefined') {
      Chart.register(...registerables); // Register necessary chart components
      this.initializeCharts();
    }
  }

  
  initializeCharts() {
    const userActivityCanvas = document.getElementById('userActivityChart') as HTMLCanvasElement;
    const salesCanvas = document.getElementById('salesChart') as HTMLCanvasElement;

    if (userActivityCanvas && salesCanvas) {
      new Chart(userActivityCanvas, {
        type: 'line', // Chart type for User Activity
        data: {
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [{
            label: 'User Activity',
            data: [10, 20, 30, 40, 50],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });

      new Chart(salesCanvas, {
        type: 'bar', // Chart type for Sales
        data: {
          labels: ['January', 'February', 'March', 'April', 'May'],
          datasets: [{
            label: 'Sales',
            data: [15, 25, 35, 45, 55],
            backgroundColor: 'rgba(153, 102, 255, 0.2)',
            borderColor: 'rgba(153, 102, 255, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            x: {
              beginAtZero: true
            },
            y: {
              beginAtZero: true
            }
          }
        }
      });
    } else {
      console.error('Failed to get canvas element(s) with specified ID(s)');
    }
  }
}
