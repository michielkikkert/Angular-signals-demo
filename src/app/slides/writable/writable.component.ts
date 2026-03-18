import { Component, signal, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-writable',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, HighlightModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="slide-container">
      <h1>Writable Signals</h1>
      <p class="readable-text">Create and update state using <code>signal()</code>, <code>set()</code>, and <code>update()</code>.</p>
      
      <mat-card class="demo-card">
        <mat-card-content>
          <p class="readable-text">Count: <strong>{{ count() }}</strong></p>
          <div class="actions">
            <button mat-raised-button color="primary" (click)="increment()">Increment (+1)</button>
            <button mat-stroked-button color="warn" (click)="reset()">Reset (0)</button>
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
export class WritableComponent {
  count = signal(0);
  codeSnippet = `const count = signal(0);

// Update using current value
count.update(v => v + 1);

// Set a new value directly
count.set(0);`;

  increment() {
    this.count.update(c => c + 1);
  }

  reset() {
    this.count.set(0);
  }
}
