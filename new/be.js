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
        define("@angular/common/locales/be", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n % 10 === 1 && !(n % 100 === 11))
            return 1;
        if (n % 10 === Math.floor(n % 10) && n % 10 >= 2 && n % 10 <= 4 &&
            !(n % 100 >= 12 && n % 100 <= 14))
            return 3;
        if (n % 10 === 0 || n % 10 === Math.floor(n % 10) && n % 10 >= 5 && n % 10 <= 9 ||
            n % 100 === Math.floor(n % 100) && n % 100 >= 11 && n % 100 <= 14)
            return 4;
        return 5;
    }
    exports.default = [
        'be',
        [['am', 'pm'], ['AM', 'PM'], u],
        [['AM', 'PM'], u, u],
        [
            ['н', 'п', 'а', 'с', 'ч', 'п', 'с'], ['нд', 'пн', 'аў', 'ср', 'чц', 'пт', 'сб'],
            ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацвер', 'пятніца', 'субота'],
            ['нд', 'пн', 'аў', 'ср', 'чц', 'пт', 'сб']
        ],
        u,
        [
            ['с', 'л', 'с', 'к', 'м', 'ч', 'л', 'ж', 'в', 'к', 'л', 'с'],
            ['сту', 'лют', 'сак', 'кра', 'мая', 'чэр', 'ліп', 'жні', 'вер', 'кас', 'ліс', 'сне'],
            [
                'студзеня', 'лютага', 'сакавіка', 'красавіка', 'мая', 'чэрвеня', 'ліпеня', 'жніўня',
                'верасня', 'кастрычніка', 'лістапада', 'снежня'
            ]
        ],
        [
            ['с', 'л', 'с', 'к', 'м', 'ч', 'л', 'ж', 'в', 'к', 'л', 'с'],
            ['сту', 'лют', 'сак', 'кра', 'май', 'чэр', 'ліп', 'жні', 'вер', 'кас', 'ліс', 'сне'],
            [
                'студзень', 'люты', 'сакавік', 'красавік', 'май', 'чэрвень', 'ліпень', 'жнівень', 'верасень',
                'кастрычнік', 'лістапад', 'снежань'
            ]
        ],
        [['да н.э.', 'н.э.'], u, ['да нараджэння Хрыстова', 'ад нараджэння Хрыстова']],
        1,
        [6, 0],
        ['d.MM.yy', 'd.MM.y', 'd MMMM y \'г\'.', 'EEEE, d MMMM y \'г\'.'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss, zzzz'],
        ['{1}, {0}', u, '{1} \'у\' {0}', u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'BYN',
        'Br',
        'беларускі рубель',
        {
            'AUD': ['A$'],
            'BBD': [u, 'Bds$'],
            'BMD': [u, 'BD$'],
            'BRL': [u, 'R$'],
            'BSD': [u, 'B$'],
            'BYN': ['Br'],
            'BZD': [u, 'BZ$'],
            'CAD': [u, 'CA$'],
            'CUC': [u, 'CUC$'],
            'CUP': [u, '$MN'],
            'DOP': [u, 'RD$'],
            'FJD': [u, 'FJ$'],
            'FKP': [u, 'FK£'],
            'GYD': [u, 'G$'],
            'ISK': [u, 'Íkr'],
            'JMD': [u, 'J$'],
            'KYD': [u, 'CI$'],
            'LRD': [u, 'L$'],
            'MXN': ['MX$'],
            'NAD': [u, 'N$'],
            'NZD': [u, 'NZ$'],
            'RUB': ['₽', 'руб.'],
            'SBD': [u, 'SI$'],
            'SGD': [u, 'S$'],
            'TTD': [u, 'TT$'],
            'UYU': [u, '$U'],
            'XCD': ['EC$']
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9iZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1lBQzNELENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztZQUNuQyxPQUFPLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUM7WUFDM0UsQ0FBQyxHQUFHLEdBQUcsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUU7WUFDbkUsT0FBTyxDQUFDLENBQUM7UUFDWCxPQUFPLENBQUMsQ0FBQztJQUNYLENB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TCxJQUFJO1FBQ0osa0JBQWtCO1FBQ2xCO1lBQ0UsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQ2IsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztZQUNsQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDYixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQztZQUNsQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQztZQUNoQixLQUFLLEVBQUUsQ0FBQyxLQUFLLENBQUM7WUFDZCxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7WUFDakIsS0FBSyxFQUFFLENBQUMsR0FBRyxFQUFFLE1BQU0sQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztZQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDO1lBQ2hCLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQztTQUNmO1FBQ0QsS0FBSztRQUNMLE1BQU07S0FDUCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBMTEMgQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSBhbiBNSVQtc3R5bGUgbGljZW5zZSB0aGF0IGNhbiBiZVxuICogZm91bmQgaW4gdGhlIExJQ0VOU0UgZmlsZSBhdCBodHRwczovL2FuZ3VsYXIuaW8vbGljZW5zZVxuICovXG5cbi8vIFRISVMgQ09ERSBJUyBHRU5FUkFURUQgLSBETyBOT1QgTU9ESUZZXG4vLyBTZWUgYW5ndWxhci90b29scy9ndWxwLXRhc2tzL2NsZHIvZXh0cmFjdC5qc1xuXG5jb25zdCB1ID0gdW5kZWZpbmVkO1xuXG5mdW5jdGlvbiBwbHVyYWwobjogbnVtYmVyKTogbnVtYmVyIHtcbiAgaWYgKG4gJSAxMCA9PT0gMSAmJiAhKG4gJSAxMDAgPT09IDExKSkgcmV0dXJuIDE7XG4gIGlmIChuICUgMTAgPT09IE1hdGguZmxvb3IobiAlIDEwKSAmJiBuICUgMTAgPj0gMiAmJiBuICUgMTAgPD0gNCAmJlxuICAgICAgIShuICUgMTAwID49IDEyICYmIG4gJSAxMDAgPD0gMTQpKVxuICAgIHJldHVybiAzO1xuICBpZiAobiAlIDEwID09PSAwIHx8IG4gJSAxMCA9PT0gTWF0aC5mbG9vcihuICUgMTApICYmIG4gJSAxMCA+PSA1ICYmIG4gJSAxMCA8PSA5IHx8XG4gICAgICBuICUgMTAwID09PSBNYXRoLmZsb29yKG4gJSAxMDApICYmIG4gJSAxMDAgPj0gMTEgJiYgbiAlIDEwMCA8PSAxNClcbiAgICByZXR1cm4gNDtcbiAgcmV0dXJuIDU7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgJ2JlJyxcbiAgW1snYW0nLCAncG0nXSwgWydBTScsICdQTSddLCB1XSxcbiAgW1snQU0nLCAnUE0nXSwgdSwgdV0sXG4gIFtcbiAgICBbJ9C9JywgJ9C/JywgJ9CwJywgJ9GBJywgJ9GHJywgJ9C/JywgJ9GBJ10sIFsn0L3QtCcsICfQv9C9JywgJ9Cw0Z4nLCAn0YHRgCcsICfRh9GGJywgJ9C/0YInLCAn0YHQsSddLFxuICAgIFsn0L3Rj9C00LfQtdC70Y8nLCAn0L/QsNC90Y/QtNC30LXQu9Cw0LonLCAn0LDRntGC0L7RgNCw0LonLCAn0YHQtdGA0LDQtNCwJywgJ9GH0LDRhtCy0LXRgCcsICfQv9GP0YLQvdGW0YbQsCcsICfRgdGD0LHQvtGC0LAnXSxcbiAgICBbJ9C90LQnLCAn0L/QvScsICfQsNGeJywgJ9GB0YAnLCAn0YfRhicsICfQv9GCJywgJ9GB0LEnXVxuICBdLFxuICB1LFxuICBbXG4gICAgWyfRgScsICfQuycsICfRgScsICfQuicsICfQvCcsICfRhycsICfQuycsICfQticsICfQsicsICfQuicsICfQuycsICfRgSddLFxuICAgIFsn0YHRgtGDJywgJ9C70Y7RgicsICfRgdCw0LonLCAn0LrRgNCwJywgJ9C80LDRjycsICfRh9GN0YAnLCAn0LvRltC/JywgJ9C20L3RlicsICfQstC10YAnLCAn0LrQsNGBJywgJ9C70ZbRgScsICfRgdC90LUnXSxcbiAgICBbXG4gICAgICAn0YHRgtGD0LTQt9C10L3RjycsICfQu9GO0YLQsNCz0LAnLCAn0YHQsNC60LDQstGW0LrQsCcsICfQutGA0LDRgdCw0LLRltC60LAnLCAn0LzQsNGPJywgJ9GH0Y3RgNCy0LXQvdGPJywgJ9C70ZbQv9C10L3RjycsICfQttC90ZbRntC90Y8nLFxuICAgICAgJ9Cy0LXRgNCw0YHQvdGPJywgJ9C60LDRgdGC0YDRi9GH0L3RltC60LAnLCAn0LvRltGB0YLQsNC/0LDQtNCwJywgJ9GB0L3QtdC20L3RjydcbiAgICBdXG4gIF0sXG4gIFtcbiAgICBbJ9GBJywgJ9C7JywgJ9GBJywgJ9C6JywgJ9C8JywgJ9GHJywgJ9C7JywgJ9C2JywgJ9CyJywgJ9C6JywgJ9C7JywgJ9GBJ10sXG4gICAgWyfRgdGC0YMnLCAn0LvRjtGCJywgJ9GB0LDQuicsICfQutGA0LAnLCAn0LzQsNC5JywgJ9GH0Y3RgCcsICfQu9GW0L8nLCAn0LbQvdGWJywgJ9Cy0LXRgCcsICfQutCw0YEnLCAn0LvRltGBJywgJ9GB0L3QtSddLFxuICAgIFtcbiAgICAgICfRgdGC0YPQtNC30LXQvdGMJywgJ9C70Y7RgtGLJywgJ9GB0LDQutCw0LLRltC6JywgJ9C60YDQsNGB0LDQstGW0LonLCAn0LzQsNC5JywgJ9GH0Y3RgNCy0LXQvdGMJywgJ9C70ZbQv9C10L3RjCcsICfQttC90ZbQstC10L3RjCcsICfQstC10YDQsNGB0LXQvdGMJyxcbiAgICAgICfQutCw0YHRgtGA0YvRh9C90ZbQuicsICfQu9GW0YHRgtCw0L/QsNC0JywgJ9GB0L3QtdC20LDQvdGMJ1xuICAgIF1cbiAgXSxcbiAgW1sn0LTQsCDQvS7RjS4nLCAn0L0u0Y0uJ10sIHUsIFsn0LTQsCDQvdCw0YDQsNC00LbRjdC90L3RjyDQpdGA0YvRgdGC0L7QstCwJywgJ9Cw0LQg0L3QsNGA0LDQtNC20Y3QvdC90Y8g0KXRgNGL0YHRgtC+0LLQsCddXSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ2QuTU0ueXknLCAnZC5NTS55JywgJ2QgTU1NTSB5IFxcJ9CzXFwnLicsICdFRUVFLCBkIE1NTU0geSBcXCfQs1xcJy4nXSxcbiAgWydISDptbScsICdISDptbTpzcycsICdISDptbTpzcyB6JywgJ0hIOm1tOnNzLCB6enp6J10sXG4gIFsnezF9LCB7MH0nLCB1LCAnezF9IFxcJ9GDXFwnIHswfScsIHVdLFxuICBbJywnLCAnwqAnLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzDCoCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLFxuICAnQllOJyxcbiAgJ0JyJyxcbiAgJ9Cx0LXQu9Cw0YDRg9GB0LrRliDRgNGD0LHQtdC70YwnLFxuICB7XG4gICAgJ0FVRCc6IFsnQSQnXSxcbiAgICAnQkJEJzogW3UsICdCZHMkJ10sXG4gICAgJ0JNRCc6IFt1LCAnQkQkJ10sXG4gICAgJ0JSTCc6IFt1LCAnUiQnXSxcbiAgICAnQlNEJzogW3UsICdCJCddLFxuICAgICdCWU4nOiBbJ0JyJ10sXG4gICAgJ0JaRCc6IFt1LCAnQlokJ10sXG4gICAgJ0NBRCc6IFt1LCAnQ0EkJ10sXG4gICAgJ0NVQyc6IFt1LCAnQ1VDJCddLFxuICAgICdDVVAnOiBbdSwgJyRNTiddLFxuICAgICdET1AnOiBbdSwgJ1JEJCddLFxuICAgICdGSkQnOiBbdSwgJ0ZKJCddLFxuICAgICdGS1AnOiBbdSwgJ0ZLwqMnXSxcbiAgICAnR1lEJzogW3UsICdHJCddLFxuICAgICdJU0snOiBbdSwgJ8ONa3InXSxcbiAgICAnSk1EJzogW3UsICdKJCddLFxuICAgICdLWUQnOiBbdSwgJ0NJJCddLFxuICAgICdMUkQnOiBbdSwgJ0wkJ10sXG4gICAgJ01YTic6IFsnTVgkJ10sXG4gICAgJ05BRCc6IFt1LCAnTiQnXSxcbiAgICAnTlpEJzogW3UsICdOWiQnXSxcbiAgICAnUlVCJzogWyfigr0nLCAn0YDRg9CxLiddLFxuICAgICdTQkQnOiBbdSwgJ1NJJCddLFxuICAgICdTR0QnOiBbdSwgJ1MkJ10sXG4gICAgJ1RURCc6IFt1LCAnVFQkJ10sXG4gICAgJ1VZVSc6IFt1LCAnJFUnXSxcbiAgICAnWENEJzogWydFQyQnXVxuICB9LFxuICAnbHRyJyxcbiAgcGx1cmFsXG5dO1xuIl19