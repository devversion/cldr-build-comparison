/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define("@angular/common/locales/mt", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n === 1)
            return 1;
        if (n === 0 || n % 100 === Math.floor(n % 100) && n % 100 >= 2 && n % 100 <= 10)
            return 3;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 19)
            return 4;
        return 5;
    }
    exports.default = [
        'mt',
        [['am', 'pm'], ['AM', 'PM'], u],
        u,
        [
            ['Ħd', 'T', 'Tl', 'Er', 'Ħm', 'Ġm', 'Sb'], ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib'],
            ['Il-Ħadd', 'It-Tnejn', 'It-Tlieta', 'L-Erbgħa', 'Il-Ħamis', 'Il-Ġimgħa', 'Is-Sibt'],
            ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib']
        ],
        [
            ['Ħd', 'Tn', 'Tl', 'Er', 'Ħm', 'Ġm', 'Sb'], ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib'],
            ['Il-Ħadd', 'It-Tnejn', 'It-Tlieta', 'L-Erbgħa', 'Il-Ħamis', 'Il-Ġimgħa', 'Is-Sibt'],
            ['Ħad', 'Tne', 'Tli', 'Erb', 'Ħam', 'Ġim', 'Sib']
        ],
        [
            ['J', 'F', 'M', 'A', 'M', 'Ġ', 'L', 'A', 'S', 'O', 'N', 'D'],
            ['Jan', 'Fra', 'Mar', 'Apr', 'Mej', 'Ġun', 'Lul', 'Aww', 'Set', 'Ott', 'Nov', 'Diċ'],
            [
                'Jannar', 'Frar', 'Marzu', 'April', 'Mejju', 'Ġunju', 'Lulju', 'Awwissu', 'Settembru',
                'Ottubru', 'Novembru', 'Diċembru'
            ]
        ],
        [
            ['Jn', 'Fr', 'Mz', 'Ap', 'Mj', 'Ġn', 'Lj', 'Aw', 'St', 'Ob', 'Nv', 'Dċ'],
            ['Jan', 'Fra', 'Mar', 'Apr', 'Mej', 'Ġun', 'Lul', 'Aww', 'Set', 'Ott', 'Nov', 'Diċ'],
            [
                'Jannar', 'Frar', 'Marzu', 'April', 'Mejju', 'Ġunju', 'Lulju', 'Awwissu', 'Settembru',
                'Ottubru', 'Novembru', 'Diċembru'
            ]
        ],
        [['QK', 'WK'], u, ['Qabel Kristu', 'Wara Kristu']],
        0,
        [6, 0],
        ['dd/MM/y', 'dd MMM y', 'd \'ta\'’ MMMM y', 'EEEE, d \'ta\'’ MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', u, u, u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'],
        'EUR',
        '€',
        'ewro',
        { 'JPY': ['JP¥', '¥'], 'USD': ['US$', '$'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9tdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQzFGLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMvQixDQUFDO1FBQ0Q7WUFDRSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVB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LEdBQUc7UUFDSCxNQUFNO1FBQ04sRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBQzFDLEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChuID09PSAxKSByZXR1cm4gMTtcbiAgaWYgKG4gPT09IDAgfHwgbiAlIDEwMCA9PT0gTWF0aC5mbG9vcihuICUgMTAwKSAmJiBuICUgMTAwID49IDIgJiYgbiAlIDEwMCA8PSAxMCkgcmV0dXJuIDM7XG4gIGlmIChuICUgMTAwID09PSBNYXRoLmZsb29yKG4gJSAxMDApICYmIG4gJSAxMDAgPj0gMTEgJiYgbiAlIDEwMCA8PSAxOSkgcmV0dXJuIDQ7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdtdCcsXG4gIFtbJ2FtJywgJ3BtJ10sIFsnQU0nLCAnUE0nXSwgdV0sXG4gIHUsXG4gIFtcbiAgICBbJ8SmZCcsICdUJywgJ1RsJywgJ0VyJywgJ8SmbScsICfEoG0nLCAnU2InXSwgWyfEpmFkJywgJ1RuZScsICdUbGknLCAnRXJiJywgJ8SmYW0nLCAnxKBpbScsICdTaWInXSxcbiAgICBbJ0lsLcSmYWRkJywgJ0l0LVRuZWpuJywgJ0l0LVRsaWV0YScsICdMLUVyYmfEp2EnLCAnSWwtxKZhbWlzJywgJ0lsLcSgaW1nxKdhJywgJ0lzLVNpYnQnXSxcbiAgICBbJ8SmYWQnLCAnVG5lJywgJ1RsaScsICdFcmInLCAnxKZhbScsICfEoGltJywgJ1NpYiddXG4gIF0sXG4gIFtcbiAgICBbJ8SmZCcsICdUbicsICdUbCcsICdFcicsICfEpm0nLCAnxKBtJywgJ1NiJ10sIFsnxKZhZCcsICdUbmUnLCAnVGxpJywgJ0VyYicsICfEpmFtJywgJ8SgaW0nLCAnU2liJ10sXG4gICAgWydJbC3EpmFkZCcsICdJdC1UbmVqbicsICdJdC1UbGlldGEnLCAnTC1FcmJnxKdhJywgJ0lsLcSmYW1pcycsICdJbC3EoGltZ8SnYScsICdJcy1TaWJ0J10sXG4gICAgWyfEpmFkJywgJ1RuZScsICdUbGknLCAnRXJiJywgJ8SmYW0nLCAnxKBpbScsICdTaWInXVxuICBdLFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnxKAnLCAnTCcsICdBJywgJ1MnLCAnTycsICdOJywgJ0QnXSxcbiAgICBbJ0phbicsICdGcmEnLCAnTWFyJywgJ0FwcicsICdNZWonLCAnxKB1bicsICdMdWwnLCAnQXd3JywgJ1NldCcsICdPdHQnLCAnTm92JywgJ0RpxIsnXSxcbiAgICBbXG4gICAgICAnSmFubmFyJywgJ0ZyYXInLCAnTWFyenUnLCAnQXByaWwnLCAnTWVqanUnLCAnxKB1bmp1JywgJ0x1bGp1JywgJ0F3d2lzc3UnLCAnU2V0dGVtYnJ1JyxcbiAgICAgICdPdHR1YnJ1JywgJ05vdmVtYnJ1JywgJ0RpxItlbWJydSdcbiAgICBdXG4gIF0sXG4gIFtcbiAgICBbJ0puJywgJ0ZyJywgJ016JywgJ0FwJywgJ01qJywgJ8SgbicsICdMaicsICdBdycsICdTdCcsICdPYicsICdOdicsICdExIsnXSxcbiAgICBbJ0phbicsICdGcmEnLCAnTWFyJywgJ0FwcicsICdNZWonLCAnxKB1bicsICdMdWwnLCAnQXd3JywgJ1NldCcsICdPdHQnLCAnTm92JywgJ0RpxIsnXSxcbiAgICBbXG4gICAgICAnSmFubmFyJywgJ0ZyYXInLCAnTWFyenUnLCAnQXByaWwnLCAnTWVqanUnLCAnxKB1bmp1JywgJ0x1bGp1JywgJ0F3d2lzc3UnLCAnU2V0dGVtYnJ1JyxcbiAgICAgICdPdHR1YnJ1JywgJ05vdmVtYnJ1JywgJ0RpxItlbWJydSdcbiAgICBdXG4gIF0sXG4gIFtbJ1FLJywgJ1dLJ10sIHUsIFsnUWFiZWwgS3Jpc3R1JywgJ1dhcmEgS3Jpc3R1J11dLFxuICAwLFxuICBbNiwgMF0sXG4gIFsnZGQvTU0veScsICdkZCBNTU0geScsICdkIFxcJ3RhXFwn4oCZIE1NTU0geScsICdFRUVFLCBkIFxcJ3RhXFwn4oCZIE1NTU0geSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLFxuICBbJ3sxfSB7MH0nLCB1LCB1LCB1XSxcbiAgWycuJywgJywnLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzAlJywgJ8KkIywjIzAuMDAnLCAnI0UwJ10sXG4gICdFVVInLFxuICAn4oKsJyxcbiAgJ2V3cm8nLFxuICB7J0pQWSc6IFsnSlDCpScsICfCpSddLCAnVVNEJzogWydVUyQnLCAnJCddfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==