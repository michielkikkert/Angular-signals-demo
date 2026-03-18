import { Component, DestroyRef, inject } from '@angular/core';

@Component({
    selector: 'app-playground',
    imports: [],
    template: `
        <div class="slide-container">
            <h1>Playground (ZONELESS!)</h1>
            <p class="readable-text">Play around!</p>

            <p class="readable-text">
                {{ count }}
            </p>
        </div>
    `,
})
export class Playground {
    private destroy = inject(DestroyRef);
    public count = 0;
    public countRef: number;
    constructor() {

        this.countRef = setInterval(() => {
            this.count++;
            console.log(this.count);
        }, 1000);

        this.destroy.onDestroy(() => {
            clearInterval(this.countRef);
        });
    }
}
