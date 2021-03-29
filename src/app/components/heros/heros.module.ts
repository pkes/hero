import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { MaterialModule } from '../../shared/material/material.module'
import { SharedModule } from '../../shared/shared.module'
import { HeroDetailComponent } from './hero-detail/hero-detail.component'
import { HeroListComponent } from './hero-list/hero-list.component'
import { HerosRoutingModule } from './heros-routing.module'
import { LayoutComponent } from './layout/layout.component'

@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent, LayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    HerosRoutingModule,
    MaterialModule,
  ],
  exports: [],
})
export class HerosModule {}
