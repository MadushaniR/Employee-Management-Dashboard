import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-client-management',
  standalone: true,
  imports: [
    CommonModule,
    MatPaginatorModule,
    MatIconModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule,
    MatChipsModule,
    MatBadgeModule
  ],
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'], // Corrected here
})
export class ClientManagementComponent {
  employees = [
    {
      name: 'Sanjaya Perera',
      position: 'UI UX Designer',
      category: 'Permanent',
      joinDate: '01 Sep 2023',
      location: 'Onsite',
      locationIcon: 'location_on',
      image: 'path_to_image',
    },
    {
      name: 'Kierra Culhane',
      position: 'Accountant',
      category: 'Permanent',
      joinDate: '01 Sep 2023',
      location: 'Hybrid',
      locationIcon: 'location_on',
      image: 'path_to_image',
    },
    // Add more employee data as needed
  ];
}
