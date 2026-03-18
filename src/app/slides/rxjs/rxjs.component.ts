import { Component, ChangeDetectionStrategy } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { interval } from 'rxjs';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-rxjs',
  standalone: true,
  imports: [MatCardModule, HighlightModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="slide-container">
      <h1>RxJS Interoperability</h1>
      <p class="readable-text">Use <code>toSignal()</code> and <code>toObservable()</code> to bridge the two reactive worlds.</p>
      
      <mat-card class="demo-card">
        <mat-card-content>
          <p class="readable-text">Ticks from Interval: <strong>{{ ticks() }}</strong></p>
        </mat-card-content>
      </mat-card>

      <pre><code [highlight]="codeSnippet" [language]="'typescript'"></code></pre>

      <ul class="readable-text">
        <li><code>toSignal</code> handles subscriptions and cleanup automatically.</li>
        <li>Perfect for HTTP requests and event streams.</li>
      </ul>
    </div>
  `,
  styles: [`
    .demo-card { margin: 2rem 0; padding: 1rem; background: #fafafa; }
  `]
})
export class RxjsComponent {
  ticks = toSignal(interval(1000), { initialValue: 0 });
  codeSnippet = `// TypeScript:
const ticks = toSignal(interval(1000), { initialValue: 0 });
const count$ = toObservable(count);

// Template:
<p>Ticks: {{ ticks() }}</p>`;
}
