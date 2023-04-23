import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';
import {
  BalButton,
  BalButtonModule,
  BalCardModule,
  BalFooterModule,
  BalHeadingModule,
} from '@baloise/design-system-components-angular';
import { RxJSStoreComponent } from './rxjs-store/rxjs-store.component';
import { NgRxStoreComponent } from './ngrx-store/ngrx-store.component';
import { ElfStoreComponent } from './elf-store/elf-store.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    BalButtonModule,
    BalHeadingModule,
    BalFooterModule,
    BalCardModule,
    RxJSStoreComponent,
    NgRxStoreComponent,
    ElfStoreComponent,
  ],
  template: `
    <bal-app class="has-sticky-footer">
      <header>
        <!-- Header content -->
      </header>
      <main class="container">
        <!-- Your application content -->
        <bal-heading>Angular Store Examples</bal-heading>
        <div class="columns mt-medium">
          <div class="column is-one-third">
            <app-rxjs-store></app-rxjs-store>
          </div>
          <div class="column is-one-third">
            <app-ngrx-store></app-ngrx-store>
          </div>
          <div class="column is-one-third">
            <app-elf-store></app-elf-store>
          </div>
        </div>
      </main>
      <bal-footer hideLanguageSelection="true" hideLinks="true"></bal-footer>
    </bal-app>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppComponent {
  title = 'ng-store';
}
