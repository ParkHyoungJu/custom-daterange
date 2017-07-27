"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var date_range_picker_component_1 = require("./date-range-picker.component");
var DateRangePickerModule = (function () {
    function DateRangePickerModule() {
    }
    return DateRangePickerModule;
}());
DateRangePickerModule.decorators = [
    { type: core_1.NgModule, args: [{
                imports: [
                    common_1.CommonModule
                ],
                exports: [
                    date_range_picker_component_1.DateRangePickerComponent
                ],
                declarations: [
                    date_range_picker_component_1.DateRangePickerComponent
                ],
                providers: [],
            },] },
];
DateRangePickerModule.ctorParameters = function () { return []; };
exports.DateRangePickerModule = DateRangePickerModule;
//# sourceMappingURL=date-range-picker.module.js.map