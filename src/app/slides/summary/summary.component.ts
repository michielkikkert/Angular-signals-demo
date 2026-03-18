import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-summary',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="slide-container">
      <h1>Summary: Why Signals?</h1>
      
      <ul class="readable-text">
        <li><strong>Simplified Mental Model:</strong> Explicit state updates and derived data.</li>
        <li><strong>Fine-grained Reactivity:</strong> Efficient updates without global change detection cycles.</li>
        <li><strong>Future-Proof:</strong> Signals are the foundation for future Angular improvements (like Zoneless).</li>
        <li><strong>Better Performance:</strong> No more ExpressionChangedAfterItHasBeenChecked errors.</li>
      </ul>

      <div style="margin-top: 3rem; text-align: center;">
        <h2>Ready to start signaling? 🚀</h2>
      </div>
    </div>
  `
})
export class SummaryComponent {}
