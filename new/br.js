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
        define("@angular/common/locales/br", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        if (n % 10 === 1 && !(n % 100 === 11 || n % 100 === 71 || n % 100 === 91))
            return 1;
        if (n % 10 === 2 && !(n % 100 === 12 || n % 100 === 72 || n % 100 === 92))
            return 2;
        if (n % 10 === Math.floor(n % 10) && (n % 10 >= 3 && n % 10 <= 4 || n % 10 === 9) &&
            !(n % 100 >= 10 && n % 100 <= 19 || n % 100 >= 70 && n % 100 <= 79 ||
                n % 100 >= 90 && n % 100 <= 99))
            return 3;
        if (!(n === 0) && n % 1e6 === 0)
            return 4;
        return 5;
    }
    exports.default = [
        'br',
        [['am', 'gm'], ['A.M.', 'G.M.'], u],
        [['A.M.', 'G.M.'], u, u],
        [
            ['Su', 'L', 'Mz', 'Mc', 'Y', 'G', 'Sa'], ['Sul', 'Lun', 'Meu.', 'Mer.', 'Yaou', 'Gwe.', 'Sad.'],
            ['Sul', 'Lun', 'Meurzh', 'Mercʼher', 'Yaou', 'Gwener', 'Sadorn'],
            ['Sul', 'Lun', 'Meu.', 'Mer.', 'Yaou', 'Gwe.', 'Sad.']
        ],
        u,
        [
            ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'],
            [
                'Gen.', 'Cʼhwe.', 'Meur.', 'Ebr.', 'Mae', 'Mezh.', 'Goue.', 'Eost', 'Gwen.', 'Here', 'Du',
                'Kzu.'
            ],
            [
                'Genver', 'Cʼhwevrer', 'Meurzh', 'Ebrel', 'Mae', 'Mezheven', 'Gouere', 'Eost', 'Gwengolo',
                'Here', 'Du', 'Kerzu'
            ]
        ],
        u,
        [['a-raok J.K.', 'goude J.K.'], u, ['a-raok Jezuz-Krist', 'goude Jezuz-Krist']],
        1,
        [6, 0],
        ['dd/MM/y', 'd MMM y', 'd MMMM y', 'EEEE d MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', '{1}, {0}', '{1} \'da\' {0}', u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'euro',
        {
            'AUD': ['$A', '$'],
            'BRL': [u, 'R$'],
            'CAD': ['$CA', '$'],
            'CNY': [u, '¥'],
            'EGP': [u, '£ E'],
            'GBP': ['£ RU', '£'],
            'HKD': ['$ HK', '$'],
            'ILS': [u, '₪'],
            'JPY': [u, '¥'],
            'KRW': [u, '₩'],
            'LBP': [u, '£L'],
            'NZD': ['$ ZN', '$'],
            'TOP': [u, '$ T'],
            'TWD': [u, '$'],
            'USD': ['$ SU', '$'],
            'VND': [u, '₫'],
            'XCD': [u, '$'],
            'XXX': []
        },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9ici50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxFQUFFLENBQUM7WUFBRSxPQUFPLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxLQUFLLEVBQUUsQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxHQUFHLEVBQUUsS0FBSyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQzdFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUU7Z0JBQ2hFLENBQUMsR0FBRyxHQUFHLElBQUksRUFBRSxJQUFJLENB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S0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztZQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUM7WUFDaEIsS0FBSyxFQUFFLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQztZQUNwQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDO1lBQ2pCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxNQUFNLEVBQUUsR0FBRyxDQUFDO1lBQ3BCLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7WUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1lBQ2YsS0FBSyxFQUFFLEVBQUU7U0FDVjtRQUNELEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChuICUgMTAgPT09IDEgJiYgIShuICUgMTAwID09PSAxMSB8fCBuICUgMTAwID09PSA3MSB8fCBuICUgMTAwID09PSA5MSkpIHJldHVybiAxO1xuICBpZiAobiAlIDEwID09PSAyICYmICEobiAlIDEwMCA9PT0gMTIgfHwgbiAlIDEwMCA9PT0gNzIgfHwgbiAlIDEwMCA9PT0gOTIpKSByZXR1cm4gMjtcbiAgaWYgKG4gJSAxMCA9PT0gTWF0aC5mbG9vcihuICUgMTApICYmIChuICUgMTAgPj0gMyAmJiBuICUgMTAgPD0gNCB8fCBuICUgMTAgPT09IDkpICYmXG4gICAgICAhKG4gJSAxMDAgPj0gMTAgJiYgbiAlIDEwMCA8PSAxOSB8fCBuICUgMTAwID49IDcwICYmIG4gJSAxMDAgPD0gNzkgfHxcbiAgICAgICAgbiAlIDEwMCA+PSA5MCAmJiBuICUgMTAwIDw9IDk5KSlcbiAgICByZXR1cm4gMztcbiAgaWYgKCEobiA9PT0gMCkgJiYgbiAlIDFlNiA9PT0gMCkgcmV0dXJuIDQ7XG4gIHJldHVybiA1O1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gICdicicsXG4gIFtbJ2FtJywgJ2dtJ10sIFsnQS5NLicsICdHLk0uJ10sIHVdLFxuICBbWydBLk0uJywgJ0cuTS4nXSwgdSwgdV0sXG4gIFtcbiAgICBbJ1N1JywgJ0wnLCAnTXonLCAnTWMnLCAnWScsICdHJywgJ1NhJ10sIFsnU3VsJywgJ0x1bicsICdNZXUuJywgJ01lci4nLCAnWWFvdScsICdHd2UuJywgJ1NhZC4nXSxcbiAgICBbJ1N1bCcsICdMdW4nLCAnTWV1cnpoJywgJ01lcmPKvGhlcicsICdZYW91JywgJ0d3ZW5lcicsICdTYWRvcm4nXSxcbiAgICBbJ1N1bCcsICdMdW4nLCAnTWV1LicsICdNZXIuJywgJ1lhb3UnLCAnR3dlLicsICdTYWQuJ11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsnMDEnLCAnMDInLCAnMDMnLCAnMDQnLCAnMDUnLCAnMDYnLCAnMDcnLCAnMDgnLCAnMDknLCAnMTAnLCAnMTEnLCAnMTInXSxcbiAgICBbXG4gICAgICAnR2VuLicsICdDyrxod2UuJywgJ01ldXIuJywgJ0Vici4nLCAnTWFlJywgJ01lemguJywgJ0dvdWUuJywgJ0Vvc3QnLCAnR3dlbi4nLCAnSGVyZScsICdEdScsXG4gICAgICAnS3p1LidcbiAgICBdLFxuICAgIFtcbiAgICAgICdHZW52ZXInLCAnQ8q8aHdldnJlcicsICdNZXVyemgnLCAnRWJyZWwnLCAnTWFlJywgJ01lemhldmVuJywgJ0dvdWVyZScsICdFb3N0JywgJ0d3ZW5nb2xvJyxcbiAgICAgICdIZXJlJywgJ0R1JywgJ0tlcnp1J1xuICAgIF1cbiAgXSxcbiAgdSxcbiAgW1snYS1yYW9rIEouSy4nLCAnZ291ZGUgSi5LLiddLCB1LCBbJ2EtcmFvayBKZXp1ei1LcmlzdCcsICdnb3VkZSBKZXp1ei1LcmlzdCddXSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ2RkL01NL3knLCAnZCBNTU0geScsICdkIE1NTU0geScsICdFRUVFIGQgTU1NTSB5J10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcyB6enp6J10sXG4gIFsnezF9IHswfScsICd7MX0sIHswfScsICd7MX0gXFwnZGFcXCcgezB9JywgdV0sXG4gIFsnLCcsICfCoCcsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICdOYU4nLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMMKgJScsICcjLCMjMC4wMMKgwqQnLCAnI0UwJ10sXG4gICdFVVInLFxuICAn4oKsJyxcbiAgJ2V1cm8nLFxuICB7XG4gICAgJ0FVRCc6IFsnJEEnLCAnJCddLFxuICAgICdCUkwnOiBbdSwgJ1IkJ10sXG4gICAgJ0NBRCc6IFsnJENBJywgJyQnXSxcbiAgICAnQ05ZJzogW3UsICfCpSddLFxuICAgICdFR1AnOiBbdSwgJ8KjIEUnXSxcbiAgICAnR0JQJzogWyfCoyBSVScsICfCoyddLFxuICAgICdIS0QnOiBbJyQgSEsnLCAnJCddLFxuICAgICdJTFMnOiBbdSwgJ+KCqiddLFxuICAgICdKUFknOiBbdSwgJ8KlJ10sXG4gICAgJ0tSVyc6IFt1LCAn4oKpJ10sXG4gICAgJ0xCUCc6IFt1LCAnwqNMJ10sXG4gICAgJ05aRCc6IFsnJCBaTicsICckJ10sXG4gICAgJ1RPUCc6IFt1LCAnJCBUJ10sXG4gICAgJ1RXRCc6IFt1LCAnJCddLFxuICAgICdVU0QnOiBbJyQgU1UnLCAnJCddLFxuICAgICdWTkQnOiBbdSwgJ+KCqyddLFxuICAgICdYQ0QnOiBbdSwgJyQnXSxcbiAgICAnWFhYJzogW11cbiAgfSxcbiAgJ2x0cicsXG4gIHBsdXJhbFxuXTtcbiJdfQ==