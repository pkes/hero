import { Injectable } from '@angular/core'
import { ReplaySubject } from 'rxjs'

@Injectable({ providedIn: 'root' })
export class LoaderService {
  isLoading = new ReplaySubject<boolean>(1)

  show(): void {
    this.isLoading.next(true)
  }

  hide(): void {
    this.isLoading.next(false)
  }
}
