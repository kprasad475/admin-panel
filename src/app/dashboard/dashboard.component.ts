import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
  stats = [
    { title: 'Website visits', value: 1234, icon: 'visibility', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s' },
    { title: 'Active Users', value: 567, icon: 'group', image: 'https://www.dpreview.com/files/p/articles/7961724650/General-Mt-Donna-Buang-Myrtle-Beech-Tree-Victoria.jpeg' },
    { title: 'Revenue', value: '$12,345', icon: 'monetization_on', image: 'https://en.wikipedia.org/wiki/List_of_tallest_residential_buildings#/media/File:Dubai_Marina_Skyline.jpg' },
    // Add other stats as needed
  ];

  picStats = [
    { title: 'Website visits', value: 1234, icon: 'visibility', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s' },
    { title: 'Active Users', value: 567, icon: 'group', image: 'https://www.dpreview.com/files/p/articles/7961724650/General-Mt-Donna-Buang-Myrtle-Beech-Tree-Victoria.jpeg' },
    { title: 'Revenue', value: '$12,345', icon: 'monetization_on', image: 'https://en.wikipedia.org/wiki/List_of_tallest_residential_buildings#/media/File:Dubai_Marina_Skyline.jpg' },
    // Add other stats as needed
  ];
  userActivityChartImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9W9vwDNn5X7zAVeDHXgUKo0nBy0pqCaDcw&s';
  salesChartImage = 'https://www.dpreview.com/files/p/articles/7961724650/General-Mt-Donna-Buang-Myrtle-Beech-Tree-Victoria.jpeg';
  recentActivityImage = 'https://en.wikipedia.org/wiki/List_of_tallest_residential_buildings#/media/File:Dubai_Marina_Skyline.jpg';

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
