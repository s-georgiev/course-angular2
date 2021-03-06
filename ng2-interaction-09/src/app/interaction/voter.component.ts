﻿import {Component, EventEmitter, Input, Output} from '@angular/core';
@Component({
    selector: 'my-voter',
    template: `
    <h4>{{name  | truncate:nameLength: '+++'}}</h4>
    <button (click)="vote(true)"  [disabled]="voted">Agree</button>
    <button (click)="vote(false)" [disabled]="voted">Disagree</button>
  `
})
export class VoterComponent {
    @Input() public name: string;
    @Input('length') public nameLength: string = '15';
    @Output() public onVoted = new EventEmitter<boolean>();
    public voted = false;
    public vote(agreed: boolean) {
        this.onVoted.emit(agreed);
        // this.voted = true;
    }
}
