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
        define("@angular/common/locales/ar-ER", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n === 0)
            return 0;
        if (n === 1)
            return 1;
        if (n === 2)
            return 2;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 3 && n % 100 <= 10)
            return 3;
        if (n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 99)
            return 4;
        return 5;
    }
    exports.default = [
        'ar-ER',
        [['ص', 'م'], u, u],
        [['ص', 'م'], u, ['صباحًا', 'مساءً']],
        [
            ['ح', 'ن', 'ث', 'ر', 'خ', 'ج', 'س'],
            ['الأحد', 'الاثنين', 'الثلاثاء', 'الأربعاء', 'الخميس', 'الجمعة', 'السبت'], u,
            ['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت']
        ],
        u,
        [
            ['ي', 'ف', 'م', 'أ', 'و', 'ن', 'ل', 'غ', 'س', 'ك', 'ب', 'د'],
            [
                'يناير', 'فبراير', 'مارس', 'أبريل', 'مايو', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر',
                'نوفمبر', 'ديسمبر'
            ],
            u
        ],
        u,
        [['ق.م', 'م'], u, ['قبل الميلاد', 'ميلادي']],
        1,
        [6, 0],
        ['d\u200f/M\u200f/y', 'dd\u200f/MM\u200f/y', 'd MMMM y', 'EEEE، d MMMM y'],
        ['h:mm a', 'h:mm:ss a', 'h:mm:ss a z', 'h:mm:ss a zzzz'],
        ['{1} {0}', u, u, u],
        ['.', ',', ';', '\u200e%\u200e', '\u200e+', '\u200e-', 'E', '×', '‰', '∞', 'ليس رقمًا', ':'],
        ['#,##0.###', '#,##0%', '¤ #,##0.00', '#E0'],
        'ERN',
        'Nfk',
        'ناكفا أريتري',
        {
            'AED': ['د.إ.\u200f'],
            'ARS': [u, 'AR$'],
            'AUD': ['AU$'],
            'BBD': [u, 'BB$'],
            'BHD': ['د.ب.\u200f'],
            'BMD': [u, 'BM$'],
            'BND': [u, 'BN$'],
            'BSD': [u, 'BS$'],
            'BZD': [u, 'BZ$'],
            'CAD': ['CA$'],
            'CLP': [u, 'CL$'],
            'CNY': ['CN¥'],
            'COP': [u, 'CO$'],
            'CUP': [u, 'CU$'],
            'DOP': [u, 'DO$'],
            'DZD': ['د.ج.\u200f'],
            'EGP': ['ج.م.\u200f', 'E£'],
            'ERN': ['Nfk'],
            'FJD': [u, 'FJ$'],
            'GBP': ['UK£'],
            'GYD': [u, 'GY$'],
            'HKD': ['HK$'],
            'IQD': ['د.ع.\u200f'],
            'IRR': ['ر.إ.'],
            'JMD': [u, 'JM$'],
            'JOD': ['د.أ.\u200f'],
            'JPY': ['JP¥'],
            'KWD': ['د.ك.\u200f'],
            'KYD': [u, 'KY$'],
            'LBP': ['ل.ل.\u200f', 'L£'],
            'LRD': [u, '$LR'],
            'LYD': ['د.ل.\u200f'],
            'MAD': ['د.م.\u200f'],
            'MRU': ['أ.م.'],
            'MXN': ['MX$'],
            'NZD': ['NZ$'],
            'OMR': ['ر.ع.\u200f'],
            'QAR': ['ر.ق.\u200f'],
            'SAR': ['ر.س.\u200f'],
            'SBD': [u, 'SB$'],
            'SDD': ['د.س.\u200f'],
            'SDG': ['ج.س.'],
            'SRD': [u, 'SR$'],
            'SYP': ['ل.س.\u200f', '£'],
            'THB': ['฿'],
            'TND': ['د.ت.\u200f'],
            'TTD': [u, 'TT$'],
            'TWD': ['NT$'],
            'USD': ['US$'],
            'UYU': [u, 'UY$'],
            'XXX': ['***'],
            'YER': ['ر.ي.\u200f']
        },
        'rtl',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXItRVIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9hci1FUi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRTtZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRixPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLE9BQU87UUFDUCxDQUFDLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEIsQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDcEM7WUFDRSxDQUFDLEdBQUcsRUFB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QUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztZQUNkLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDO1lBQzNCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7WUFDckIsS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFlBQVksQ0FBQztZQUNyQixLQUFLLEVBQUUsQ0FBQyxNQUFNLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLFlBQVksRUFBRSxHQUFHLENBQUM7WUFDMUIsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDO1lBQ1osS0FBSyxFQUFFLENBQUMsWUFBWSxDQUFDO1lBQ3JCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsS0FBSyxDQUFDO1lBQ2QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQyxZQUFZLENBQUM7U0FDdEI7UUFDRCxLQUFLO1FBQ0wsTUFBTTtLQUNQLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBpZiAobiA9PT0gMCkgcmV0dXJuIDA7XG4gIGlmIChuID09PSAxKSByZXR1cm4gMTtcbiAgaWYgKG4gPT09IDIpIHJldHVybiAyO1xuICBpZiAobiAlIDEwMCA9PT0gTWF0aC5mbG9vcihuICUgMTAwKSAmJiBuICUgMTAwID49IDMgJiYgbiAlIDEwMCA8PSAxMCkgcmV0dXJuIDM7XG4gIGlmIChuICUgMTAwID09PSBNYXRoLmZsb29yKG4gJSAxMDApICYmIG4gJSAxMDAgPj0gMTEgJiYgbiAlIDEwMCA8PSA5OSkgcmV0dXJuIDQ7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdhci1FUicsXG4gIFtbJ9i1JywgJ9mFJ10sIHUsIHVdLFxuICBbWyfYtScsICfZhSddLCB1LCBbJ9i12KjYp9it2YvYpycsICfZhdiz2KfYodmLJ11dLFxuICBbXG4gICAgWyfYrScsICfZhicsICfYqycsICfYsScsICfYricsICfYrCcsICfYsyddLFxuICAgIFsn2KfZhNij2K3YrycsICfYp9mE2KfYq9mG2YrZhicsICfYp9mE2KvZhNin2KvYp9ihJywgJ9in2YTYo9ix2KjYudin2KEnLCAn2KfZhNiu2YXZitizJywgJ9in2YTYrNmF2LnYqScsICfYp9mE2LPYqNiqJ10sIHUsXG4gICAgWyfYo9it2K8nLCAn2KXYq9mG2YrZhicsICfYq9mE2KfYq9in2KEnLCAn2KPYsdio2LnYp9ihJywgJ9iu2YXZitizJywgJ9is2YXYudipJywgJ9iz2KjYqiddXG4gIF0sXG4gIHUsXG4gIFtcbiAgICBbJ9mKJywgJ9mBJywgJ9mFJywgJ9ijJywgJ9mIJywgJ9mGJywgJ9mEJywgJ9i6JywgJ9izJywgJ9mDJywgJ9ioJywgJ9ivJ10sXG4gICAgW1xuICAgICAgJ9mK2YbYp9mK2LEnLCAn2YHYqNix2KfZitixJywgJ9mF2KfYsdizJywgJ9ij2KjYsdmK2YQnLCAn2YXYp9mK2YgnLCAn2YrZiNmG2YrZiCcsICfZitmI2YTZitmIJywgJ9ij2LrYs9i32LMnLCAn2LPYqNiq2YXYqNixJywgJ9ij2YPYqtmI2KjYsScsXG4gICAgICAn2YbZiNmB2YXYqNixJywgJ9iv2YrYs9mF2KjYsSdcbiAgICBdLFxuICAgIHVcbiAgXSxcbiAgdSxcbiAgW1sn2YIu2YUnLCAn2YUnXSwgdSwgWyfZgtio2YQg2KfZhNmF2YrZhNin2K8nLCAn2YXZitmE2KfYr9mKJ11dLFxuICAxLFxuICBbNiwgMF0sXG4gIFsnZFxcdTIwMGYvTVxcdTIwMGYveScsICdkZFxcdTIwMGYvTU1cXHUyMDBmL3knLCAnZCBNTU1NIHknLCAnRUVFRdiMIGQgTU1NTSB5J10sXG4gIFsnaDptbSBhJywgJ2g6bW06c3MgYScsICdoOm1tOnNzIGEgeicsICdoOm1tOnNzIGEgenp6eiddLFxuICBbJ3sxfSB7MH0nLCB1LCB1LCB1XSxcbiAgWycuJywgJywnLCAnOycsICdcXHUyMDBlJVxcdTIwMGUnLCAnXFx1MjAwZSsnLCAnXFx1MjAwZS0nLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ9mE2YrYs8Kg2LHZgtmF2YvYpycsICc6J10sXG4gIFsnIywjIzAuIyMjJywgJyMsIyMwJScsICfCpMKgIywjIzAuMDAnLCAnI0UwJ10sXG4gICdFUk4nLFxuICAnTmZrJyxcbiAgJ9mG2KfZg9mB2Kcg2KPYsdmK2KrYsdmKJyxcbiAge1xuICAgICdBRUQnOiBbJ9ivLtilLlxcdTIwMGYnXSxcbiAgICAnQVJTJzogW3UsICdBUiQnXSxcbiAgICAnQVVEJzogWydBVSQnXSxcbiAgICAnQkJEJzogW3UsICdCQiQnXSxcbiAgICAnQkhEJzogWyfYry7YqC5cXHUyMDBmJ10sXG4gICAgJ0JNRCc6IFt1LCAnQk0kJ10sXG4gICAgJ0JORCc6IFt1LCAnQk4kJ10sXG4gICAgJ0JTRCc6IFt1LCAnQlMkJ10sXG4gICAgJ0JaRCc6IFt1LCAnQlokJ10sXG4gICAgJ0NBRCc6IFsnQ0EkJ10sXG4gICAgJ0NMUCc6IFt1LCAnQ0wkJ10sXG4gICAgJ0NOWSc6IFsnQ07CpSddLFxuICAgICdDT1AnOiBbdSwgJ0NPJCddLFxuICAgICdDVVAnOiBbdSwgJ0NVJCddLFxuICAgICdET1AnOiBbdSwgJ0RPJCddLFxuICAgICdEWkQnOiBbJ9ivLtisLlxcdTIwMGYnXSxcbiAgICAnRUdQJzogWyfYrC7ZhS5cXHUyMDBmJywgJ0XCoyddLFxuICAgICdFUk4nOiBbJ05mayddLFxuICAgICdGSkQnOiBbdSwgJ0ZKJCddLFxuICAgICdHQlAnOiBbJ1VLwqMnXSxcbiAgICAnR1lEJzogW3UsICdHWSQnXSxcbiAgICAnSEtEJzogWydISyQnXSxcbiAgICAnSVFEJzogWyfYry7YuS5cXHUyMDBmJ10sXG4gICAgJ0lSUic6IFsn2LEu2KUuJ10sXG4gICAgJ0pNRCc6IFt1LCAnSk0kJ10sXG4gICAgJ0pPRCc6IFsn2K8u2KMuXFx1MjAwZiddLFxuICAgICdKUFknOiBbJ0pQwqUnXSxcbiAgICAnS1dEJzogWyfYry7Zgy5cXHUyMDBmJ10sXG4gICAgJ0tZRCc6IFt1LCAnS1kkJ10sXG4gICAgJ0xCUCc6IFsn2YQu2YQuXFx1MjAwZicsICdMwqMnXSxcbiAgICAnTFJEJzogW3UsICckTFInXSxcbiAgICAnTFlEJzogWyfYry7ZhC5cXHUyMDBmJ10sXG4gICAgJ01BRCc6IFsn2K8u2YUuXFx1MjAwZiddLFxuICAgICdNUlUnOiBbJ9ijLtmFLiddLFxuICAgICdNWE4nOiBbJ01YJCddLFxuICAgICdOWkQnOiBbJ05aJCddLFxuICAgICdPTVInOiBbJ9ixLti5LlxcdTIwMGYnXSxcbiAgICAnUUFSJzogWyfYsS7Zgi5cXHUyMDBmJ10sXG4gICAgJ1NBUic6IFsn2LEu2LMuXFx1MjAwZiddLFxuICAgICdTQkQnOiBbdSwgJ1NCJCddLFxuICAgICdTREQnOiBbJ9ivLtizLlxcdTIwMGYnXSxcbiAgICAnU0RHJzogWyfYrC7Ysy4nXSxcbiAgICAnU1JEJzogW3UsICdTUiQnXSxcbiAgICAnU1lQJzogWyfZhC7Ysy5cXHUyMDBmJywgJ8KjJ10sXG4gICAgJ1RIQic6IFsn4Li/J10sXG4gICAgJ1RORCc6IFsn2K8u2KouXFx1MjAwZiddLFxuICAgICdUVEQnOiBbdSwgJ1RUJCddLFxuICAgICdUV0QnOiBbJ05UJCddLFxuICAgICdVU0QnOiBbJ1VTJCddLFxuICAgICdVWVUnOiBbdSwgJ1VZJCddLFxuICAgICdYWFgnOiBbJyoqKiddLFxuICAgICdZRVInOiBbJ9ixLtmKLlxcdTIwMGYnXVxuICB9LFxuICAncnRsJyxcbiAgcGx1cmFsXG5dO1xuIl19