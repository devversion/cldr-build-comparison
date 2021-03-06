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
        define("@angular/common/locales/ga-GB", ["require", "exports"], factory);
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
        if (n === 2)
            return 2;
        if (n === Math.floor(n) && n >= 3 && n <= 6)
            return 3;
        if (n === Math.floor(n) && n >= 7 && n <= 10)
            return 4;
        return 5;
    }
    exports.default = [
        'ga-GB',
        [['r.n.', 'i.n.'], u, u],
        u,
        [
            ['D', 'L', 'M', 'C', 'D', 'A', 'S'], ['Domh', 'Luan', 'Máirt', 'Céad', 'Déar', 'Aoine', 'Sath'],
            [
                'Dé Domhnaigh', 'Dé Luain', 'Dé Máirt', 'Dé Céadaoin', 'Déardaoin', 'Dé hAoine', 'Dé Sathairn'
            ],
            ['Do', 'Lu', 'Má', 'Cé', 'Dé', 'Ao', 'Sa']
        ],
        u,
        [
            ['E', 'F', 'M', 'A', 'B', 'M', 'I', 'L', 'M', 'D', 'S', 'N'],
            [
                'Ean', 'Feabh', 'Márta', 'Aib', 'Beal', 'Meith', 'Iúil', 'Lún', 'MFómh', 'DFómh', 'Samh',
                'Noll'
            ],
            [
                'Eanáir', 'Feabhra', 'Márta', 'Aibreán', 'Bealtaine', 'Meitheamh', 'Iúil', 'Lúnasa',
                'Meán Fómhair', 'Deireadh Fómhair', 'Samhain', 'Nollaig'
            ]
        ],
        u,
        [['RC', 'AD'], u, ['Roimh Chríost', 'Anno Domini']],
        1,
        [6, 0],
        ['dd/MM/y', 'd MMM y', 'd MMMM y', 'EEEE d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', u, u, u],
        ['.', ',', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0%', '¤#,##0.00', '#E0'],
        'GBP',
        '£',
        'Punt Steirling',
        { 'THB': ['฿'], 'TWD': ['NT$'], 'XXX': [] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2EtR0IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9nYS1HQi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN0RCxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUN2RCxPQUFPLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxrQkFBZTtRQUNiLE9BQU87UUFDUCxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEIsQ0FBQztRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sQ0FBQztZQUMvRjtnQkFDRSxjQUFjLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxhQUFhO2FBQy9GO1lBQ0QsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7U0FDM0M7UUFDRCxDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVEO2dCQUNFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNO2dCQUN4RixNQUFNO2FBQ1A7WUFDRDtnQkFDRSxRQUFRLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFdBQVcsRUFBRSxNQUFNLEVBQUUsUUFBUTtnQkFDbkYsY0FBYyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxTQUFTO2FBQ3pEO1NBQ0Y7UUFDRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxlQUFlLEVBQUUsYUFBYSxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNOLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxVQUFVLEVBQUUsZUFBZSxDQUFDO1FBQ25ELENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1FBQ3BELENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDOUQsQ0FBQyxXQUFXLEVBQUUsUUFBUSxFQUFFLFdBQVcsRUFBRSxLQUFLLENBQUM7UUFDM0MsS0FBSztRQUNMLEdBQUc7UUFDSCxnQkFBZ0I7UUFDaEIsRUFBQyxLQUFLLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRSxFQUFDO1FBQ3pDLEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChuID09PSAxKSByZXR1cm4gMTtcbiAgaWYgKG4gPT09IDIpIHJldHVybiAyO1xuICBpZiAobiA9PT0gTWF0aC5mbG9vcihuKSAmJiBuID49IDMgJiYgbiA8PSA2KSByZXR1cm4gMztcbiAgaWYgKG4gPT09IE1hdGguZmxvb3IobikgJiYgbiA+PSA3ICYmIG4gPD0gMTApIHJldHVybiA0O1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnZ2EtR0InLFxuICBbWydyLm4uJywgJ2kubi4nXSwgdSwgdV0sXG4gIHUsXG4gIFtcbiAgICBbJ0QnLCAnTCcsICdNJywgJ0MnLCAnRCcsICdBJywgJ1MnXSwgWydEb21oJywgJ0x1YW4nLCAnTcOhaXJ0JywgJ0PDqWFkJywgJ0TDqWFyJywgJ0FvaW5lJywgJ1NhdGgnXSxcbiAgICBbXG4gICAgICAnRMOpIERvbWhuYWlnaCcsICdEw6kgTHVhaW4nLCAnRMOpIE3DoWlydCcsICdEw6kgQ8OpYWRhb2luJywgJ0TDqWFyZGFvaW4nLCAnRMOpIGhBb2luZScsICdEw6kgU2F0aGFpcm4nXG4gICAgXSxcbiAgICBbJ0RvJywgJ0x1JywgJ03DoScsICdDw6knLCAnRMOpJywgJ0FvJywgJ1NhJ11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsnRScsICdGJywgJ00nLCAnQScsICdCJywgJ00nLCAnSScsICdMJywgJ00nLCAnRCcsICdTJywgJ04nXSxcbiAgICBbXG4gICAgICAnRWFuJywgJ0ZlYWJoJywgJ03DoXJ0YScsICdBaWInLCAnQmVhbCcsICdNZWl0aCcsICdJw7ppbCcsICdMw7puJywgJ01Gw7NtaCcsICdERsOzbWgnLCAnU2FtaCcsXG4gICAgICAnTm9sbCdcbiAgICBdLFxuICAgIFtcbiAgICAgICdFYW7DoWlyJywgJ0ZlYWJocmEnLCAnTcOhcnRhJywgJ0FpYnJlw6FuJywgJ0JlYWx0YWluZScsICdNZWl0aGVhbWgnLCAnScO6aWwnLCAnTMO6bmFzYScsXG4gICAgICAnTWXDoW4gRsOzbWhhaXInLCAnRGVpcmVhZGggRsOzbWhhaXInLCAnU2FtaGFpbicsICdOb2xsYWlnJ1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1snUkMnLCAnQUQnXSwgdSwgWydSb2ltaCBDaHLDrW9zdCcsICdBbm5vIERvbWluaSddXSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ2RkL01NL3knLCAnZCBNTU0geScsICdkIE1NTU0geScsICdFRUVFIGQgTU1NTSB5J10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcyB6enp6J10sXG4gIFsnezF9IHswfScsIHUsIHUsIHVdLFxuICBbJy4nLCAnLCcsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnwqQjLCMjMC4wMCcsICcjRTAnXSxcbiAgJ0dCUCcsXG4gICfCoycsXG4gICdQdW50IFN0ZWlybGluZycsXG4gIHsnVEhCJzogWyfguL8nXSwgJ1RXRCc6IFsnTlQkJ10sICdYWFgnOiBbXX0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=