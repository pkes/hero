import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AppComponent } from './app.component'
import { HomeComponent } from './components/home/home.component'
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component'
import { FooterComponent } from './shared/components/footer/footer.component'
import { ToolBarComponent } from './shared/components/toolbar/toolbar.component'

xdescribe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [
        AppComponent,
        ConfirmDialogComponent,
        FooterComponent,
        ToolBarComponent,
        HomeComponent,
      ],
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })

  it(`should have as title 'hero'`, () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app.title).toEqual('hero')
  })
})
