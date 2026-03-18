import { Component, signal, ChangeDetectionStrategy, resource } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { HighlightModule } from 'ngx-highlightjs';

interface User {
  id: number;
  name: string;
}

@Component({
  selector: 'app-resource',
  standalone: true,
  imports: [MatButtonModule, MatCardModule, HighlightModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="slide-container">
      <h1>Resource & rxResource</h1>
      <p class="readable-text">
        Introduced in Angular 19, <code>resource()</code> and <code>rxResource()</code> 
        manage asynchronous state (like HTTP) directly as signals.
      </p>
      
      <mat-card class="demo-card">
        <mat-card-content>
          <p class="readable-text">User ID: <strong>{{ userId() }}</strong></p>
          <div class="actions">
            <button mat-raised-button color="primary" (click)="nextUser()">Next User</button>
          </div>
          <hr />
          @if (userResource.isLoading()) {
            <p>Loading...</p>
          } @else if (userResource.error()) {
            <p color="warn">Error: {{ userResource.error() }}</p>
          } @else {
            <p class="readable-text">Data: <strong>{{ userResource.value()?.name }}</strong></p>
          }
        </mat-card-content>
      </mat-card>

      <pre><code [highlight]="codeSnippet" language="typescript"></code></pre>

      <ul class="readable-text">
        <li><strong>resource():</strong> For Promise-based async operations.</li>
        <li><strong>rxResource():</strong> For RxJS-based async operations.</li>
        <li>Automatically tracks dependencies and cancels previous requests.</li>
      </ul>
    </div>
  `,
  styles: [`
    .demo-card { margin: 2rem 0; padding: 1rem; background: #fafafa; }
    .actions { display: flex; gap: 1rem; margin-bottom: 1rem; }
  `]
})
export class ResourceComponent {
  userId = signal(1);

  // Example with resource (Promise-based)
  userResource = (resource as any)({
    request: () => ({ id: this.userId() }),
    loader: async ({params}: any) => {
      // Simulating a fetch with delay
      return new Promise(resolve => setTimeout(() => resolve({ id: params.id, name: 'User #' + params.id } as User), 800));
    }
  });

  codeSnippet = `// Manage async state with resource
userResource = resource({
  request: () => ({ id: this.userId() }),
  loader: async ({ request }) => {
    const response = await fetch(\`/api/users/\${request.id}\`);
    return response.json();
  }
});

// Template usage:
@if (userResource.isLoading()) { ... }
<p>{{ userResource.value()?.name }}</p>`;

  nextUser() {
    this.userId.update(id => id + 1);
  }
}
