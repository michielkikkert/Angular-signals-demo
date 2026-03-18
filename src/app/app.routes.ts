import { Routes } from '@angular/router';
import { WelcomeComponent } from './slides/welcome/welcome.component';
import { WritableComponent } from './slides/writable/writable.component';
import { ComputedComponent } from './slides/computed/computed.component';
import { EffectsComponent } from './slides/effects/effects.component';
import { InputsComponent } from './slides/inputs/inputs.component';
import { OutputsComponent } from './slides/outputs/outputs.component';
import { RxjsComponent } from './slides/rxjs/rxjs.component';
import { ResourceComponent } from './slides/resource/resource.component';
import { SummaryComponent } from './slides/summary/summary.component';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'writable', component: WritableComponent },
  { path: 'computed', component: ComputedComponent },
  { path: 'effects', component: EffectsComponent },
  { path: 'inputs', component: InputsComponent },
  { path: 'outputs', component: OutputsComponent },
  { path: 'rxjs', component: RxjsComponent },
  { path: 'resource', component: ResourceComponent },
  { path: 'summary', component: SummaryComponent }
];
