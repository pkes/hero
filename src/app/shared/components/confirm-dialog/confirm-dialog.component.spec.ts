import { APP_BASE_HREF } from '@angular/common'
import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
  waitForAsync,
} from '@angular/core/testing'
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'
import { AppModule } from 'src/app/app.module'
import {
  ConfirmDialogComponent,
  ConfirmDialogData,
} from './confirm-dialog.component'

const dialogMock = {
  close: () => {},
}

const textsMock = {
  title: 'This is the dialog title',
  content: 'This is the dialog description',
}

describe('Component: Confirm dialog', () => {
  let fixture: ComponentFixture<ConfirmDialogComponent>
  let component: ConfirmDialogComponent
  const dataMock: ConfirmDialogData = textsMock
  const dialogRefMock: any = null

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [AppModule],
        providers: [
          { provide: APP_BASE_HREF, useValue: '/' },
          { provide: MatDialogRef, useValue: dialogMock },
          { provide: MAT_DIALOG_DATA, useValue: textsMock },
        ],
      }).compileComponents()

      component = new ConfirmDialogComponent(dialogRefMock, dataMock)

      fixture = TestBed.createComponent(ConfirmDialogComponent)
      component = fixture.componentInstance
    }),
  )

  describe('Test: Component', () => {
    it('Should be initialized and show texts', () => {
      fixture.detectChanges()
      expect(fixture).toBeTruthy()
      const compiled = fixture.debugElement.nativeElement

      const title = compiled.querySelector('h4')
      expect(title.textContent).toContain('This is the dialog title')

      const description = compiled.querySelector('mat-dialog-content > p')
      expect(description.textContent).toContain(
        'This is the dialog description',
      )
    })

    it('Should close the dialog with a TRUE value when click on accept button', fakeAsync(() => {
      fixture.detectChanges()
      const compiled = fixture.debugElement.nativeElement
      const onClickMock = spyOn(component.dialogRef, 'close')

      const acceptButton = compiled.querySelector('#acceptButton')
      acceptButton.click()

      tick()
      expect(onClickMock).toHaveBeenCalledWith(true)
    }))

    it('Should close the dialog with a FALSE value when click on cancel button', fakeAsync(() => {
      fixture.detectChanges()
      const compiled = fixture.debugElement.nativeElement
      const onClickMock = spyOn(component.dialogRef, 'close')

      const acceptButton = compiled.querySelector('#cancelButton')
      acceptButton.click()

      tick()
      expect(onClickMock).toHaveBeenCalledWith(false)
    }))
  })
})
