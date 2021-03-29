import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { ToastrModule } from 'ngx-toastr'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HerosModule } from './components/heros/heros.module'
import { HomeComponent } from './components/home/home.component'
import { LoaderService } from './services/loader.service'
import { ConfirmDialogComponent } from './shared/components/confirm-dialog/confirm-dialog.component'
import { FooterComponent } from './shared/components/footer/footer.component'
import { LoaderModule } from './shared/components/loader/loader.module'
import { ToolBarComponent } from './shared/components/toolbar/toolbar.component'
import { HttpRequestInterceptor } from './shared/interceptors/http.request.interceptor'
import { MaterialModule } from './shared/material/material.module'
import { SharedModule } from './shared/shared.module'

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HerosModule,
    SharedModule,
    MaterialModule,
    ToastrModule.forRoot(),
    LoaderModule,
    // Intercepts HTTP requests and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    /*  HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, {
      dataEncapsulation: false,
    }),*/
  ],
  declarations: [
    AppComponent,
    ConfirmDialogComponent,
    FooterComponent,
    ToolBarComponent,
    HomeComponent,
  ],
  providers: [
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpRequestInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
