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
        define("@angular/common/locales/yi", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
        if (i === 1 && v === 0)
            return 1;
        return 5;
    }
    exports.default = [
        'yi',
        [['פֿאַרמיטאָג', 'נאָכמיטאָג'], u, u],
        u,
        [
            ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
            ['זונטיק', 'מאָנטיק', 'דינסטיק', 'מיטוואך', 'דאנערשטיק', 'פֿרײַטיק', 'שבת'], u, u
        ],
        u,
        [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            [
                'יאַנואַר', 'פֿעברואַר', 'מערץ', 'אַפּריל', 'מיי', 'יוני', 'יולי', 'אויגוסט', 'סעפּטעמבער',
                'אקטאבער', 'נאוועמבער', 'דעצעמבער'
            ],
            u
        ],
        [
            ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            ['יאַנ', 'פֿעב', 'מערץ', 'אַפּר', 'מיי', 'יוני', 'יולי', 'אויג', 'סעפּ', 'אקט', 'נאוו', 'דעצ'],
            [
                'יאַנואַר', 'פֿעברואַר', 'מערץ', 'אַפּריל', 'מיי', 'יוני', 'יולי', 'אויגוסט', 'סעפּטעמבער',
                'אקטאבער', 'נאוועמבער', 'דעצעמבער'
            ]
        ],
        [['BCE', 'CE'], u, u],
        1,
        [6, 0],
        ['dd/MM/yy', 'dטן MMM y', 'dטן MMMM y', 'EEEE, dטן MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', '{1}, {0}', '{1} {0}', u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'],
        u,
        u,
        u,
        { 'JPY': ['JP¥', '¥'], 'USD': ['US$', '$'] },
        'rtl',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoieWkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy95aS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLElBQUk7UUFDSixDQUFDLENBQUMsYUFBYSxFQUFFLFlBQVksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDckMsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDbkMsQ0FBQyxRQUFRLEVBQUUsU0FBUyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztTQUNsRjtRQUNELENBQUM7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7WUFDL0Q7Z0JBQ0UsVUFBVSxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLFNBQVMsRUFBRSxZQUFZO2dCQUMxRixTQUFTLEVBQUUsV0FBVyxFQUFFLFVBQVU7YUFDbkM7WUFDRCxDQUFDO1NBQ0Y7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7WUFDL0QsQ0FBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLEtBQUssQ0FBQztZQUM5RjtnQkFDRSxVQUFVLEVBQUUsV0FBVyxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsU0FBUyxFQUFFLFlBQVk7Z0JBQzFGLFNBQVMsRUFBRSxXQUFXLEVBQUUsVUFBVTthQUNuQztTQUNGO1FBQ0QsQ0FBQyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JCLENBQUM7UUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDTixDQUFDLFVBQVUsRUFBRSxXQUFXLEVBQUUsWUFBWSxFQUFFLGtCQUFrQixDQUFDO1FBQzNELENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1FBQ3BELENBQUMsU0FBUyxFQUFFLFVBQVUsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1FBQ3JDLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDNUMsQ0FBQztRQUNELENBQUM7UUFDRCxDQUFDO1FBQ0QsRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBQzFDLEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGg7XG4gIGlmIChpID09PSAxICYmIHYgPT09IDApIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAneWknLFxuICBbWyfXpNa/15DWt9eo157XmdeY15DWuNeSJywgJ9eg15DWuNeb157XmdeY15DWuNeSJ10sIHUsIHVdLFxuICB1LFxuICBbXG4gICAgWydTJywgJ00nLCAnVCcsICdXJywgJ1QnLCAnRicsICdTJ10sXG4gICAgWyfXlteV16DXmNeZ16cnLCAn157XkNa416DXmNeZ16cnLCAn15PXmdeg16HXmNeZ16cnLCAn157XmdeY15XXldeQ15onLCAn15PXkNeg16LXqNep15jXmdenJywgJ9ek1r/XqNey1rfXmNeZ16cnLCAn16nXkdeqJ10sIHUsIHVcbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXSxcbiAgICBbXG4gICAgICAn15nXkNa316DXldeQ1rfXqCcsICfXpNa/16LXkdeo15XXkNa316gnLCAn157Xoteo16UnLCAn15DWt9ek1rzXqNeZ15wnLCAn157XmdeZJywgJ9eZ15XXoNeZJywgJ9eZ15XXnNeZJywgJ9eQ15XXmdeS15XXodeYJywgJ9eh16LXpNa815jXotee15HXoteoJyxcbiAgICAgICfXkNen15jXkNeR16LXqCcsICfXoNeQ15XXldei157Xkdei16gnLCAn15PXotem16LXnteR16LXqCdcbiAgICBdLFxuICAgIHVcbiAgXSxcbiAgW1xuICAgIFsnMScsICcyJywgJzMnLCAnNCcsICc1JywgJzYnLCAnNycsICc4JywgJzknLCAnMTAnLCAnMTEnLCAnMTInXSxcbiAgICBbJ9eZ15DWt9egJywgJ9ek1r/XoteRJywgJ9ee16LXqNelJywgJ9eQ1rfXpNa816gnLCAn157XmdeZJywgJ9eZ15XXoNeZJywgJ9eZ15XXnNeZJywgJ9eQ15XXmdeSJywgJ9eh16LXpNa8JywgJ9eQ16fXmCcsICfXoNeQ15XXlScsICfXk9ei16YnXSxcbiAgICBbXG4gICAgICAn15nXkNa316DXldeQ1rfXqCcsICfXpNa/16LXkdeo15XXkNa316gnLCAn157Xoteo16UnLCAn15DWt9ek1rzXqNeZ15wnLCAn157XmdeZJywgJ9eZ15XXoNeZJywgJ9eZ15XXnNeZJywgJ9eQ15XXmdeS15XXodeYJywgJ9eh16LXpNa815jXotee15HXoteoJyxcbiAgICAgICfXkNen15jXkNeR16LXqCcsICfXoNeQ15XXldei157Xkdei16gnLCAn15PXotem16LXnteR16LXqCdcbiAgICBdXG4gIF0sXG4gIFtbJ0JDRScsICdDRSddLCB1LCB1XSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ2RkL01NL3l5JywgJ2TXmNefIE1NTSB5JywgJ2TXmNefIE1NTU0geScsICdFRUVFLCBk15jXnyBNTU1NIHknXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzIHp6enonXSxcbiAgWyd7MX0gezB9JywgJ3sxfSwgezB9JywgJ3sxfSB7MH0nLCB1XSxcbiAgWycuJywgJywnLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzAlJywgJ8KkwqAjLCMjMC4wMCcsICcjRTAnXSxcbiAgdSxcbiAgdSxcbiAgdSxcbiAgeydKUFknOiBbJ0pQwqUnLCAnwqUnXSwgJ1VTRCc6IFsnVVMkJywgJyQnXX0sXG4gICdydGwnLFxuICBwbHVyYWxcbl07XG4iXX0=