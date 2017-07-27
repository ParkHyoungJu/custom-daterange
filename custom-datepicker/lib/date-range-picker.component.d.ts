import { ElementRef, OnInit } from '@angular/core';
export interface IDateRange {
    from: Date;
    to: Date;
}
export declare class DateRangePickerComponent implements OnInit {
    private elementRef;
    opened: false | 'from' | 'to';
    datePick: IDateRange;
    range: 'tm' | 'lm' | 'lw' | 'tw' | 'ty' | 'ly';
    moment: Date;
    dayNames: string[];
    dates: Date[];
    themeColor: 'green' | 'teal' | 'grape' | 'red' | 'gray';
    private dateRange;
    private dateRangeChange;
    constructor(elementRef: ElementRef);
    ngOnInit(): void;
    toggleCalendar(selection: false | 'from' | 'to'): void;
    selectRange(range: 'tm' | 'lm' | 'lw' | 'tw' | 'ty' | 'ly'): void;
    generateCalendar(): void;
    selectDate(date: Date): void;
    prevMonth(): void;
    nextMonth(): void;
    isWithinRange(day: Date): boolean;
    isDateRangeFrom(day: Date): boolean;
    isDateRangeTo(day: Date): boolean;
    private handleBlurClick(e);
}
