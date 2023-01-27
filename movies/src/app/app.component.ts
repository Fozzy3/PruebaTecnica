import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import { ApiService } from './services/api.service';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'movies';

  displayedColumns: string[] = [
    'movieName',
    'calification',
    'country',
    'action',
  ];
  dataSource = new MatTableDataSource<any>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog: MatDialog, private api: ApiService) {}
  ngOnInit(): void {
    this.getAllMovies();
  }
  openDialog() {
    this.dialog
      .open(DialogComponent, {})
      .afterClosed()
      .subscribe((val) => {
        if (val == 'save') {
          this.getAllMovies();
        }
      });
  }

  getAllMovies() {
    this.api.getMovie().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
        console.log(res);
      },
      error: (err) => {
        alert('Error while fetching the Records!!');
      },
    });
  }
  editMovie(row: any) {
    this.dialog
      .open(DialogComponent, {
        width: '30%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        if (val == 'update') {
          this.getAllMovies();
        }
      });
  }

  deleteMovie(id: number) {
    this.api.deleteMovie(id).subscribe({
      next: (res) => {
        alert('Product Deleted Successfully');
        this.getAllMovies();
      },
      error: () => {
        alert('Error while deleting the movie');
      },
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
