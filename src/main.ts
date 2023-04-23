import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { importProvidersFrom } from '@angular/core';
import { BalCoreModule } from '@baloise/design-system-components-angular';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { todosReducer } from './app/ngrx-store/ngrx-store.reducer';
import { devTools } from '@ngneat/elf-devtools';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(
      BalCoreModule.forRoot(),
      StoreModule.forRoot({
        todos: todosReducer,
      }),
      StoreDevtoolsModule.instrument()
    ),
  ],
});

devTools();
