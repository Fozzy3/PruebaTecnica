import { Component, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApiService } from '../services/api.service';
import {} from '@angular/material';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss'],
})
export class DialogComponent {
  movieForm!: FormGroup;
  actionBtn: string = 'Save';
  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    @Inject(MAT_DIALOG_DATA) public editData: any,
    private dialogRef: MatDialogRef<DialogComponent>
  ) {}

  ngOnInit(): void {
    this.movieForm = this.formBuilder.group({
      movieName: ['', Validators.required],
      calification: ['', Validators.required],
      country: ['', Validators.required],
    });

    if (this.editData) {
      this.actionBtn = 'Update';
      this.movieForm.controls['movieName'].setValue(this.editData.movieName);
      this.movieForm.controls['calification'].setValue(
        this.editData.calification
      );
      this.movieForm.controls['country'].setValue(this.editData.country);
    }
  }
  addMovie() {
    console.log('Entre');
    if (!this.editData) {
      if (this.movieForm.valid) {
        this.api.postMovie(this.movieForm.value).subscribe({
          next: (res) => {
            alert('Movie Add successfully');
            this.movieForm.reset();
            this.dialogRef.close('save');
          },
          error: () => {
            alert('Error while adding the movie');
            this.dialogRef.close();
          },
        });
      }
    } else {
      this.updateMovie();
    }
  }

  updateMovie() {
    this.api.putMovie(this.movieForm.value, this.editData.id).subscribe({
      next: (res) => {
        alert('Movie update Successfully');
        this.movieForm.reset();
        this.dialogRef.close('update');
      },
      error: () => {
        alert('Error while updating the record');
      },
    });
  }
}
