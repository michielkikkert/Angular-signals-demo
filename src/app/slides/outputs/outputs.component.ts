import { Component, output, ChangeDetectionStrategy } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';

@Component({
  selector: 'app-child-output',
  standalone: true,
  imports: [MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div style="padding: 1rem; background: #f1f8e9; border: 1px solid #c5e1a5;">
      <p>Child component:</p>
      <button mat-raised-button color="primary" (click)="notifyParent()">Notify Parent</button>
    </div>
  `
})
export class ChildOutputComponent {
  notified = output<string>();

  notifyParent() {
    this.notified.emit('Action from Child at ' + new Date().toLocaleTimeString());
  }
}

@Component({
  selector: 'app-outputs',
  standalone: true,
  imports: [ChildOutputComponent, MatCardModule, HighlightModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="slide-container">
      <h1>Modern Signal Outputs</h1>
      <p class="readable-text">The <code>output()</code> function replaces <code>@Output()</code> with <code>EventEmitter</code>.</p>
      
      <div style="margin: 2rem 0;">
        <app-child-output (notified)="onNotified($event)" />
        <p class="readable-text">Parent received: <strong>{{ lastMsg }}</strong></p>
      </div>

      <pre><code [highlight]="codeSnippet" [language]="'typescript'"></code></pre>
    </div>
  `
})
export class OutputsComponent {
  lastMsg = 'Waiting...';
  codeSnippet = `// Child component (TypeScript):
notified = output<string>();

notifyParent() {
  this.notified.emit('Action from Child at ' + new Date().toLocaleTimeString());
}

// Child component (Template):
<button (click)="notifyParent()">Notify Parent</button>

// Parent component (Template):
<app-child-output (notified)="onNotified($event)" />
<p>Parent received: {{ lastMsg }}</p>

// Parent component (TypeScript):
lastMsg = 'Waiting...';

onNotified(msg: string) {
  this.lastMsg = msg;
}`;

  onNotified(msg: string) {
    this.lastMsg = msg;
  }
}
