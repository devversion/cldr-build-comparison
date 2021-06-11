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
        define("@angular/common/locales/ca-AD", ["require", "exports"], factory);
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
        'ca-AD',
        [['a. m.', 'p. m.'], u, u],
        u,
        [
            ['dg', 'dl', 'dt', 'dc', 'dj', 'dv', 'ds'], ['dg.', 'dl.', 'dt.', 'dc.', 'dj.', 'dv.', 'ds.'],
            ['diumenge', 'dilluns', 'dimarts', 'dimecres', 'dijous', 'divendres', 'dissabte'],
            ['dg.', 'dl.', 'dt.', 'dc.', 'dj.', 'dv.', 'ds.']
        ],
        u,
        [
            ['GN', 'FB', 'MÇ', 'AB', 'MG', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DS'],
            [
                'de gen.', 'de febr.', 'de març', 'd’abr.', 'de maig', 'de juny', 'de jul.', 'd’ag.',
                'de set.', 'd’oct.', 'de nov.', 'de des.'
            ],
            [
                'de gener', 'de febrer', 'de març', 'd’abril', 'de maig', 'de juny', 'de juliol', 'd’agost',
                'de setembre', 'd’octubre', 'de novembre', 'de desembre'
            ]
        ],
        [
            ['GN', 'FB', 'MÇ', 'AB', 'MG', 'JN', 'JL', 'AG', 'ST', 'OC', 'NV', 'DS'],
            [
                'gen.', 'febr.', 'març', 'abr.', 'maig', 'juny', 'jul.', 'ag.', 'set.', 'oct.', 'nov.', 'des.'
            ],
            [
                'gener', 'febrer', 'març', 'abril', 'maig', 'juny', 'juliol', 'agost', 'setembre', 'octubre',
                'novembre', 'desembre'
            ]
        ],
        [['aC', 'dC'], u, ['abans de Crist', 'després de Crist']],
        1,
        [6, 0],
        ['d/M/yy', 'd MMM y', 'd MMMM \'de\' y', 'EEEE, d MMMM \'de\' y'],
        ['H:mm', 'H:mm:ss', 'H:mm:ss z', 'H:mm:ss zzzz'],
        ['{1} {0}', '{1}, {0}', '{1} \'a\' \'les\' {0}', u],
        [',', '.', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'euro',
        {
            'AUD': ['AU$', '$'],
            'BRL': [u, 'R$'],
            'CAD': [u, '$'],
            'CNY': [u, '¥'],
            'ESP': ['₧'],
            'MXN': [u, '$'],
            'THB': ['฿'],
            'USD': [u, '$'],
            'VEF': [u, 'Bs F'],
            'XCD': [u, '$'],
            'XXX': []
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2EtQUQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9jYS1BRC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNsRixJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNqQyxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLE9BQU87UUFDUCxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDMUIsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUM3RixDQUFDLFVBQVUsRUFBRSxTQUFTLEVBQUUsU0FBUyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQztZQUNqRixDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUs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Q29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgR29vZ2xlIExMQyBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IGFuIE1JVC1zdHlsZSBsaWNlbnNlIHRoYXQgY2FuIGJlXG4gKiBmb3VuZCBpbiB0aGUgTElDRU5TRSBmaWxlIGF0IGh0dHBzOi8vYW5ndWxhci5pby9saWNlbnNlXG4gKi9cblxuLy8gVEhJUyBDT0RFIElTIEdFTkVSQVRFRCAtIERPIE5PVCBNT0RJRllcbi8vIFNlZSBhbmd1bGFyL3Rvb2xzL2d1bHAtdGFza3MvY2xkci9leHRyYWN0LmpzXG5cbmNvbnN0IHUgPSB1bmRlZmluZWQ7XG5cbmZ1bmN0aW9uIHBsdXJhbChuOiBudW1iZXIpOiBudW1iZXIge1xuICBsZXQgaSA9IE1hdGguZmxvb3IoTWF0aC5hYnMobikpLCB2ID0gbi50b1N0cmluZygpLnJlcGxhY2UoL15bXi5dKlxcLj8vLCAnJykubGVuZ3RoO1xuICBpZiAoaSA9PT0gMSAmJiB2ID09PSAwKSByZXR1cm4gMTtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2NhLUFEJyxcbiAgW1snYS7CoG0uJywgJ3AuwqBtLiddLCB1LCB1XSxcbiAgdSxcbiAgW1xuICAgIFsnZGcnLCAnZGwnLCAnZHQnLCAnZGMnLCAnZGonLCAnZHYnLCAnZHMnXSwgWydkZy4nLCAnZGwuJywgJ2R0LicsICdkYy4nLCAnZGouJywgJ2R2LicsICdkcy4nXSxcbiAgICBbJ2RpdW1lbmdlJywgJ2RpbGx1bnMnLCAnZGltYXJ0cycsICdkaW1lY3JlcycsICdkaWpvdXMnLCAnZGl2ZW5kcmVzJywgJ2Rpc3NhYnRlJ10sXG4gICAgWydkZy4nLCAnZGwuJywgJ2R0LicsICdkYy4nLCAnZGouJywgJ2R2LicsICdkcy4nXVxuICBdLFxuICB1LFxuICBbXG4gICAgWydHTicsICdGQicsICdNw4cnLCAnQUInLCAnTUcnLCAnSk4nLCAnSkwnLCAnQUcnLCAnU1QnLCAnT0MnLCAnTlYnLCAnRFMnXSxcbiAgICBbXG4gICAgICAnZGUgZ2VuLicsICdkZSBmZWJyLicsICdkZSBtYXLDpycsICdk4oCZYWJyLicsICdkZSBtYWlnJywgJ2RlIGp1bnknLCAnZGUganVsLicsICdk4oCZYWcuJyxcbiAgICAgICdkZSBzZXQuJywgJ2TigJlvY3QuJywgJ2RlIG5vdi4nLCAnZGUgZGVzLidcbiAgICBdLFxuICAgIFtcbiAgICAgICdkZSBnZW5lcicsICdkZSBmZWJyZXInLCAnZGUgbWFyw6cnLCAnZOKAmWFicmlsJywgJ2RlIG1haWcnLCAnZGUganVueScsICdkZSBqdWxpb2wnLCAnZOKAmWFnb3N0JyxcbiAgICAgICdkZSBzZXRlbWJyZScsICdk4oCZb2N0dWJyZScsICdkZSBub3ZlbWJyZScsICdkZSBkZXNlbWJyZSdcbiAgICBdXG4gIF0sXG4gIFtcbiAgICBbJ0dOJywgJ0ZCJywgJ03DhycsICdBQicsICdNRycsICdKTicsICdKTCcsICdBRycsICdTVCcsICdPQycsICdOVicsICdEUyddLFxuICAgIFtcbiAgICAgICdnZW4uJywgJ2ZlYnIuJywgJ21hcsOnJywgJ2Fici4nLCAnbWFpZycsICdqdW55JywgJ2p1bC4nLCAnYWcuJywgJ3NldC4nLCAnb2N0LicsICdub3YuJywgJ2Rlcy4nXG4gICAgXSxcbiAgICBbXG4gICAgICAnZ2VuZXInLCAnZmVicmVyJywgJ21hcsOnJywgJ2FicmlsJywgJ21haWcnLCAnanVueScsICdqdWxpb2wnLCAnYWdvc3QnLCAnc2V0ZW1icmUnLCAnb2N0dWJyZScsXG4gICAgICAnbm92ZW1icmUnLCAnZGVzZW1icmUnXG4gICAgXVxuICBdLFxuICBbWydhQycsICdkQyddLCB1LCBbJ2FiYW5zIGRlIENyaXN0JywgJ2Rlc3Byw6lzIGRlIENyaXN0J11dLFxuICAxLFxuICBbNiwgMF0sXG4gIFsnZC9NL3l5JywgJ2QgTU1NIHknLCAnZCBNTU1NIFxcJ2RlXFwnIHknLCAnRUVFRSwgZCBNTU1NIFxcJ2RlXFwnIHknXSxcbiAgWydIOm1tJywgJ0g6bW06c3MnLCAnSDptbTpzcyB6JywgJ0g6bW06c3Mgenp6eiddLFxuICBbJ3sxfSB7MH0nLCAnezF9LCB7MH0nLCAnezF9IFxcJ2FcXCcgXFwnbGVzXFwnIHswfScsIHVdLFxuICBbJywnLCAnLicsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLFxuICAnRVVSJyxcbiAgJ+KCrCcsXG4gICdldXJvJyxcbiAge1xuICAgICdBVUQnOiBbJ0FVJCcsICckJ10sXG4gICAgJ0JSTCc6IFt1LCAnUiQnXSxcbiAgICAnQ0FEJzogW3UsICckJ10sXG4gICAgJ0NOWSc6IFt1LCAnwqUnXSxcbiAgICAnRVNQJzogWyfigqcnXSxcbiAgICAnTVhOJzogW3UsICckJ10sXG4gICAgJ1RIQic6IFsn4Li/J10sXG4gICAgJ1VTRCc6IFt1LCAnJCddLFxuICAgICdWRUYnOiBbdSwgJ0JzIEYnXSxcbiAgICAnWENEJzogW3UsICckJ10sXG4gICAgJ1hYWCc6IFtdXG4gIH0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=