import { CommonModule } from '@angular/common';
import { Component, ViewChild, OnInit } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule } from '@angular/forms';
import { EMPLOYEES } from './employee-data';

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
    MatBadgeModule,
    FormsModule,
  ],
  templateUrl: './client-management.component.html',
  styleUrls: ['./client-management.component.css'],
})
export class ClientManagementComponent implements OnInit {
  employees = EMPLOYEES; 
  searchTerm: string = '';
  displayedEmployees: any[] = [];
  pageSize: number = 5;
  currentPage: number = 0;
  sortOrder: 'asc' | 'desc' = 'asc';
  isDialogOpen: boolean = false;
  selectedCategories: { [key: string]: boolean } = {};
  selectedLocations: { [key: string]: boolean } = {};
  selectedQualifications: { [key: string]: boolean } = {};

  isExpanded: { [key: string]: boolean } = {
    category: false,
    location: false,
    qualification: false,
  };

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit() {
    this.updateDisplayedEmployees();
  }

  onPageChange(event: PageEvent) {
    this.pageSize = event.pageSize;
    this.currentPage = event.pageIndex;
    this.updateDisplayedEmployees();
  }

  updateDisplayedEmployees() {
    const startIndex = this.currentPage * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    this.displayedEmployees = this.employees.slice(startIndex, endIndex);
  }

  clearFilters() {
    this.selectedCategories = {};
    this.selectedLocations = {};
    this.selectedQualifications = {};
    this.searchTerm = '';
    this.filterEmployees();
  }

  filterEmployees() {
    const filteredEmployees = this.employees
      .filter(employee => employee.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
      .filter(employee => this.isCategorySelected(employee.category))
      .filter(employee => this.isLocationSelected(employee.location))
      .filter(employee => this.isQualificationSelected(employee.qualification));

    this.currentPage = 0;
    this.displayedEmployees = this.sortEmployees(filteredEmployees).slice(0, this.pageSize);
    this.paginator.length = filteredEmployees.length;
  }

  isCategorySelected(category: string): boolean {
    return Object.keys(this.selectedCategories).every(key => !this.selectedCategories[key]) ||
      this.selectedCategories[category];
  }

  isLocationSelected(location: string): boolean {
    return Object.keys(this.selectedLocations).every(key => !this.selectedLocations[key]) ||
      this.selectedLocations[location];
  }

  isQualificationSelected(qualification: string) {
    return Object.keys(this.selectedQualifications).every(key => !this.selectedQualifications[key]) ||
      this.selectedQualifications[qualification];
  }

  toggleSort() {
    this.sortOrder = this.sortOrder === 'asc' ? 'desc' : 'asc';
    this.filterEmployees();
  }

  sortEmployees(employees: any[]) {
    return employees.sort((a, b) => {
      if (this.sortOrder === 'asc') {
        return a.name.localeCompare(b.name);
      } else {
        return b.name.localeCompare(a.name);
      }
    });
  }

  openDialog() {
    this.isDialogOpen = true;
  }

  applyFilter() {
    this.filterEmployees();
    this.isDialogOpen = false;
  }

  closeDialog() {
    this.isDialogOpen = false;
  }

  toggleExpand(section: string) {
    this.isExpanded[section] = !this.isExpanded[section];
  }
}
