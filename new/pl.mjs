/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// THIS CODE IS GENERATED - DO NOT MODIFY
// See angular/tools/gulp-tasks/cldr/extract.js
const u = undefined;
function plural(n) {
    let i = Math.floor(Math.abs(n)), v = n.toString().replace(/^[^.]*\.?/, '').length;
    if (i === 1 && v === 0)
        return 1;
    if (v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 2 && i % 10 <= 4 &&
        !(i % 100 >= 12 && i % 100 <= 14))
        return 3;
    if (v === 0 && !(i === 1) && i % 10 === Math.floor(i % 10) && i % 10 >= 0 && i % 10 <= 1 ||
        v === 0 && i % 10 === Math.floor(i % 10) && i % 10 >= 5 && i % 10 <= 9 ||
        v === 0 && i % 100 === Math.floor(i % 100) && i % 100 >= 12 && i % 100 <= 14)
        return 4;
    return 5;
}
export default [
    'pl',
    [['a', 'p'], ['AM', 'PM'], u],
    u,
    [
        ['n', 'p', 'w', 'ś', 'c', 'p', 's'], ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
        ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
        ['nie', 'pon', 'wto', 'śro', 'czw', 'pią', 'sob']
    ],
    [
        ['N', 'P', 'W', 'Ś', 'C', 'P', 'S'], ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'],
        ['niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota'],
        ['nie', 'pon', 'wto', 'śro', 'czw', 'pią', 'sob']
    ],
    [
        ['s', 'l', 'm', 'k', 'm', 'c', 'l', 's', 'w', 'p', 'l', 'g'],
        ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
        [
            'stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca', 'lipca', 'sierpnia', 'września',
            'października', 'listopada', 'grudnia'
        ]
    ],
    [
        ['S', 'L', 'M', 'K', 'M', 'C', 'L', 'S', 'W', 'P', 'L', 'G'],
        ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'],
        [
            'styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień',
            'październik', 'listopad', 'grudzień'
        ]
    ],
    [['p.n.e.', 'n.e.'], u, ['przed naszą erą', 'naszej ery']],
    1,
    [6, 0],
    ['dd.MM.y', 'd MMM y', 'd MMMM y', 'EEEE, d MMMM y'],
    ['HH:mm', 'HH:mm:ss', 'HH:mm:ss z', 'HH:mm:ss zzzz'],
    ['{1}, {0}', u, '{1} {0}', u],
    [',', ' ', ';', '%', '+', '-', 'E', '×', '‰', '∞', 'NaN', ':'],
    ['#,##0.###', '#,##0%', '#,##0.00 ¤', '#E0'],
    'PLN',
    'zł',
    'złoty polski',
    {
        'AUD': [u, '$'],
        'CAD': [u, '$'],
        'CNY': [u, '¥'],
        'GBP': [u, '£'],
        'HKD': [u, '$'],
        'ILS': [u, '₪'],
        'INR': [u, '₹'],
        'JPY': [u, '¥'],
        'KRW': [u, '₩'],
        'MXN': [u, '$'],
        'NZD': [u, '$'],
        'PLN': ['zł'],
        'RON': [u, 'lej'],
        'TWD': [u, 'NT$'],
        'USD': [u, '$'],
        'VND': [u, '₫']
    },
    'ltr',
    plural
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9wbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCx5Q0FBeUM7QUFDekMsK0NBQStDO0FBRS9DLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUVwQixTQUFTLE1BQU0sQ0FBQyxDQUFTO0lBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDakMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQ3RFLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLEVBQUUsQ0FBQztRQUNuQyxPQUFPLENBQUMsQ0FBQztJQUNYLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEtBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDO1FBQ3BGLENBQUMsS0FB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QUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNmLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUM7UUFDZixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztRQUNmLEtBQUssRUFBRSxDQUFDLElBQUksQ0FBQztRQUNiLEtBQUssRUFBRSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUM7UUFDakIsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztRQUNqQixLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDO1FBQ2YsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQztLQUNoQjtJQUNELEtBQUs7SUFDTCxNQUFNO0NBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGg7XG4gIGlmIChpID09PSAxICYmIHYgPT09IDApIHJldHVybiAxO1xuICBpZiAodiA9PT0gMCAmJiBpICUgMTAgPT09IE1hdGguZmxvb3IoaSAlIDEwKSAmJiBpICUgMTAgPj0gMiAmJiBpICUgMTAgPD0gNCAmJlxuICAgICAgIShpICUgMTAwID49IDEyICYmIGkgJSAxMDAgPD0gMTQpKVxuICAgIHJldHVybiAzO1xuICBpZiAodiA9PT0gMCAmJiAhKGkgPT09IDEpICYmIGkgJSAxMCA9PT0gTWF0aC5mbG9vcihpICUgMTApICYmIGkgJSAxMCA+PSAwICYmIGkgJSAxMCA8PSAxIHx8XG4gICAgICB2ID09PSAwICYmIGkgJSAxMCA9PT0gTWF0aC5mbG9vcihpICUgMTApICYmIGkgJSAxMCA+PSA1ICYmIGkgJSAxMCA8PSA5IHx8XG4gICAgICB2ID09PSAwICYmIGkgJSAxMDAgPT09IE1hdGguZmxvb3IoaSAlIDEwMCkgJiYgaSAlIDEwMCA+PSAxMiAmJiBpICUgMTAwIDw9IDE0KVxuICAgIHJldHVybiA0O1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAncGwnLFxuICBbWydhJywgJ3AnXSwgWydBTScsICdQTSddLCB1XSxcbiAgdSxcbiAgW1xuICAgIFsnbicsICdwJywgJ3cnLCAnxZsnLCAnYycsICdwJywgJ3MnXSwgWyduaWVkei4nLCAncG9uLicsICd3dC4nLCAnxZtyLicsICdjencuJywgJ3B0LicsICdzb2IuJ10sXG4gICAgWyduaWVkemllbGEnLCAncG9uaWVkemlhxYJlaycsICd3dG9yZWsnLCAnxZtyb2RhJywgJ2N6d2FydGVrJywgJ3BpxIV0ZWsnLCAnc29ib3RhJ10sXG4gICAgWyduaWUnLCAncG9uJywgJ3d0bycsICfFm3JvJywgJ2N6dycsICdwacSFJywgJ3NvYiddXG4gIF0sXG4gIFtcbiAgICBbJ04nLCAnUCcsICdXJywgJ8WaJywgJ0MnLCAnUCcsICdTJ10sIFsnbmllZHouJywgJ3Bvbi4nLCAnd3QuJywgJ8Wbci4nLCAnY3p3LicsICdwdC4nLCAnc29iLiddLFxuICAgIFsnbmllZHppZWxhJywgJ3BvbmllZHppYcWCZWsnLCAnd3RvcmVrJywgJ8Wbcm9kYScsICdjendhcnRlaycsICdwacSFdGVrJywgJ3NvYm90YSddLFxuICAgIFsnbmllJywgJ3BvbicsICd3dG8nLCAnxZtybycsICdjencnLCAncGnEhScsICdzb2InXVxuICBdLFxuICBbXG4gICAgWydzJywgJ2wnLCAnbScsICdrJywgJ20nLCAnYycsICdsJywgJ3MnLCAndycsICdwJywgJ2wnLCAnZyddLFxuICAgIFsnc3R5JywgJ2x1dCcsICdtYXInLCAna3dpJywgJ21haicsICdjemUnLCAnbGlwJywgJ3NpZScsICd3cnonLCAncGHFuicsICdsaXMnLCAnZ3J1J10sXG4gICAgW1xuICAgICAgJ3N0eWN6bmlhJywgJ2x1dGVnbycsICdtYXJjYScsICdrd2lldG5pYScsICdtYWphJywgJ2N6ZXJ3Y2EnLCAnbGlwY2EnLCAnc2llcnBuaWEnLCAnd3J6ZcWbbmlhJyxcbiAgICAgICdwYcW6ZHppZXJuaWthJywgJ2xpc3RvcGFkYScsICdncnVkbmlhJ1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFsnUycsICdMJywgJ00nLCAnSycsICdNJywgJ0MnLCAnTCcsICdTJywgJ1cnLCAnUCcsICdMJywgJ0cnXSxcbiAgICBbJ3N0eScsICdsdXQnLCAnbWFyJywgJ2t3aScsICdtYWonLCAnY3plJywgJ2xpcCcsICdzaWUnLCAnd3J6JywgJ3BhxbonLCAnbGlzJywgJ2dydSddLFxuICAgIFtcbiAgICAgICdzdHljemXFhCcsICdsdXR5JywgJ21hcnplYycsICdrd2llY2llxYQnLCAnbWFqJywgJ2N6ZXJ3aWVjJywgJ2xpcGllYycsICdzaWVycGllxYQnLCAnd3J6ZXNpZcWEJyxcbiAgICAgICdwYcW6ZHppZXJuaWsnLCAnbGlzdG9wYWQnLCAnZ3J1ZHppZcWEJ1xuICAgIF1cbiAgXSxcbiAgW1sncC5uLmUuJywgJ24uZS4nXSwgdSwgWydwcnplZCBuYXN6xIUgZXLEhScsICduYXN6ZWogZXJ5J11dLFxuICAxLFxuICBbNiwgMF0sXG4gIFsnZGQuTU0ueScsICdkIE1NTSB5JywgJ2QgTU1NTSB5JywgJ0VFRUUsIGQgTU1NTSB5J10sXG4gIFsnSEg6bW0nLCAnSEg6bW06c3MnLCAnSEg6bW06c3MgeicsICdISDptbTpzcyB6enp6J10sXG4gIFsnezF9LCB7MH0nLCB1LCAnezF9IHswfScsIHVdLFxuICBbJywnLCAnwqAnLCAnOycsICclJywgJysnLCAnLScsICdFJywgJ8OXJywgJ+KAsCcsICfiiJ4nLCAnTmFOJywgJzonXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzAlJywgJyMsIyMwLjAwwqDCpCcsICcjRTAnXSxcbiAgJ1BMTicsXG4gICd6xYInLFxuICAnesWCb3R5IHBvbHNraScsXG4gIHtcbiAgICAnQVVEJzogW3UsICckJ10sXG4gICAgJ0NBRCc6IFt1LCAnJCddLFxuICAgICdDTlknOiBbdSwgJ8KlJ10sXG4gICAgJ0dCUCc6IFt1LCAnwqMnXSxcbiAgICAnSEtEJzogW3UsICckJ10sXG4gICAgJ0lMUyc6IFt1LCAn4oKqJ10sXG4gICAgJ0lOUic6IFt1LCAn4oK5J10sXG4gICAgJ0pQWSc6IFt1LCAnwqUnXSxcbiAgICAnS1JXJzogW3UsICfigqknXSxcbiAgICAnTVhOJzogW3UsICckJ10sXG4gICAgJ05aRCc6IFt1LCAnJCddLFxuICAgICdQTE4nOiBbJ3rFgiddLFxuICAgICdST04nOiBbdSwgJ2xlaiddLFxuICAgICdUV0QnOiBbdSwgJ05UJCddLFxuICAgICdVU0QnOiBbdSwgJyQnXSxcbiAgICAnVk5EJzogW3UsICfigqsnXVxuICB9LFxuICAnbHRyJyxcbiAgcGx1cmFsXG5dO1xuIl19