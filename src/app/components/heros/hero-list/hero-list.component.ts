import { HttpErrorResponse } from '@angular/common/http'
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core'
import { MatDialog } from '@angular/material/dialog'
import { MatPaginator } from '@angular/material/paginator'
import { MatSort } from '@angular/material/sort'
import { MatTableDataSource } from '@angular/material/table'
import { ToastrService } from 'ngx-toastr'
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'
import { Hero } from '../../../models/hero.interface'
import { HeroService } from '../../../services/hero.service'
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from '../../../shared/components/confirm-dialog/confirm-dialog.component'

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.component.html',
})
export class HeroListComponent implements OnInit {
  displayedColumns = ['id', 'name', 'actions']
  dataSource!: MatTableDataSource<Hero>

  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort
  @ViewChild('filter') filter!: ElementRef

  currentPage = 0

  constructor(
    private heroService: HeroService,
    private dialog: MatDialog,
    private toastr: ToastrService,
  ) {}

  ngOnInit() {
    this.dataSource = new MatTableDataSource()
    this.refresh()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  refresh() {
    this.heroService
      .getAll()
      .pipe(debounceTime(1000), distinctUntilChanged())
      .subscribe((heros) => (this.dataSource.data = heros))
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value
    this.dataSource.filter = filterValue.trim().toLowerCase()
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage()
    }
  }

  deleteHero(hero: Hero) {
    const data: ConfirmDialogData = {
      title: 'Eliminar héroe',
      content: `¿Está seguro que desea eliminar a ${hero.name}?`,
    }
    const dialogReference = this.dialog.open(ConfirmDialogComponent, {
      width: '500px',
      data,
    })
    dialogReference.afterClosed().subscribe((result) => {
      if (result) {
        this.heroService.delete(hero.id).subscribe(
          () => {
            console.log('Delete completed')
            this.refresh()
          },
          (error) => this.handleError(error),
        )
      }
    })
  }

  private handleError(error: HttpErrorResponse): void {
    this.toastr.error(error.message)
  }
}
