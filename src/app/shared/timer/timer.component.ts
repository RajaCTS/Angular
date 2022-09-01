import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements OnInit {
  @Input() timerSec: number;

  @Output() timerClear = new EventEmitter();

  public time: number;

  private circle: HTMLElement | null;
  private interval: any;

  constructor() {}

  ngOnInit(): void {
    this.circle = document.querySelector('.ko-progress-circle');
    this.timerStart(this.timerSec)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!changes['timerSec'].firstChange && changes['timerSec'].currentValue) {
      this.circle?.setAttribute('data-progress', '100');
      this.timerStart(changes['timerSec'].currentValue);
    }
  }

  private timerStart(timersec: number){
    this.time = timersec;
    this.interval = setInterval(() => {
      this.timer(--this.time);
    }, 1000);
  }

  private timer(second: number) {
    let seconds = Math.floor((second / this.timerSec) * 100);
    if (seconds === 0) {
      this.timerClear.emit(true);
      clearInterval(this.interval);
    }
    this.circle?.setAttribute('data-progress', seconds.toString());
  }
}
