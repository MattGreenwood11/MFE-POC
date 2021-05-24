import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'cases-queue',
        loadChildren: () => import('casesQueue/Module').then(m => m.AppModule)
      },
      {
        path: 'message-center',
        loadChildren: () => import('messageCenter/Module').then(m => m.AppModule)
      },
    ], { initialNavigation: 'enabled' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
