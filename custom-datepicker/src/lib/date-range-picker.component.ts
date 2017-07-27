/**
 * date-range-picker.component
 */

import {
    Component, ElementRef, EventEmitter, HostListener, Input, OnInit,
    Output
} from '@angular/core';
import * as dateFns from 'date-fns';

export interface IDateRange {
    from: Date;
    to: Date;
}

@Component({
    selector: 'app-date-range',
    template: `<div class="yk-dateRange-container" [ngClass]="{
        'is-active': opened,
        'theme-green': themeColor === 'green',
        'theme-teal': themeColor === 'teal',
        'theme-grape': themeColor === 'grape',
        'theme-red': themeColor === 'red',
        'theme-gray': themeColor === 'gray'
    }
"><div class="yk-input-container"><div class="yk-input-section" (click)="toggleCalendar('from')" [ngClass]="{'is-active': opened === 'from'}"><span class="yk-label">Start</span> <span class="yk-content">{{datePick?.from | date: 'mediumDate' }}</span> <span class="yk-icon"><!--<editor-fold desc="Calendar Icon">--> <svg version="1.1" id="calendar_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 488.152 488.152" style="enable-background:new 0 0 488.152 488.152" xml:space="preserve"><g><g><path d="M177.854,269.311c0-6.115-4.96-11.069-11.08-11.069h-38.665c-6.113,0-11.074,4.954-11.074,11.069v38.66
			c0,6.123,4.961,11.079,11.074,11.079h38.665c6.12,0,11.08-4.956,11.08-11.079V269.311L177.854,269.311z"/><path d="M274.483,269.311c0-6.115-4.961-11.069-11.069-11.069h-38.67c-6.113,0-11.074,4.954-11.074,11.069v38.66
			c0,6.123,4.961,11.079,11.074,11.079h38.67c6.108,0,11.069-4.956,11.069-11.079V269.311z"/><path d="M371.117,269.311c0-6.115-4.961-11.069-11.074-11.069h-38.665c-6.12,0-11.08,4.954-11.08,11.069v38.66
			c0,6.123,4.96,11.079,11.08,11.079h38.665c6.113,0,11.074-4.956,11.074-11.079V269.311z"/><path d="M177.854,365.95c0-6.125-4.96-11.075-11.08-11.075h-38.665c-6.113,0-11.074,4.95-11.074,11.075v38.653
			c0,6.119,4.961,11.074,11.074,11.074h38.665c6.12,0,11.08-4.956,11.08-11.074V365.95L177.854,365.95z"/><path d="M274.483,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.113,0-11.074,4.95-11.074,11.075v38.653
			c0,6.119,4.961,11.074,11.074,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95z"/><path d="M371.117,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.12,0-11.08,4.95-11.08,11.075v38.653
			c0,6.119,4.96,11.074,11.08,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95L371.117,365.95z"/><path d="M440.254,54.354v59.05c0,26.69-21.652,48.198-48.338,48.198h-30.493c-26.688,0-48.627-21.508-48.627-48.198V54.142
			h-137.44v59.262c0,26.69-21.938,48.198-48.622,48.198H96.235c-26.685,0-48.336-21.508-48.336-48.198v-59.05
			C24.576,55.057,5.411,74.356,5.411,98.077v346.061c0,24.167,19.588,44.015,43.755,44.015h389.82
			c24.131,0,43.755-19.889,43.755-44.015V98.077C482.741,74.356,463.577,55.057,440.254,54.354z M426.091,422.588
			c0,10.444-8.468,18.917-18.916,18.917H80.144c-10.448,0-18.916-8.473-18.916-18.917V243.835c0-10.448,8.467-18.921,18.916-18.921
			h327.03c10.448,0,18.916,8.473,18.916,18.921L426.091,422.588L426.091,422.588z"/><path d="M96.128,129.945h30.162c9.155,0,16.578-7.412,16.578-16.567V16.573C142.868,7.417,135.445,0,126.29,0H96.128
			C86.972,0,79.55,7.417,79.55,16.573v96.805C79.55,122.533,86.972,129.945,96.128,129.945z"/><path d="M361.035,129.945h30.162c9.149,0,16.572-7.412,16.572-16.567V16.573C407.77,7.417,400.347,0,391.197,0h-30.162
			c-9.154,0-16.577,7.417-16.577,16.573v96.805C344.458,122.533,351.881,129.945,361.035,129.945z"/></g></g></svg> <!--</editor-fold>--></span></div><div class="yk-input-section" (click)="toggleCalendar('to')" [ngClass]="{'is-active': opened === 'to'}"><span class="yk-label">End</span> <span class="yk-content">{{datePick?.to | date: 'mediumDate' }}</span> <span class="yk-icon"><!--<editor-fold desc="Calendar Icon">--> <svg version="1.1" id="calendar_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 488.152 488.152" style="enable-background:new 0 0 488.152 488.152" xml:space="preserve"><g><g><path d="M177.854,269.311c0-6.115-4.96-11.069-11.08-11.069h-38.665c-6.113,0-11.074,4.954-11.074,11.069v38.66
			c0,6.123,4.961,11.079,11.074,11.079h38.665c6.12,0,11.08-4.956,11.08-11.079V269.311L177.854,269.311z"/><path d="M274.483,269.311c0-6.115-4.961-11.069-11.069-11.069h-38.67c-6.113,0-11.074,4.954-11.074,11.069v38.66
			c0,6.123,4.961,11.079,11.074,11.079h38.67c6.108,0,11.069-4.956,11.069-11.079V269.311z"/><path d="M371.117,269.311c0-6.115-4.961-11.069-11.074-11.069h-38.665c-6.12,0-11.08,4.954-11.08,11.069v38.66
			c0,6.123,4.96,11.079,11.08,11.079h38.665c6.113,0,11.074-4.956,11.074-11.079V269.311z"/><path d="M177.854,365.95c0-6.125-4.96-11.075-11.08-11.075h-38.665c-6.113,0-11.074,4.95-11.074,11.075v38.653
			c0,6.119,4.961,11.074,11.074,11.074h38.665c6.12,0,11.08-4.956,11.08-11.074V365.95L177.854,365.95z"/><path d="M274.483,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.113,0-11.074,4.95-11.074,11.075v38.653
			c0,6.119,4.961,11.074,11.074,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95z"/><path d="M371.117,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.12,0-11.08,4.95-11.08,11.075v38.653
			c0,6.119,4.96,11.074,11.08,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95L371.117,365.95z"/><path d="M440.254,54.354v59.05c0,26.69-21.652,48.198-48.338,48.198h-30.493c-26.688,0-48.627-21.508-48.627-48.198V54.142
			h-137.44v59.262c0,26.69-21.938,48.198-48.622,48.198H96.235c-26.685,0-48.336-21.508-48.336-48.198v-59.05
			C24.576,55.057,5.411,74.356,5.411,98.077v346.061c0,24.167,19.588,44.015,43.755,44.015h389.82
			c24.131,0,43.755-19.889,43.755-44.015V98.077C482.741,74.356,463.577,55.057,440.254,54.354z M426.091,422.588
			c0,10.444-8.468,18.917-18.916,18.917H80.144c-10.448,0-18.916-8.473-18.916-18.917V243.835c0-10.448,8.467-18.921,18.916-18.921
			h327.03c10.448,0,18.916,8.473,18.916,18.921L426.091,422.588L426.091,422.588z"/><path d="M96.128,129.945h30.162c9.155,0,16.578-7.412,16.578-16.567V16.573C142.868,7.417,135.445,0,126.29,0H96.128
			C86.972,0,79.55,7.417,79.55,16.573v96.805C79.55,122.533,86.972,129.945,96.128,129.945z"/><path d="M361.035,129.945h30.162c9.149,0,16.572-7.412,16.572-16.567V16.573C407.77,7.417,400.347,0,391.197,0h-30.162
			c-9.154,0-16.577,7.417-16.577,16.573v96.805C344.458,122.533,351.881,129.945,361.035,129.945z"/></g></g></svg> <!--</editor-fold>--></span></div></div><div class="yk-calendar-container" [ngClass]="{ 'is-opened': !!opened, 'is-to': opened === 'to' }"><div class="yk-cancel-icon" (click)="toggleCalendar(false)"><!--<editor-fold desc="Calendar Icon">--> <svg version="1.1" id="calendar_cancel" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 212.982 212.982" style="enable-background:new 0 0 212.982 212.982" xml:space="preserve"><g id="Close"><path style="fill-rule:evenodd;clip-rule:evenodd" d="M131.804,106.491l75.936-75.936c6.99-6.99,6.99-18.323,0-25.312
		c-6.99-6.99-18.322-6.99-25.312,0l-75.937,75.937L30.554,5.242c-6.99-6.99-18.322-6.99-25.312,0c-6.989,6.99-6.989,18.323,0,25.312
		l75.937,75.936L5.242,182.427c-6.989,6.99-6.989,18.323,0,25.312c6.99,6.99,18.322,6.99,25.312,0l75.937-75.937l75.937,75.937
		c6.989,6.99,18.322,6.99,25.312,0c6.99-6.99,6.99-18.322,0-25.312L131.804,106.491z"/></g></svg><!--</editor-fold>--></div><div class="yk-calendar"><div class="yk-calendar-control"><div class="yk-calendar-control-nav"><span class="nav-prev" (click)="prevMonth()"></span></div><div class="yk-calendar-control-content"><div class="content"><span class="month">{{moment | date: 'MMMM'}}</span> <span class="year">{{moment | date: 'y'}}</span></div></div><div class="yk-calendar-control-nav"><span class="nav-next" (click)="nextMonth()"></span></div></div><div class="yk-calendar-content"><div class="yk-calendar-row"><span class="yk-weekday" *ngFor="let day of dayNames">{{ day }}</span></div><div class="yk-calendar-row"><div class="yk-day" *ngFor="let date of dates" [ngClass]="{
						  'out-focus': date.getMonth() !== moment.getMonth(),
						  'is-within-range': isWithinRange(date),
						  'is-from': isDateRangeFrom(date),
						  'is-to': isDateRangeTo(date)
						  }" (click)="selectDate(date)"><span class="yk-day-num" [ngClass]="{'is-active': isDateRangeFrom(date) || isDateRangeTo(date)}">{{ date | date: 'd' }}</span></div></div></div></div><div class="yk-calendar-sidebar"><div class="yk-sidebar-btns"><button type="button" class="yk-btn" (click)="selectRange('tm')" [class.is-active]="range === 'tm'">This Month</button> <button type="button" class="yk-btn" (click)="selectRange('lm')" [class.is-active]="range === 'lm'">Last Month</button> <button type="button" class="yk-btn" (click)="selectRange('tw')" [class.is-active]="range === 'tw'">This Week</button> <button type="button" class="yk-btn" (click)="selectRange('lw')" [class.is-active]="range === 'lw'">Last Week</button> <button type="button" class="yk-btn" (click)="selectRange('ty')" [class.is-active]="range === 'ty'">This Year</button> <button type="button" class="yk-btn" (click)="selectRange('ly')" [class.is-active]="range === 'ly'">Last Year</button></div><div class="yk-sidebar-inputs"><div class="yk-input-section" (click)="toggleCalendar('from')" [ngClass]="{'is-active': opened === 'from'}"><span class="yk-label">Start</span> <span class="yk-content">{{datePick?.from | date: 'mediumDate' }}</span> <span class="yk-icon"><!--<editor-fold desc="Calendar Icon">--> <svg version="1.1" id="calendar_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 488.152 488.152" style="enable-background:new 0 0 488.152 488.152" xml:space="preserve"><g><g><path d="M177.854,269.311c0-6.115-4.96-11.069-11.08-11.069h-38.665c-6.113,0-11.074,4.954-11.074,11.069v38.66
			c0,6.123,4.961,11.079,11.074,11.079h38.665c6.12,0,11.08-4.956,11.08-11.079V269.311L177.854,269.311z"/><path d="M274.483,269.311c0-6.115-4.961-11.069-11.069-11.069h-38.67c-6.113,0-11.074,4.954-11.074,11.069v38.66
			c0,6.123,4.961,11.079,11.074,11.079h38.67c6.108,0,11.069-4.956,11.069-11.079V269.311z"/><path d="M371.117,269.311c0-6.115-4.961-11.069-11.074-11.069h-38.665c-6.12,0-11.08,4.954-11.08,11.069v38.66
			c0,6.123,4.96,11.079,11.08,11.079h38.665c6.113,0,11.074-4.956,11.074-11.079V269.311z"/><path d="M177.854,365.95c0-6.125-4.96-11.075-11.08-11.075h-38.665c-6.113,0-11.074,4.95-11.074,11.075v38.653
			c0,6.119,4.961,11.074,11.074,11.074h38.665c6.12,0,11.08-4.956,11.08-11.074V365.95L177.854,365.95z"/><path d="M274.483,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.113,0-11.074,4.95-11.074,11.075v38.653
			c0,6.119,4.961,11.074,11.074,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95z"/><path d="M371.117,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.12,0-11.08,4.95-11.08,11.075v38.653
			c0,6.119,4.96,11.074,11.08,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95L371.117,365.95z"/><path d="M440.254,54.354v59.05c0,26.69-21.652,48.198-48.338,48.198h-30.493c-26.688,0-48.627-21.508-48.627-48.198V54.142
			h-137.44v59.262c0,26.69-21.938,48.198-48.622,48.198H96.235c-26.685,0-48.336-21.508-48.336-48.198v-59.05
			C24.576,55.057,5.411,74.356,5.411,98.077v346.061c0,24.167,19.588,44.015,43.755,44.015h389.82
			c24.131,0,43.755-19.889,43.755-44.015V98.077C482.741,74.356,463.577,55.057,440.254,54.354z M426.091,422.588
			c0,10.444-8.468,18.917-18.916,18.917H80.144c-10.448,0-18.916-8.473-18.916-18.917V243.835c0-10.448,8.467-18.921,18.916-18.921
			h327.03c10.448,0,18.916,8.473,18.916,18.921L426.091,422.588L426.091,422.588z"/><path d="M96.128,129.945h30.162c9.155,0,16.578-7.412,16.578-16.567V16.573C142.868,7.417,135.445,0,126.29,0H96.128
			C86.972,0,79.55,7.417,79.55,16.573v96.805C79.55,122.533,86.972,129.945,96.128,129.945z"/><path d="M361.035,129.945h30.162c9.149,0,16.572-7.412,16.572-16.567V16.573C407.77,7.417,400.347,0,391.197,0h-30.162
			c-9.154,0-16.577,7.417-16.577,16.573v96.805C344.458,122.533,351.881,129.945,361.035,129.945z"/></g></g></svg> <!--</editor-fold>--></span></div><div class="yk-input-section" (click)="toggleCalendar('to')" [ngClass]="{'is-active': opened === 'to'}"><span class="yk-label">End</span> <span class="yk-content">{{datePick?.to | date: 'mediumDate' }}</span> <span class="yk-icon"><!--<editor-fold desc="Calendar Icon">--> <svg version="1.1" id="calendar_icon" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 488.152 488.152" style="enable-background:new 0 0 488.152 488.152" xml:space="preserve"><g><g><path d="M177.854,269.311c0-6.115-4.96-11.069-11.08-11.069h-38.665c-6.113,0-11.074,4.954-11.074,11.069v38.66
			c0,6.123,4.961,11.079,11.074,11.079h38.665c6.12,0,11.08-4.956,11.08-11.079V269.311L177.854,269.311z"/><path d="M274.483,269.311c0-6.115-4.961-11.069-11.069-11.069h-38.67c-6.113,0-11.074,4.954-11.074,11.069v38.66
			c0,6.123,4.961,11.079,11.074,11.079h38.67c6.108,0,11.069-4.956,11.069-11.079V269.311z"/><path d="M371.117,269.311c0-6.115-4.961-11.069-11.074-11.069h-38.665c-6.12,0-11.08,4.954-11.08,11.069v38.66
			c0,6.123,4.96,11.079,11.08,11.079h38.665c6.113,0,11.074-4.956,11.074-11.079V269.311z"/><path d="M177.854,365.95c0-6.125-4.96-11.075-11.08-11.075h-38.665c-6.113,0-11.074,4.95-11.074,11.075v38.653
			c0,6.119,4.961,11.074,11.074,11.074h38.665c6.12,0,11.08-4.956,11.08-11.074V365.95L177.854,365.95z"/><path d="M274.483,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.113,0-11.074,4.95-11.074,11.075v38.653
			c0,6.119,4.961,11.074,11.074,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95z"/><path d="M371.117,365.95c0-6.125-4.961-11.075-11.069-11.075h-38.67c-6.12,0-11.08,4.95-11.08,11.075v38.653
			c0,6.119,4.96,11.074,11.08,11.074h38.67c6.108,0,11.069-4.956,11.069-11.074V365.95L371.117,365.95z"/><path d="M440.254,54.354v59.05c0,26.69-21.652,48.198-48.338,48.198h-30.493c-26.688,0-48.627-21.508-48.627-48.198V54.142
			h-137.44v59.262c0,26.69-21.938,48.198-48.622,48.198H96.235c-26.685,0-48.336-21.508-48.336-48.198v-59.05
			C24.576,55.057,5.411,74.356,5.411,98.077v346.061c0,24.167,19.588,44.015,43.755,44.015h389.82
			c24.131,0,43.755-19.889,43.755-44.015V98.077C482.741,74.356,463.577,55.057,440.254,54.354z M426.091,422.588
			c0,10.444-8.468,18.917-18.916,18.917H80.144c-10.448,0-18.916-8.473-18.916-18.917V243.835c0-10.448,8.467-18.921,18.916-18.921
			h327.03c10.448,0,18.916,8.473,18.916,18.921L426.091,422.588L426.091,422.588z"/><path d="M96.128,129.945h30.162c9.155,0,16.578-7.412,16.578-16.567V16.573C142.868,7.417,135.445,0,126.29,0H96.128
			C86.972,0,79.55,7.417,79.55,16.573v96.805C79.55,122.533,86.972,129.945,96.128,129.945z"/><path d="M361.035,129.945h30.162c9.149,0,16.572-7.412,16.572-16.567V16.573C407.77,7.417,400.347,0,391.197,0h-30.162
			c-9.154,0-16.577,7.417-16.577,16.573v96.805C344.458,122.533,351.881,129.945,361.035,129.945z"/></g></g></svg> <!--</editor-fold>--></span></div></div></div></div></div>`,
    styles: [`*,::after,::before{-moz-box-sizing:border-box;box-sizing:border-box}.yk-dateRange-container{width:300px;height:50px;background:#fff;display:inline-block;border:1px solid #9da3a6;-moz-border-radius:7px;border-radius:7px;position:relative;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.yk-dateRange-container.is-active{border:1px solid #0070ba}.yk-dateRange-container .yk-input-section{outline:0;padding:5px 10px;color:#2c2e2f;cursor:pointer;position:relative;-webkit-transition:all .5s ease;-moz-transition:all .5s ease;transition:all .5s ease}.yk-dateRange-container .yk-input-section .yk-content,.yk-dateRange-container .yk-input-section .yk-label{font-size:12px;line-height:20px;display:block;text-align:center}.yk-dateRange-container .yk-input-section .yk-label{color:#0070ba}.yk-dateRange-container .yk-input-section .yk-icon{position:absolute;right:10px;bottom:5px;width:20px;height:20px}.yk-dateRange-container .yk-input-section .yk-icon svg{fill:#0070ba}.yk-dateRange-container .yk-input-section.is-active{color:#fff;background-color:#0070ba}.yk-dateRange-container .yk-input-section.is-active .yk-label{color:#fff}.yk-dateRange-container .yk-input-section.is-active .yk-icon svg{fill:#fff}.yk-dateRange-container .yk-input-container{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;width:100%;height:100%}.yk-dateRange-container .yk-input-container .yk-input-section{width:50%;height:100%}.yk-dateRange-container .yk-input-container .yk-input-section:first-child{-moz-border-radius:7px 0 0 7px;border-radius:7px 0 0 7px;border-right:.5px solid #d4dade}.yk-dateRange-container .yk-input-container .yk-input-section:last-child{-moz-border-radius:0 7px 7px 0;border-radius:0 7px 7px 0;border-left:.5px solid #d4dade}.yk-dateRange-container .yk-calendar-container{position:fixed;top:0;left:0;width:100vw;height:100%;max-width:500px;background:#fff;border:1px solid #0070ba;-moz-border-radius:7px;border-radius:7px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:100;display:none;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;overflow-y:scroll;-webkit-animation:popover .3s ease-in-out;-moz-animation:popover .3s ease-in-out;animation:popover .3s ease-in-out}@media only screen and (min-width:768px){.yk-dateRange-container .yk-calendar-container{position:absolute;top:-webkit-calc(50px + 20px);top:-moz-calc(50px + 20px);top:calc(50px + 20px);height:auto;overflow:inherit}}.yk-dateRange-container .yk-calendar-container.is-opened{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}.yk-dateRange-container .yk-calendar-container:after{content:'';position:absolute;width:20px;height:20px;top:-11px;left:65px;-webkit-transform:rotate(45deg);-moz-transform:rotate(45deg);-ms-transform:rotate(45deg);transform:rotate(45deg);border-top:1px solid #0070ba;border-left:1px solid #0070ba;background:#fff;-webkit-transition:left .5s;-moz-transition:left .5s;transition:left .5s;display:none}@media only screen and (min-width:768px){.yk-dateRange-container .yk-calendar-container:after{display:block}}.yk-dateRange-container .yk-calendar-container.is-to:after{left:215px}.yk-dateRange-container .yk-calendar-container .yk-cancel-icon{position:absolute;top:5px;right:5px;width:12px;height:12px;cursor:pointer}.yk-dateRange-container .yk-calendar-container .yk-calendar{width:100vw;border-bottom:1px solid #d4dade;padding:20px}@media only screen and (min-width:768px){.yk-dateRange-container .yk-calendar-container .yk-calendar{width:340px;border-right:1px solid #d4dade;border-bottom:none}}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control{font-size:12px;line-height:20px;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;height:20px;width:100%;margin-bottom:10px}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-nav{position:relative;cursor:pointer;width:-webkit-calc(100% / 8);width:-moz-calc(100% / 8);width:calc(100% / 8)}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-nav>*{position:absolute;top:50%;right:auto;bottom:auto;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-nav .nav-next::before,.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-nav .nav-prev::before{content:" ";border-top:.5em solid transparent;border-bottom:.5em solid transparent;border-right:.75em solid #000;width:0;height:0;display:block;margin:0 auto}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-nav .nav-next::before{border-right:0;border-left:.75em solid #000}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-content{width:-webkit-calc(100% * 6 / 8);width:-moz-calc(100% * 6 / 8);width:calc(100% * 6 / 8);text-align:center}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-content .month,.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-content .year{display:inline-block;cursor:pointer;-webkit-transition:-webkit-transform .2s ease;transition:-webkit-transform .2s ease;-moz-transition:transform .2s ease,-moz-transform .2s ease;transition:transform .2s ease;transition:transform .2s ease,-webkit-transform .2s ease,-moz-transform .2s ease}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-content .month:hover,.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-content .year:hover{-webkit-transform:scale(1.2);-moz-transform:scale(1.2);-ms-transform:scale(1.2);transform:scale(1.2)}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-content .month{margin-right:8px;margin-right:.5rem;font-weight:700}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-control-content .year{font-style:italic;color:#999}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content{width:100%}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content .yk-calendar-row{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:100%}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content .yk-weekday{font-size:12px;line-height:20px;font-weight:700;text-align:left;color:#999;width:-webkit-calc(100% / 7);width:-moz-calc(100% / 7);width:calc(100% / 7)}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day{font-size:12px;line-height:20px;position:relative;height:40px;cursor:pointer;width:-webkit-calc(100% / 7);width:-moz-calc(100% / 7);width:calc(100% / 7);margin:5px 0}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day.out-focus{color:#ddd}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day.out-focus:hover{color:#000}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day.is-within-range{background:#acd5ed;color:#333}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day.is-within-range.is-from{-moz-border-radius-topleft:50%;border-top-left-radius:50%;-moz-border-radius-bottomleft:50%;border-bottom-left-radius:50%}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day.is-within-range.is-to{-moz-border-radius-topright:50%;border-top-right-radius:50%;-moz-border-radius-bottomright:50%;border-bottom-right-radius:50%}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;width:100%;height:100%;-moz-border-radius:50%;border-radius:50%}.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num.is-active,.yk-dateRange-container .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num:hover{background:#0070ba;color:#fff}.yk-dateRange-container .yk-calendar-container .yk-calendar-sidebar{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-flex:1;-webkit-flex-grow:1;-moz-box-flex:1;-ms-flex-positive:1;flex-grow:1;width:158px}.yk-dateRange-container .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns{display:none;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;width:100%;height:100%}@media only screen and (min-width:768px){.yk-dateRange-container .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex}}.yk-dateRange-container .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn{background:#fff;-moz-border-radius:20px;border-radius:20px;border:1px solid #0070ba;height:40px;width:138px;text-align:center;outline:0;margin:5px 0;padding:0;color:#6b737c;cursor:pointer}.yk-dateRange-container .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn:hover{background:#acd5ed}.yk-dateRange-container .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn.is-active{background:#0070ba;color:#fff}.yk-dateRange-container .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-inputs{width:150px;height:100px;background:#fff;-moz-border-radius:7px;border-radius:7px;border:1px solid #0070ba;margin:10px 0;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}@media only screen and (min-width:768px){.yk-dateRange-container .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-inputs{display:none}}.yk-dateRange-container .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-inputs .yk-input-section{width:100%;height:50%}.yk-dateRange-container .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-inputs .yk-input-section:first-child{-moz-border-radius:7px 7px 0 0;border-radius:7px 7px 0 0;border-bottom:.5px solid #d4dade}.yk-dateRange-container .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-inputs .yk-input-section:last-child{-moz-border-radius:0 0 7px 7px;border-radius:0 0 7px 7px;border-top:.5px solid #d4dade}.yk-dateRange-container.theme-green.is-active{border-color:#0b7285}.yk-dateRange-container.theme-green .yk-input-section .yk-label{color:#0b7285}.yk-dateRange-container.theme-green .yk-input-section .yk-icon svg{fill:#0b7285}.yk-dateRange-container.theme-green .yk-input-section.is-active{background-color:#0b7285}.yk-dateRange-container.theme-green .yk-input-section.is-active .yk-label{color:#fff}.yk-dateRange-container.theme-green .yk-input-section.is-active .yk-icon svg{fill:#fff}.yk-dateRange-container.theme-green .yk-calendar-container{border-color:#0b7285}.yk-dateRange-container.theme-green .yk-calendar-container:after{border-top-color:#0b7285;border-left-color:#0b7285}.yk-dateRange-container.theme-green .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day.is-within-range{background:#13c3e3}.yk-dateRange-container.theme-green .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num.is-active,.yk-dateRange-container.theme-green .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num:hover{background:#0b7285}.yk-dateRange-container.theme-green .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn{border-color:#0b7285}.yk-dateRange-container.theme-green .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn:hover{background:#13c3e3}.yk-dateRange-container.theme-green .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn.is-active{background:#0b7285}.yk-dateRange-container.theme-green .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-inputs{border-color:#0b7285}.yk-dateRange-container.theme-teal.is-active{border-color:#087f5b}.yk-dateRange-container.theme-teal .yk-input-section .yk-label{color:#087f5b}.yk-dateRange-container.theme-teal .yk-input-section .yk-icon svg{fill:#087f5b}.yk-dateRange-container.theme-teal .yk-input-section.is-active{background-color:#087f5b}.yk-dateRange-container.theme-teal .yk-input-section.is-active .yk-label{color:#fff}.yk-dateRange-container.theme-teal .yk-input-section.is-active .yk-icon svg{fill:#fff}.yk-dateRange-container.theme-teal .yk-calendar-container{border-color:#087f5b}.yk-dateRange-container.theme-teal .yk-calendar-container:after{border-top-color:#087f5b;border-left-color:#087f5b}.yk-dateRange-container.theme-teal .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day.is-within-range{background:#0edfa0}.yk-dateRange-container.theme-teal .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num.is-active,.yk-dateRange-container.theme-teal .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num:hover{background:#087f5b}.yk-dateRange-container.theme-teal .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn{border-color:#087f5b}.yk-dateRange-container.theme-teal .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn:hover{background:#0edfa0}.yk-dateRange-container.theme-teal .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn.is-active{background:#087f5b}.yk-dateRange-container.theme-teal .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-inputs{border-color:#087f5b}.yk-dateRange-container.theme-grape.is-active{border-color:#862e9c}.yk-dateRange-container.theme-grape .yk-input-section .yk-label{color:#862e9c}.yk-dateRange-container.theme-grape .yk-input-section .yk-icon svg{fill:#862e9c}.yk-dateRange-container.theme-grape .yk-input-section.is-active{background-color:#862e9c}.yk-dateRange-container.theme-grape .yk-input-section.is-active .yk-label{color:#fff}.yk-dateRange-container.theme-grape .yk-input-section.is-active .yk-icon svg{fill:#fff}.yk-dateRange-container.theme-grape .yk-calendar-container{border-color:#862e9c}.yk-dateRange-container.theme-grape .yk-calendar-container:after{border-top-color:#862e9c;border-left-color:#862e9c}.yk-dateRange-container.theme-grape .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day.is-within-range{background:#ba60d0}.yk-dateRange-container.theme-grape .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num.is-active,.yk-dateRange-container.theme-grape .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num:hover{background:#862e9c}.yk-dateRange-container.theme-grape .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn{border-color:#862e9c}.yk-dateRange-container.theme-grape .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn:hover{background:#ba60d0;color:#fff}.yk-dateRange-container.theme-grape .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn.is-active{background:#862e9c}.yk-dateRange-container.theme-grape .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-inputs{border-color:#862e9c}.yk-dateRange-container.theme-red.is-active{border-color:#c92a2a}.yk-dateRange-container.theme-red .yk-input-section .yk-label{color:#c92a2a}.yk-dateRange-container.theme-red .yk-input-section .yk-icon svg{fill:#c92a2a}.yk-dateRange-container.theme-red .yk-input-section.is-active{background-color:#c92a2a}.yk-dateRange-container.theme-red .yk-input-section.is-active .yk-label{color:#fff}.yk-dateRange-container.theme-red .yk-input-section.is-active .yk-icon svg{fill:#fff}.yk-dateRange-container.theme-red .yk-calendar-container{border-color:#c92a2a}.yk-dateRange-container.theme-red .yk-calendar-container:after{border-top-color:#c92a2a;border-left-color:#c92a2a}.yk-dateRange-container.theme-red .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day.is-within-range{background:#e27777}.yk-dateRange-container.theme-red .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num.is-active,.yk-dateRange-container.theme-red .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num:hover{background:#c92a2a}.yk-dateRange-container.theme-red .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn{border-color:#c92a2a}.yk-dateRange-container.theme-red .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn:hover{background:#e27777}.yk-dateRange-container.theme-red .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn.is-active{background:#c92a2a}.yk-dateRange-container.theme-red .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-inputs{border-color:#c92a2a}.yk-dateRange-container.theme-gray.is-active{border-color:#212529}.yk-dateRange-container.theme-gray .yk-input-section .yk-label{color:#212529}.yk-dateRange-container.theme-gray .yk-input-section .yk-icon svg{fill:#212529}.yk-dateRange-container.theme-gray .yk-input-section.is-active{background-color:#212529}.yk-dateRange-container.theme-gray .yk-input-section.is-active .yk-label{color:#fff}.yk-dateRange-container.theme-gray .yk-input-section.is-active .yk-icon svg{fill:#fff}.yk-dateRange-container.theme-gray .yk-calendar-container{border-color:#212529}.yk-dateRange-container.theme-gray .yk-calendar-container:after{border-top-color:#212529;border-left-color:#212529}.yk-dateRange-container.theme-gray .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day.is-within-range{background:#4e5862}.yk-dateRange-container.theme-gray .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num.is-active,.yk-dateRange-container.theme-gray .yk-calendar-container .yk-calendar .yk-calendar-content .yk-day .yk-day-num:hover{background:#212529}.yk-dateRange-container.theme-gray .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn{border-color:#212529}.yk-dateRange-container.theme-gray .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn:hover{background:#4e5862;color:#fff}.yk-dateRange-container.theme-gray .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-btns .yk-btn.is-active{background:#212529}.yk-dateRange-container.theme-gray .yk-calendar-container .yk-calendar-sidebar .yk-sidebar-inputs{border-color:#212529}@-webkit-keyframes popover{0%{opacity:0;-webkit-transform:translateY(-50px) scale(.8);transform:translateY(-50px) scale(.8)}80%{opacity:1;-webkit-transform:translateY(10px) scale(1.05);transform:translateY(10px) scale(1.05)}100%{opacity:1;-webkit-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@-moz-keyframes popover{0%{opacity:0;-moz-transform:translateY(-50px) scale(.8);transform:translateY(-50px) scale(.8)}80%{opacity:1;-moz-transform:translateY(10px) scale(1.05);transform:translateY(10px) scale(1.05)}100%{opacity:1;-moz-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}@keyframes popover{0%{opacity:0;-webkit-transform:translateY(-50px) scale(.8);-moz-transform:translateY(-50px) scale(.8);transform:translateY(-50px) scale(.8)}80%{opacity:1;-webkit-transform:translateY(10px) scale(1.05);-moz-transform:translateY(10px) scale(1.05);transform:translateY(10px) scale(1.05)}100%{opacity:1;-webkit-transform:translateY(0) scale(1);-moz-transform:translateY(0) scale(1);transform:translateY(0) scale(1)}}`],
})
export class DateRangePickerComponent implements OnInit {

    public opened: false | 'from' | 'to';
    public datePick: IDateRange;
    public range: 'tm' | 'lm' | 'lw' | 'tw' | 'ty' | 'ly';
    public moment: Date;
    public dayNames: string[];
    public dates: Date[];
    @Input() public themeColor: 'green' | 'teal' | 'grape' | 'red' | 'gray';
    @Input() private dateRange: IDateRange;
    @Output() private dateRangeChange = new EventEmitter<IDateRange>();

    constructor( private elementRef: ElementRef ) {
    }

    public ngOnInit() {
        this.opened = false;
        this.dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        this.datePick = {
            from: null,
            to: null
        };
        if (this.dateRange &&
            this.dateRange.from &&
            this.dateRange.to) {
            this.datePick = Object.assign({}, this.datePick, this.dateRange);
            this.moment = new Date(this.datePick.from);
            this.generateCalendar();
        } else {
            this.selectRange('tw');
        }
    }

    public toggleCalendar( selection: false | 'from' | 'to' ): void {
        if (this.opened && this.opened !== selection) {
            this.opened = selection;
        } else {
            this.opened = this.opened ? false : selection;
        }
        if (selection && this.datePick[selection]) {
            let diffMonths = dateFns.differenceInCalendarMonths(
                this.datePick[selection], this.moment);

            if (diffMonths !== 0) {
                this.moment = dateFns.addMonths(this.moment, diffMonths);
                this.generateCalendar();
            }
        }
    }

    public selectRange( range: 'tm' | 'lm' | 'lw' | 'tw' | 'ty' | 'ly' ): void {
        let today = dateFns.startOfDay(new Date());

        switch (range) {
            case 'tm':
                this.datePick = {
                    from: dateFns.startOfMonth(today),
                    to: dateFns.endOfMonth(today)
                };
                break;
            case 'lm':
                today = dateFns.subMonths(today, 1);
                this.datePick = {
                    from: dateFns.startOfMonth(today),
                    to: dateFns.endOfMonth(today)
                };
                break;
            case 'lw':
                today = dateFns.subWeeks(today, 1);
                this.datePick = {
                    from: dateFns.startOfWeek(today),
                    to: dateFns.endOfWeek(today)
                };
                break;
            default:
            case 'tw':
                this.datePick = {
                    from: dateFns.startOfWeek(today),
                    to: dateFns.endOfWeek(today)
                };
                break;
            case 'ty':
                this.datePick = {
                    from: dateFns.startOfYear(today),
                    to: dateFns.endOfYear(today)
                };
                break;
            case 'ly':
                today = dateFns.subYears(today, 1);
                this.datePick = {
                    from: dateFns.startOfYear(today),
                    to: dateFns.endOfYear(today)
                };
                break;
        }

        this.range = range;
        this.moment = new Date(this.datePick.from);
        this.generateCalendar();
    }

    public generateCalendar(): void {
        this.dates = [];
        let firstDate = dateFns.startOfMonth(this.moment);
        let start = 0 - (dateFns.getDay(firstDate) + 7) % 7;
        let end = 41 + start; // iterator ending point

        for (let i = start; i <= end; i += 1) {
            let day = dateFns.addDays(firstDate, i);
            this.dates.push(day);
        }
    }

    public selectDate( date: Date ): void {

        if (this.opened === 'from') {
            this.datePick.from = date;
            if (this.datePick && this.datePick.to &&
                dateFns.compareDesc(date, this.datePick.to) < 1) {
                this.datePick.to = null;
                this.dateRangeChange.emit(null);
            } else {
                this.dateRangeChange.emit(Object.assign({}, this.datePick));
            }
        }

        if (this.opened === 'to') {
            this.datePick.to = date;
            if (this.datePick && this.datePick.from &&
                dateFns.compareAsc(date, this.datePick.from) < 1) {
                this.datePick.from = null;
                this.dateRangeChange.emit(null);
            } else {
                this.dateRangeChange.emit(Object.assign({}, this.datePick));
            }
        }

        /*let diffMonths = dateFns.differenceInCalendarMonths(date, this.moment);

        if (diffMonths !== 0) {
            this.moment = dateFns.addMonths(this.moment, diffMonths);
            this.generateCalendar();
        }*/
    }

    public prevMonth(): void {
        this.moment = dateFns.addMonths(this.moment, -1);
        this.generateCalendar();
    }

    public nextMonth(): void {
        this.moment = dateFns.addMonths(this.moment, 1);
        this.generateCalendar();
    }

    public isWithinRange( day: Date ): boolean {
        return this.datePick.from && this.datePick.to
            && dateFns.isWithinRange(day, this.datePick.from, this.datePick.to);
    }

    public isDateRangeFrom( day: Date ): boolean {
        return dateFns.isSameDay(day, this.datePick.from);
    }

    public isDateRangeTo( day: Date ): boolean {
        return dateFns.isSameDay(day, this.datePick.to);
    }

    @HostListener('document:click', ['$event'])
    private handleBlurClick( e: MouseEvent ) {
        let target = e.srcElement || e.target;
        if (!this.elementRef.nativeElement.contains(e.target)
            && !(<Element> target).classList.contains('yk-day-num')) {
            this.opened = false;
        }
    }
}
