import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { SortByDirective } from './directives/sort-by.directive'
import { ToUpperCaseDirective } from './directives/toUpperCase.directive'
import { CapitalizePipe } from './pipes/capitalize.pipe'
import { TrimPipe } from './pipes/trim.pipe'

@NgModule({
  declarations: [
    CapitalizePipe,
    SortByDirective,
    ToUpperCaseDirective,
    TrimPipe,
  ],
  imports: [CommonModule],
  exports: [CapitalizePipe, SortByDirective, ToUpperCaseDirective, TrimPipe],
})
export class SharedModule {}
