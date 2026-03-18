import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-welcome',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="slide-container">
      <h1>Welcome to Angular Signals</h1>
      
      <h2>What are signals?</h2>
      <p class="readable-text">
        A signal is a wrapper around a value that notifies interested consumers when that value changes. 
        Signals can contain any value, from primitives to complex data structures.
      </p>

      <p class="readable-text">
        You read a signal's value by calling its getter function, which allows Angular to track where the signal is used.
      </p>

      <p class="readable-text">
        Signals may be either writable or read-only.
      </p>
      
      <div style="margin-top: 2rem;">
        <h2>Why Signals?</h2>
        <ul class="readable-text">
          <li><strong>Fine-grained Reactivity:</strong> No more checking the entire component tree.</li>
          <li><strong>Glitch-free:</strong> Values are always consistent across the application.</li>
          <li><strong>Improved DX:</strong> Simple, intuitive API for state management.</li>
          <li><strong>OnPush by default:</strong> Signals work perfectly with the most efficient change detection.</li>
        </ul>
      </div>
    </div>
  `
})
export class WelcomeComponent {}
