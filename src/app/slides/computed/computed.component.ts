import { Component, signal, computed, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-computed',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, HighlightModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="slide-container">
      <h1>Computed Signals</h1>
      <p class="readable-text">Derived state that automatically tracks dependencies using <code>computed()</code>.</p>
      
      <mat-card class="demo-card">
        <mat-card-content>
          <p class="readable-text">Base: <strong>{{ base() }}</strong></p>
          <p class="readable-text">Double: <strong>{{ double() }}</strong></p>
          <div class="actions">
            <button mat-raised-button color="primary" (click)="increment()">Increment (+1)</button>
          </div>
        </mat-card-content>
      </mat-card>

      <pre><code [highlight]="codeSnippet" language="typescript"></code></pre>
    </div>
  `,
  styles: [`
    .demo-card { margin: 2rem 0; padding: 1rem; background: #fafafa; }
    .actions { display: flex; gap: 1rem; margin-top: 1rem; }
  `]
})
export class ComputedComponent {
  base = signal(1);
  double = computed(() => this.base() * 2);
  codeSnippet = `const base = signal(1);

// Dependencies are tracked automatically
const double = computed(() => base() * 2);`;

  increment() {
    this.base.update(b => b + 1);
  }
}
