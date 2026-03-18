import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="slide-container">
      <h1>Welcome to Angular Signals</h1>
      <p class="readable-text">
        Angular Signals are a reactive system that provides fine-grained tracking of state 
        and automatic notification when that state changes.
      </p>
      
      <h2>Why Signals?</h2>
      <ul class="readable-text">
        <li><strong>Fine-grained Reactivity:</strong> No more checking the entire component tree.</li>
        <li><strong>Glitch-free:</strong> Values are always consistent across the application.</li>
        <li><strong>Improved DX:</strong> Simple, intuitive API for state management.</li>
        <li><strong>OnPush by default:</strong> Signals work perfectly with the most efficient change detection.</li>
      </ul>
    </div>
  `
})
export class WelcomeComponent {}
