import { Component, input, ChangeDetectionStrategy } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-child-input',
  standalone: true,
  imports: [MatCardModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <mat-card style="background: #e3f2fd;">
      <mat-card-content>
        <p>Child Component received: <strong>{{ label() }}</strong></p>
      </mat-card-content>
    </mat-card>
  `
})
export class ChildInputComponent {
  label = input.required<string>();
}

@Component({
  selector: 'app-inputs',
  standalone: true,
  imports: [ChildInputComponent, MatCardModule, HighlightModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="slide-container">
      <h1>Modern Signal Inputs</h1>
      <p class="readable-text">Use <code>input()</code> instead of <code>@Input()</code> for reactive, signal-based inputs.</p>
      
      <div style="margin: 2rem 0;">
        <app-child-input [label]="'Hello from Parent!'" />
      </div>

      <pre><code [highlight]="codeSnippet" [language]="'typescript'"></code></pre>

      <ul class="readable-text">
        <li>Automatically tracks changes.</li>
        <li>Works with <code>computed()</code> and <code>effect()</code>.</li>
        <li>Cleaner syntax and better type safety.</li>
      </ul>
    </div>
  `
})
export class InputsComponent {
  codeSnippet = `// Child component (TypeScript):
label = input.required<string>();

// Child component (Template):
<p>{{ label() }}</p>

// Parent template:
<app-child-input [label]="'Hello!'" />`;
}
