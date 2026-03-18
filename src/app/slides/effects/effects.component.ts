import { Component, signal, effect, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-effects',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, HighlightModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="slide-container">
      <h1>Side Effects with effects()</h1>
      <p class="readable-text">Use <code>effect()</code> for logging, DOM manipulation, or synchronizing with external APIs.</p>
      
      <mat-card class="demo-card">
        <mat-card-content>
          <p class="readable-text">Value: <strong>{{ value() }}</strong></p>
          <p class="readable-text"><em>Check console for logs!</em></p>
          <div class="actions">
            <button mat-raised-button color="accent" (click)="randomize()">Randomize</button>
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
export class EffectsComponent {
  value = signal(10);
  codeSnippet = `effect(() => {
  console.log('Value changed:', value());
  // Useful for:
  // - Logging
  // - Syncing with LocalStorage
  // - Manual DOM manipulation
});`;

  constructor() {
    effect(() => {
      console.log('Effect triggered. New value:', this.value());
    });
  }

  randomize() {
    this.value.set(Math.floor(Math.random() * 100));
  }
}
