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
        
        <p class="readable-text"><b>Computed signals</b> are read-only signals that derive their value from other signals. You define computed signals using the computed function and specifying a derivation:</p>
        <p class="readable-text">The double signal depends on the count signal. Whenever count updates, Angular knows that double needs to update as well.</p>
      <mat-card class="demo-card">
        <mat-card-content>
          <p class="readable-text">Base: <strong>{{ base() }}</strong></p>
          <p class="readable-text">Double: <strong>{{ double() }}</strong></p>
          <div class="actions">
            <button mat-raised-button color="primary" (click)="increment()">Increment (+1)</button>
          </div>
        </mat-card-content>
      </mat-card>

      <pre><code [highlight]="codeSnippet" [language]="'typescript'"></code></pre>
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
  codeSnippet = `// TypeScript:
base = signal(1);
double = computed(() => this.base() * 2);

// Template:
<p>Base: {{ base() }}</p>
<p>Double: {{ double() }}</p>`;

  increment() {
    this.base.update(b => b + 1);
  }
}
