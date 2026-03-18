import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    RouterLink, 
    RouterLinkActive,
    MatSidenavModule, 
    MatListModule, 
    MatToolbarModule,
    MatButtonModule
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  menuItems = [
    { path: '/welcome', label: 'Welcome' },
    { path: '/writable', label: '1. Writable Signals' },
    { path: '/computed', label: '2. Computed Signals' },
    { path: '/effects', label: '3. Side Effects' },
    { path: '/inputs', label: '4. Modern Inputs' },
    { path: '/outputs', label: '5. Modern Outputs' },
    { path: '/rxjs', label: '6. RxJS Interop' },
    { path: '/resource', label: '7. Resource' },
    { path: '/summary', label: 'Summary' }
  ];
}
