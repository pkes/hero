import { HttpErrorResponse } from '@angular/common/http'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MatDialog, MatDialogRef } from '@angular/material/dialog'
import { ActivatedRoute, Router } from '@angular/router'
import { ToastrService } from 'ngx-toastr'
import { first } from 'rxjs/operators'
import { Hero } from '../../../models/hero.interface'
import { HeroService } from '../../../services/hero.service'
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from '../../../shared/components/confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
})
export class HeroDetailComponent implements OnInit {
  public heroId!: number
  heroForm!: FormGroup
  isAddMode!: boolean
  loading = false
  dialogReference!: MatDialogRef<ConfirmDialogComponent, any>
  submitted = false

  constructor(
    private formBuilder: FormBuilder,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private dialog: MatDialog,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.heroId = +this.activateRoute.snapshot.params['id']
    this.isAddMode = !this.heroId

    this.heroForm = this.formBuilder.group({
      id: [''],
      name: ['', Validators.required],
    })

    if (!this.isAddMode) {
      this.heroService
        .getById(this.heroId.toString())
        .pipe(first())
        .subscribe((x: Hero) => this.heroForm.patchValue(x))
    }
  }

  onSubmit() {
    this.submitted = true
    if (this.heroForm.invalid) {
      return
    }

    this.loading = true
    if (this.isAddMode) {
      this.createHero()
    } else {
      this.updateHero()
    }
  }

  private createHero() {
    this.openDialog('crear', this.heroForm.value.name)
    this.dialogReference.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService
          .create(this.heroForm.value)
          .pipe(first())
          .subscribe(
            () => {
              this.router.navigate(['../'], { relativeTo: this.activateRoute })
            },
            (error) => this.handleError(error),
          )
          .add(() => (this.loading = false))
      } else {
        this.loading = false
      }
    })
  }

  private updateHero() {
    this.openDialog('actualizar', this.heroForm.value.name)
    this.dialogReference.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService
          .update(this.heroForm.value)
          .pipe(first())
          .subscribe(
            () => {
              this.router.navigate(['../../'], {
                relativeTo: this.activateRoute,
              })
            },
            (error) => this.handleError(error),
          )
          .add(() => (this.loading = false))
      }
    })
  }

  openDialog(operation = 'operation', name: string) {
    const data: ConfirmDialogData = {
      title: `Alerta va a ${operation}`,
      content: `¿Está seguro que es correcto: ${name}?`,
    }
    this.dialogReference = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data,
    })
  }

  private handleError(error: HttpErrorResponse): void {
    this.toastr.error(error.message)
  }
}
