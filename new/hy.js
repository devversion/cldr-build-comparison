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
        define("@angular/common/locales/hy", ["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // THIS CODE IS GENERATED - DO NOT MODIFY
    // See angular/tools/gulp-tasks/cldr/extract.js
    var u = undefined;
    function plural(n) {
        var i = Math.floor(Math.abs(n));
        if (i === 0 || i === 1)
            return 1;
        return 5;
    }
    exports.default = [
        'hy',
        [['ա', 'հ'], ['AM', 'PM'], u],
        [['AM', 'PM'], u, u],
        [
            ['Կ', 'Ե', 'Ե', 'Չ', 'Հ', 'Ո', 'Շ'], ['կիր', 'երկ', 'երք', 'չրք', 'հնգ', 'ուր', 'շբթ'],
            ['կիրակի', 'երկուշաբթի', 'երեքշաբթի', 'չորեքշաբթի', 'հինգշաբթի', 'ուրբաթ', 'շաբաթ'],
            ['կր', 'եկ', 'եք', 'չք', 'հգ', 'ու', 'շբ']
        ],
        u,
        [
            ['Հ', 'Փ', 'Մ', 'Ա', 'Մ', 'Հ', 'Հ', 'Օ', 'Ս', 'Հ', 'Ն', 'Դ'],
            ['հնվ', 'փտվ', 'մրտ', 'ապր', 'մյս', 'հնս', 'հլս', 'օգս', 'սեպ', 'հոկ', 'նոյ', 'դեկ'],
            [
                'հունվարի', 'փետրվարի', 'մարտի', 'ապրիլի', 'մայիսի', 'հունիսի', 'հուլիսի', 'օգոստոսի',
                'սեպտեմբերի', 'հոկտեմբերի', 'նոյեմբերի', 'դեկտեմբերի'
            ]
        ],
        [
            ['Հ', 'Փ', 'Մ', 'Ա', 'Մ', 'Հ', 'Հ', 'Օ', 'Ս', 'Հ', 'Ն', 'Դ'],
            ['հնվ', 'փտվ', 'մրտ', 'ապր', 'մյս', 'հնս', 'հլս', 'օգս', 'սեպ', 'հոկ', 'նոյ', 'դեկ'],
            [
                'հունվար', 'փետրվար', 'մարտ', 'ապրիլ', 'մայիս', 'հունիս', 'հուլիս', 'օգոստոս', 'սեպտեմբեր',
                'հոկտեմբեր', 'նոյեմբեր', 'դեկտեմբեր'
            ]
        ],
        [['մ.թ.ա.', 'մ.թ.'], u, ['Քրիստոսից առաջ', 'Քրիստոսից հետո']],
        1,
        [6, 0],
        ['dd.MM.yy', 'dd MMM, y թ.', 'dd MMMM, y թ.', 'y թ. MMMM d, EEEE'],
        ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
        ['{1}, {0}', u, u, u],
        [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'ՈչԹ', ':'],
        ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'],
        'AMD',
        '֏',
        'հայկական դրամ',
        { 'AMD': ['֏'], 'JPY': ['JP¥', '¥'], 'THB': ['฿'], 'TWD': ['NT$'] },
        'ltr',
        plural
    ];
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9oeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7Ozs7Ozs7Ozs7OztJQUVILHlDQUF5QztJQUN6QywrQ0FBK0M7SUFFL0MsSUFBTSxDQUFDLEdBQUcsU0FBUyxDQUFDO0lBRXBCLFNBQVMsTUFBTSxDQUFDLENBQVM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQUUsT0FBTyxDQUFDLENBQUM7UUFDakMsT0FBTyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsa0JBQWU7UUFDYixJQUFJO1FBQ0osQ0FBQyxDQUFDLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDN0IsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3BCO1lBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUN0RixDQUFDLFFBQVEsRUFBRSxZQUFZLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQztZQUNuRixDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztTQUMzQztRQUNELENBQUM7UUFDRDtZQUNFLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7WUFDNUQsQ0FBQyxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssQ0FBQztZQUNwRjtnQkFDRSxVQUFVLEVBQUUsVUFBVSxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsVUFBVTtnQkFDckYsWUFBWSxFQUFFLFlBQVksRUFBRSxXQUFXLEVBQUUsWUFBWTthQUN0RDtTQUNGO1FBQ0Q7WUFDRSxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDO1lBQzVELENBQUMsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxLQUFLLENBQUM7WUFDcEY7Z0JBQ0UsU0FBUyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxXQUFXO2dCQUMxRixXQUFXLEVBQUUsVUFBVSxFQUFFLFdBQVc7YUFDckM7U0FDRjtRQUNELENBQUMsQ0FBQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsZ0JBQWdCLEVBQUUsZ0JBQWdCLENBQUMsQ0FBQztRQUM3RCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ04sQ0FBQyxVQUFVLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxtQkFBbUIsQ0FBQztRQUNsRSxDQUFDLE9BQU8sRUFBRSxVQUFVLEVBQUUsWUFBWSxFQUFFLGVBQWUsQ0FBQztRQUNwRCxDQUFDLFVBQVUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNyQixDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDO1FBQzlELENBQUMsV0FBVyxFQUFFLFFBQVEsRUFBRSxZQUFZLEVBQUUsS0FBSyxDQUFDO1FBQzVDLEtBQUs7UUFDTCxHQUFHO1FBQ0gsZUFBZTtRQUNmLEVBQUMsS0FBSyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsS0FBSyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEtBQUssQ0FBQyxFQUFDO1FBQ2pFLEtBQUs7UUFDTCxNQUFNO0tBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSk7XG4gIGlmIChpID09PSAwIHx8IGkgPT09IDEpIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnaHknLFxuICBbWyfVoScsICfVsCddLCBbJ0FNJywgJ1BNJ10sIHVdLFxuICBbWydBTScsICdQTSddLCB1LCB1XSxcbiAgW1xuICAgIFsn1L8nLCAn1LUnLCAn1LUnLCAn1YknLCAn1YAnLCAn1YgnLCAn1YcnXSwgWyfVr9Wr1oAnLCAn1aXWgNWvJywgJ9Wl1oDWhCcsICfVudaA1oQnLCAn1bDVttWjJywgJ9W41oLWgCcsICfVt9Wi1aknXSxcbiAgICBbJ9Wv1avWgNWh1a/VqycsICfVpdaA1a/VuNaC1bfVodWi1anVqycsICfVpdaA1aXWhNW31aHVotWp1asnLCAn1bnVuNaA1aXWhNW31aHVotWp1asnLCAn1bDVq9W21aPVt9Wh1aLVqdWrJywgJ9W41oLWgNWi1aHVqScsICfVt9Wh1aLVodWpJ10sXG4gICAgWyfVr9aAJywgJ9Wl1a8nLCAn1aXWhCcsICfVudaEJywgJ9Ww1aMnLCAn1bjWgicsICfVt9WiJ11cbiAgXSxcbiAgdSxcbiAgW1xuICAgIFsn1YAnLCAn1ZMnLCAn1YQnLCAn1LEnLCAn1YQnLCAn1YAnLCAn1YAnLCAn1ZUnLCAn1Y0nLCAn1YAnLCAn1YYnLCAn1LQnXSxcbiAgICBbJ9Ww1bbVvicsICfWg9W/1b4nLCAn1bTWgNW/JywgJ9Wh1brWgCcsICfVtNW11b0nLCAn1bDVttW9JywgJ9Ww1azVvScsICfWhdWj1b0nLCAn1b3VpdW6JywgJ9Ww1bjVrycsICfVttW41bUnLCAn1aTVpdWvJ10sXG4gICAgW1xuICAgICAgJ9Ww1bjWgtW21b7VodaA1asnLCAn1oPVpdW/1oDVvtWh1oDVqycsICfVtNWh1oDVv9WrJywgJ9Wh1brWgNWr1azVqycsICfVtNWh1bXVq9W91asnLCAn1bDVuNaC1bbVq9W91asnLCAn1bDVuNaC1azVq9W91asnLCAn1oXVo9W41b3Vv9W41b3VqycsXG4gICAgICAn1b3VpdW61b/VpdW01aLVpdaA1asnLCAn1bDVuNWv1b/VpdW01aLVpdaA1asnLCAn1bbVuNW11aXVtNWi1aXWgNWrJywgJ9Wk1aXVr9W/1aXVtNWi1aXWgNWrJ1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFsn1YAnLCAn1ZMnLCAn1YQnLCAn1LEnLCAn1YQnLCAn1YAnLCAn1YAnLCAn1ZUnLCAn1Y0nLCAn1YAnLCAn1YYnLCAn1LQnXSxcbiAgICBbJ9Ww1bbVvicsICfWg9W/1b4nLCAn1bTWgNW/JywgJ9Wh1brWgCcsICfVtNW11b0nLCAn1bDVttW9JywgJ9Ww1azVvScsICfWhdWj1b0nLCAn1b3VpdW6JywgJ9Ww1bjVrycsICfVttW41bUnLCAn1aTVpdWvJ10sXG4gICAgW1xuICAgICAgJ9Ww1bjWgtW21b7VodaAJywgJ9aD1aXVv9aA1b7VodaAJywgJ9W01aHWgNW/JywgJ9Wh1brWgNWr1awnLCAn1bTVodW11avVvScsICfVsNW41oLVttWr1b0nLCAn1bDVuNaC1azVq9W9JywgJ9aF1aPVuNW91b/VuNW9JywgJ9W91aXVutW/1aXVtNWi1aXWgCcsXG4gICAgICAn1bDVuNWv1b/VpdW01aLVpdaAJywgJ9W21bjVtdWl1bTVotWl1oAnLCAn1aTVpdWv1b/VpdW01aLVpdaAJ1xuICAgIF1cbiAgXSxcbiAgW1sn1bQu1aku1aEuJywgJ9W0LtWpLiddLCB1LCBbJ9WU1oDVq9W91b/VuNW91avWgSDVodW81aHVuycsICfVlNaA1avVvdW/1bjVvdWr1oEg1bDVpdW/1bgnXV0sXG4gIDEsXG4gIFs2LCAwXSxcbiAgWydkZC5NTS55eScsICdkZCBNTU0sIHkg1akuJywgJ2RkIE1NTU0sIHkg1akuJywgJ3kg1akuIE1NTU0gZCwgRUVFRSddLFxuICBbJ0hIOm1tJywgJ0hIOm1tOnNzJywgJ0hIOm1tOnNzIHonLCAnSEg6bW06c3Mgenp6eiddLFxuICBbJ3sxfSwgezB9JywgdSwgdSwgdV0sXG4gIFsnLCcsICfCoCcsICc7JywgJyUnLCAnKycsICctJywgJ0UnLCAnw5cnLCAn4oCwJywgJ+KInicsICfViNW51LknLCAnOiddLFxuICBbJyMsIyMwLiMjIycsICcjLCMjMCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLFxuICAnQU1EJyxcbiAgJ9aPJyxcbiAgJ9Ww1aHVtdWv1aHVr9Wh1bYg1aTWgNWh1bQnLFxuICB7J0FNRCc6IFsn1o8nXSwgJ0pQWSc6IFsnSlDCpScsICfCpSddLCAnVEhCJzogWyfguL8nXSwgJ1RXRCc6IFsnTlQkJ119LFxuICAnbHRyJyxcbiAgcGx1cmFsXG5dO1xuIl19