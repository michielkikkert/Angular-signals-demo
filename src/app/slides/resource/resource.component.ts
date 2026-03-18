import {Component, signal, ChangeDetectionStrategy, resource} from '@angular/core';
import {rxResource} from '@angular/core/rxjs-interop';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {HighlightModule} from 'ngx-highlightjs';
import {of, delay} from 'rxjs';

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
                    <hr/>
                    @if (userResource.isLoading()) {
                        <p>Loading (resource)...</p>
                    }
                    @if (userResource.error()) {
                        <p color="warn">Error: {{ userResource.error() }}</p>
                    }

                    @if (userResource.hasValue()) {
                        <p class="readable-text">Data (resource): <strong>{{ userResource.value()?.name }}</strong></p>
                    }
                    <hr/>
                    @if (userRxResource.isLoading()) {
                        <p>Loading (resource)...</p>
                    }
                    @if (userRxResource.error()) {
                        <p color="warn">Error: {{ userResource.error() }}</p>
                    }

                    @if (userRxResource.hasValue()) {
                        <p class="readable-text">Data (resource): <strong>{{ userResource.value()?.name }}</strong></p>
                    }
                </mat-card-content>
            </mat-card>
            <pre><code [highlight]="codeSnippet" [language]="'typescript'"></code></pre>

            <ul class="readable-text">
                <li><strong>resource():</strong> For Promise-based async operations.</li>
                <li><strong>rxResource():</strong> For RxJS-based async operations.</li>
                <li>Automatically tracks dependencies and cancels previous requests.</li>
            </ul>
        </div>
    `,
    styles: [`
        .demo-card {
            margin: 2rem 0;
            padding: 1rem;
            background: #fafafa;
        }

        .actions {
            display: flex;
            gap: 1rem;
            margin-bottom: 1rem;
        }
    `]
})
export class ResourceComponent {
    userId = signal(1);

    // Example with resource (Promise-based)
    userResource = (resource as any)({
        params: () => ({id: this.userId()}),
        loader: async ({params}: any) => {
            // Simulating a fetch with delay
            return new Promise(resolve => setTimeout(() => resolve({id: params.id, name: 'User #' + params.id} as User), 800));
        }
    });

    // Example with rxResource (RxJS-based)
    userRxResource = (rxResource as any)({
        params: () => ({id: this.userId()}),
        stream: ({params}: any) => {
            // Simulating an observable fetch
            return of({id: params.id, name: 'Rx User #' + params.id} as User).pipe(delay(1200));
        }
    });

    codeSnippet = `// TypeScript:
// 1. resource (Promise-based)
userResource = resource({
  params: () => ({ id: this.userId() }),
  loader: async ({ params }) => {
    const response = await fetch(\`/api/users/\${params.id}\`);
    return response.json();
  }
});

// 2. rxResource (RxJS-based)
userRxResource = rxResource({
  params: () => ({ id: this.userId() }),
  stream: ({ params }) => {
    return this.http.get<User>(\`/api/users/\${params.id}\`);
  }
});

// Template:
@if (userResource.isLoading()) { Loading... }
@if (userResource.hasValue()) {
    <p>{{ userResource.value()?.name }}</p>
}
`;

    nextUser() {
        this.userId.update(id => id + 1);
    }
}
