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
        define("@angular/common/locales/ksh", ["require", "exports"], factory);
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
        return 5;
    }
    exports.default = [
        'ksh',
        [['v.M.', 'n.M.'], u, ['Uhr vörmiddaachs', 'Uhr nommendaachs']],
        [['v.M.', 'n.M.'], u, ['Vörmeddaach', 'Nommendaach']],
        [
            ['S', 'M', 'D', 'M', 'D', 'F', 'S'], ['Su.', 'Mo.', 'Di.', 'Me.', 'Du.', 'Fr.', 'Sa.'],
            ['Sunndaach', 'Mohndaach', 'Dinnsdaach', 'Metwoch', 'Dunnersdaach', 'Friidaach', 'Samsdaach'],
            ['Su', 'Mo', 'Di', 'Me', 'Du', 'Fr', 'Sa']
        ],
        u,
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'O', 'S', 'O', 'N', 'D'],
            ['Jan', 'Fäb', 'Mäz', 'Apr', 'Mai', 'Jun', 'Jul', 'Ouj', 'Säp', 'Okt', 'Nov', 'Dez'],
            [
                'Jannewa', 'Fäbrowa', 'Määz', 'Aprell', 'Mai', 'Juuni', 'Juuli', 'Oujoß', 'Septämber',
                'Oktohber', 'Novämber', 'Dezämber'
            ]
        ],
        [
            ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'O', 'S', 'O', 'N', 'D'],
            ['Jan.', 'Fäb.', 'Mäz.', 'Apr.', 'Mai', 'Jun.', 'Jul.', 'Ouj.', 'Säp.', 'Okt.', 'Nov.', 'Dez.'],
            [
                'Jannewa', 'Fäbrowa', 'Määz', 'Aprell', 'Mai', 'Juuni', 'Juuli', 'Oujoß', 'Septämber',
                'Oktohber', 'Novämber', 'Dezämber'
            ]
        ],
        [['vC', 'nC'], ['v. Chr.', 'n. Chr.'], ['vür Krestos', 'noh Krestos']],
        1,
        [6, 0],
        ['d. M. y', 'd. MMM. y', 'd. MMMM y', 'EEEE, \'dä\' d. MMMM y'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1} {0}', u, u, u],
        [',', ' ', ';', '%', '+', '−', '×10^', '×', '‰', '∞', 'NaN', ':'],
        ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
        'EUR',
        '€',
        'Euro',
        { 'JPY': ['JP¥', '¥'], 'USD': ['US$', '$'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoia3NoLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29tbW9uL2xvY2FsZXMva3NoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7Ozs7Ozs7Ozs7O0lBRUgseUNBQXlDO0lBQ3pDLCtDQUErQztJQUUvQyxJQUFNLENBQUMsR0FBRyxTQUFTLENBQUM7SUFFcEIsU0FBUyxNQUFNLENBQUMsQ0FBUztRQUN2QixJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ3RCLE9BQU8sQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQUVELGtCQUFlO1FBQ2IsS0FBSztRQUNMLENBQUMsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztRQUMvRCxDQUFDLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxhQUFhLENBQUMsQ0FBQztRQUNyRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDdEYsQ0FBQyxXQUFXLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxXQUFXLENBQUM7WUFDN0YsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLENBQUM7U0FDM0M7UUFDRCxDQUFDO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDcEY7Z0JBQ0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLEtBQUssRUFBRSxPQUFPLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXO2dCQUNyRixVQUFVLEVBQUUsVUFBVSxFQUFFLFVBQVU7YUFDbkM7U0FDRjtRQUNEO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsQ0FBQztZQUM1RCxDQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsTUFBTSxDQUFDO1lBQy9GO2dCQUNFLFNBQVMsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVztnQkFDckYsVUFBVSxFQUFFLFVBQVUsRUFBRSxVQUFVO2FBQ25DO1NBQ0Y7UUFDRCxDQUFDLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLGFBQWEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFDRCxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDTixDQUFDLFNBQVMsRUFBRSxXQUFXLEVBQUUsV0FBVyxFQUFFLHdCQUF3QixDQUFDO1FBQy9ELENBQUMsT0FBTyxFQUFFLFVBQVUsRUFBRSxZQUFZLEVBQUUsZUFBZSxDQUFDO1FBQ3BELENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsTUFBTSxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxHQUFHLENBQUM7UUFDakUsQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFlBQVksRUFBRSxLQUFLLENBQUM7UUFDN0MsS0FBSztRQUNMLEdBQUc7UUFDSCxNQUFNO1FBQ04sRUFBQyxLQUFLLEVBQUUsQ0FBQyxLQUFLLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFDO1FBQzFDLEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGlmIChuID09PSAwKSByZXR1cm4gMDtcbiAgaWYgKG4gPT09IDEpIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAna3NoJyxcbiAgW1sndi5NLicsICduLk0uJ10sIHUsIFsnVWhyIHbDtnJtaWRkYWFjaHMnLCAnVWhyIG5vbW1lbmRhYWNocyddXSxcbiAgW1sndi5NLicsICduLk0uJ10sIHUsIFsnVsO2cm1lZGRhYWNoJywgJ05vbW1lbmRhYWNoJ11dLFxuICBbXG4gICAgWydTJywgJ00nLCAnRCcsICdNJywgJ0QnLCAnRicsICdTJ10sIFsnU3UuJywgJ01vLicsICdEaS4nLCAnTWUuJywgJ0R1LicsICdGci4nLCAnU2EuJ10sXG4gICAgWydTdW5uZGFhY2gnLCAnTW9obmRhYWNoJywgJ0Rpbm5zZGFhY2gnLCAnTWV0d29jaCcsICdEdW5uZXJzZGFhY2gnLCAnRnJpaWRhYWNoJywgJ1NhbXNkYWFjaCddLFxuICAgIFsnU3UnLCAnTW8nLCAnRGknLCAnTWUnLCAnRHUnLCAnRnInLCAnU2EnXVxuICBdLFxuICB1LFxuICBbXG4gICAgWydKJywgJ0YnLCAnTScsICdBJywgJ00nLCAnSicsICdKJywgJ08nLCAnUycsICdPJywgJ04nLCAnRCddLFxuICAgIFsnSmFuJywgJ0bDpGInLCAnTcOkeicsICdBcHInLCAnTWFpJywgJ0p1bicsICdKdWwnLCAnT3VqJywgJ1PDpHAnLCAnT2t0JywgJ05vdicsICdEZXonXSxcbiAgICBbXG4gICAgICAnSmFubmV3YScsICdGw6Ricm93YScsICdNw6TDpHonLCAnQXByZWxsJywgJ01haScsICdKdXVuaScsICdKdXVsaScsICdPdWpvw58nLCAnU2VwdMOkbWJlcicsXG4gICAgICAnT2t0b2hiZXInLCAnTm92w6RtYmVyJywgJ0RlesOkbWJlcidcbiAgICBdXG4gIF0sXG4gIFtcbiAgICBbJ0onLCAnRicsICdNJywgJ0EnLCAnTScsICdKJywgJ0onLCAnTycsICdTJywgJ08nLCAnTicsICdEJ10sXG4gICAgWydKYW4uJywgJ0bDpGIuJywgJ03DpHouJywgJ0Fwci4nLCAnTWFpJywgJ0p1bi4nLCAnSnVsLicsICdPdWouJywgJ1PDpHAuJywgJ09rdC4nLCAnTm92LicsICdEZXouJ10sXG4gICAgW1xuICAgICAgJ0phbm5ld2EnLCAnRsOkYnJvd2EnLCAnTcOkw6R6JywgJ0FwcmVsbCcsICdNYWknLCAnSnV1bmknLCAnSnV1bGknLCAnT3Vqb8OfJywgJ1NlcHTDpG1iZXInLFxuICAgICAgJ09rdG9oYmVyJywgJ05vdsOkbWJlcicsICdEZXrDpG1iZXInXG4gICAgXVxuICBdLFxuICBbWyd2QycsICduQyddLCBbJ3YuIENoci4nLCAnbi4gQ2hyLiddLCBbJ3bDvHIgS3Jlc3RvcycsICdub2ggS3Jlc3RvcyddXSxcbiAgMSxcbiAgWzYsIDBdLFxuICBbJ2QuIE0uIHknLCAnZC4gTU1NLiB5JywgJ2QuIE1NTU0geScsICdFRUVFLCBcXCdkw6RcXCcgZC4gTU1NTSB5J10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcyB6enp6J10sXG4gIFsnezF9IHswfScsIHUsIHUsIHVdLFxuICBbJywnLCAnwqAnLCAnOycsICclJywgJysnLCAn4oiSJywgJ8OXMTBeJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzDCoCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLFxuICAnRVVSJyxcbiAgJ+KCrCcsXG4gICdFdXJvJyxcbiAgeydKUFknOiBbJ0pQwqUnLCAnwqUnXSwgJ1VTRCc6IFsnVVMkJywgJyQnXX0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=