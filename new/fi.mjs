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
    return 5;
}
export default [
    'fi',
    [['ap.', 'ip.'], u, u],
    u,
    [
        ['S', 'M', 'T', 'K', 'T', 'P', 'L'], ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
        [
            'sunnuntaina', 'maanantaina', 'tiistaina', 'keskiviikkona', 'torstaina', 'perjantaina',
            'lauantaina'
        ],
        ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la']
    ],
    [
        ['S', 'M', 'T', 'K', 'T', 'P', 'L'], ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la'],
        ['sunnuntai', 'maanantai', 'tiistai', 'keskiviikko', 'torstai', 'perjantai', 'lauantai'],
        ['su', 'ma', 'ti', 'ke', 'to', 'pe', 'la']
    ],
    [
        ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'],
        [
            'tammik.', 'helmik.', 'maalisk.', 'huhtik.', 'toukok.', 'kesäk.', 'heinäk.', 'elok.',
            'syysk.', 'lokak.', 'marrask.', 'jouluk.'
        ],
        [
            'tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta',
            'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta'
        ]
    ],
    [
        ['T', 'H', 'M', 'H', 'T', 'K', 'H', 'E', 'S', 'L', 'M', 'J'],
        [
            'tammi', 'helmi', 'maalis', 'huhti', 'touko', 'kesä', 'heinä', 'elo', 'syys', 'loka',
            'marras', 'joulu'
        ],
        [
            'tammikuu', 'helmikuu', 'maaliskuu', 'huhtikuu', 'toukokuu', 'kesäkuu', 'heinäkuu', 'elokuu',
            'syyskuu', 'lokakuu', 'marraskuu', 'joulukuu'
        ]
    ],
    [['eKr', 'jKr'], ['eKr.', 'jKr.'], ['ennen Kristuksen syntymää', 'jälkeen Kristuksen syntymän']],
    1,
    [6, 0],
    ['d.M.y', u, 'd. MMMM y', 'cccc d. MMMM y'],
    ['H.mm', 'H.mm.ss', 'H.mm.ss z', 'H.mm.ss zzzz'],
    ['{1} {0}', '{1} \'klo\' {0}', u, u],
    [',', ' ', ';', '%', '+', '−', 'E', '×', '‰', '∞', 'epäluku', '.'],
    ['#,##0.###', '#,##0 %', '#,##0.00 ¤', '#E0'],
    'EUR',
    '€',
    'euro',
    {
        'AOA': [],
        'ARS': [],
        'AUD': [],
        'BAM': [],
        'BBD': [],
        'BDT': [],
        'BMD': [],
        'BND': [],
        'BOB': [],
        'BRL': [],
        'BSD': [],
        'BWP': [],
        'BYN': [],
        'BZD': [],
        'CAD': [],
        'CLP': [],
        'CNY': [],
        'COP': [],
        'CRC': [],
        'CUC': [],
        'CUP': [],
        'CZK': [],
        'DKK': [],
        'DOP': [],
        'EGP': [],
        'ESP': [],
        'FIM': ['mk'],
        'FJD': [],
        'FKP': [],
        'GEL': [],
        'GIP': [],
        'GNF': [],
        'GTQ': [],
        'GYD': [],
        'HKD': [],
        'HNL': [],
        'HRK': [],
        'HUF': [],
        'IDR': [],
        'ILS': [],
        'INR': [],
        'ISK': [],
        'JMD': [],
        'KHR': [],
        'KMF': [],
        'KPW': [],
        'KRW': [],
        'KYD': [],
        'KZT': [],
        'LAK': [],
        'LBP': [],
        'LKR': [],
        'LRD': [],
        'LTL': [],
        'LVL': [],
        'MGA': [],
        'MMK': [],
        'MNT': [],
        'MUR': [],
        'MXN': [],
        'MYR': [],
        'NAD': [],
        'NGN': [],
        'NIO': [],
        'NOK': [],
        'NPR': [],
        'NZD': [],
        'PHP': [],
        'PKR': [],
        'PLN': [],
        'PYG': [],
        'RON': [],
        'RUR': [],
        'RWF': [],
        'SBD': [],
        'SEK': [],
        'SGD': [],
        'SHP': [],
        'SRD': [],
        'SSP': [],
        'STN': [u, 'STD'],
        'SYP': [],
        'THB': [],
        'TOP': [],
        'TRY': [],
        'TTD': [],
        'TWD': [],
        'UAH': [],
        'UYU': [],
        'VEF': [],
        'VND': [],
        'XCD': [],
        'XPF': [],
        'XXX': [],
        'ZAR': [],
        'ZMW': []
    },
    'ltr',
    plural
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wYWNrYWdlcy9jb21tb24vbG9jYWxlcy9maS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7O0dBTUc7QUFFSCx5Q0FBeUM7QUFDekMsK0NBQStDO0FBRS9DLE1BQU0sQ0FBQyxHQUFHLFNBQVMsQ0FBQztBQUVwQixTQUFTLE1BQU0sQ0FBQyxDQUFTO0lBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUM7SUFDbEYsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQUUsT0FBTyxDQUFDLENBQUM7SUFDakMsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDO0FBRUQsZUFBZTtJQUNiLElBQUk7SUFDSixDQUFDLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNEO1FBQ0UsQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztRQUMvRTtZQUNFLGFBQWEsRUFBRSxhQUFhLEVBQUUsV0FBVyxFQUFFLGVBQWUsRUFBRSxXQUFXLEVBQUUsYUFBYTtZQUN0RixZQUFZO1NBQ2I7UUFDRCxDQUFDLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FB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RUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDYixLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQztRQUNqQixLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7UUFDVCxLQUFLLEVBQUUsRUFBRTtRQUNULEtBQUssRUFBRSxFQUFFO1FBQ1QsS0FBSyxFQUFFLEVBQUU7S0FDVjtJQUNELEtBQUs7SUFDTCxNQUFNO0NBQ1AsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBHb29nbGUgTExDIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG4vLyBUSElTIENPREUgSVMgR0VORVJBVEVEIC0gRE8gTk9UIE1PRElGWVxuLy8gU2VlIGFuZ3VsYXIvdG9vbHMvZ3VscC10YXNrcy9jbGRyL2V4dHJhY3QuanNcblxuY29uc3QgdSA9IHVuZGVmaW5lZDtcblxuZnVuY3Rpb24gcGx1cmFsKG46IG51bWJlcik6IG51bWJlciB7XG4gIGxldCBpID0gTWF0aC5mbG9vcihNYXRoLmFicyhuKSksIHYgPSBuLnRvU3RyaW5nKCkucmVwbGFjZSgvXlteLl0qXFwuPy8sICcnKS5sZW5ndGg7XG4gIGlmIChpID09PSAxICYmIHYgPT09IDApIHJldHVybiAxO1xuICByZXR1cm4gNTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAnZmknLFxuICBbWydhcC4nLCAnaXAuJ10sIHUsIHVdLFxuICB1LFxuICBbXG4gICAgWydTJywgJ00nLCAnVCcsICdLJywgJ1QnLCAnUCcsICdMJ10sIFsnc3UnLCAnbWEnLCAndGknLCAna2UnLCAndG8nLCAncGUnLCAnbGEnXSxcbiAgICBbXG4gICAgICAnc3VubnVudGFpbmEnLCAnbWFhbmFudGFpbmEnLCAndGlpc3RhaW5hJywgJ2tlc2tpdmlpa2tvbmEnLCAndG9yc3RhaW5hJywgJ3BlcmphbnRhaW5hJyxcbiAgICAgICdsYXVhbnRhaW5hJ1xuICAgIF0sXG4gICAgWydzdScsICdtYScsICd0aScsICdrZScsICd0bycsICdwZScsICdsYSddXG4gIF0sXG4gIFtcbiAgICBbJ1MnLCAnTScsICdUJywgJ0snLCAnVCcsICdQJywgJ0wnXSwgWydzdScsICdtYScsICd0aScsICdrZScsICd0bycsICdwZScsICdsYSddLFxuICAgIFsnc3VubnVudGFpJywgJ21hYW5hbnRhaScsICd0aWlzdGFpJywgJ2tlc2tpdmlpa2tvJywgJ3RvcnN0YWknLCAncGVyamFudGFpJywgJ2xhdWFudGFpJ10sXG4gICAgWydzdScsICdtYScsICd0aScsICdrZScsICd0bycsICdwZScsICdsYSddXG4gIF0sXG4gIFtcbiAgICBbJ1QnLCAnSCcsICdNJywgJ0gnLCAnVCcsICdLJywgJ0gnLCAnRScsICdTJywgJ0wnLCAnTScsICdKJ10sXG4gICAgW1xuICAgICAgJ3RhbW1pay4nLCAnaGVsbWlrLicsICdtYWFsaXNrLicsICdodWh0aWsuJywgJ3RvdWtvay4nLCAna2Vzw6RrLicsICdoZWluw6RrLicsICdlbG9rLicsXG4gICAgICAnc3l5c2suJywgJ2xva2FrLicsICdtYXJyYXNrLicsICdqb3VsdWsuJ1xuICAgIF0sXG4gICAgW1xuICAgICAgJ3RhbW1pa3V1dGEnLCAnaGVsbWlrdXV0YScsICdtYWFsaXNrdXV0YScsICdodWh0aWt1dXRhJywgJ3RvdWtva3V1dGEnLCAna2Vzw6RrdXV0YScsXG4gICAgICAnaGVpbsOka3V1dGEnLCAnZWxva3V1dGEnLCAnc3l5c2t1dXRhJywgJ2xva2FrdXV0YScsICdtYXJyYXNrdXV0YScsICdqb3VsdWt1dXRhJ1xuICAgIF1cbiAgXSxcbiAgW1xuICAgIFsnVCcsICdIJywgJ00nLCAnSCcsICdUJywgJ0snLCAnSCcsICdFJywgJ1MnLCAnTCcsICdNJywgJ0onXSxcbiAgICBbXG4gICAgICAndGFtbWknLCAnaGVsbWknLCAnbWFhbGlzJywgJ2h1aHRpJywgJ3RvdWtvJywgJ2tlc8OkJywgJ2hlaW7DpCcsICdlbG8nLCAnc3l5cycsICdsb2thJyxcbiAgICAgICdtYXJyYXMnLCAnam91bHUnXG4gICAgXSxcbiAgICBbXG4gICAgICAndGFtbWlrdXUnLCAnaGVsbWlrdXUnLCAnbWFhbGlza3V1JywgJ2h1aHRpa3V1JywgJ3RvdWtva3V1JywgJ2tlc8Oka3V1JywgJ2hlaW7DpGt1dScsICdlbG9rdXUnLFxuICAgICAgJ3N5eXNrdXUnLCAnbG9rYWt1dScsICdtYXJyYXNrdXUnLCAnam91bHVrdXUnXG4gICAgXVxuICBdLFxuICBbWydlS3InLCAnaktyJ10sIFsnZUtyLicsICdqS3IuJ10sIFsnZW5uZW4gS3Jpc3R1a3NlbiBzeW50eW3DpMOkJywgJ2rDpGxrZWVuIEtyaXN0dWtzZW4gc3ludHltw6RuJ11dLFxuICAxLFxuICBbNiwgMF0sXG4gIFsnZC5NLnknLCB1LCAnZC4gTU1NTSB5JywgJ2NjY2MgZC4gTU1NTSB5J10sXG4gIFsnSC5tbScsICdILm1tLnNzJywgJ0gubW0uc3MgeicsICdILm1tLnNzIHp6enonXSxcbiAgWyd7MX0gezB9JywgJ3sxfSBcXCdrbG9cXCcgezB9JywgdSwgdV0sXG4gIFsnLCcsICfCoCcsICc7JywgJyUnLCAnKycsICfiiJInLCAnRScsICfDlycsICfigLAnLCAn4oieJywgJ2Vww6RsdWt1JywgJy4nXSxcbiAgWycjLCMjMC4jIyMnLCAnIywjIzDCoCUnLCAnIywjIzAuMDDCoMKkJywgJyNFMCddLFxuICAnRVVSJyxcbiAgJ+KCrCcsXG4gICdldXJvJyxcbiAge1xuICAgICdBT0EnOiBbXSxcbiAgICAnQVJTJzogW10sXG4gICAgJ0FVRCc6IFtdLFxuICAgICdCQU0nOiBbXSxcbiAgICAnQkJEJzogW10sXG4gICAgJ0JEVCc6IFtdLFxuICAgICdCTUQnOiBbXSxcbiAgICAnQk5EJzogW10sXG4gICAgJ0JPQic6IFtdLFxuICAgICdCUkwnOiBbXSxcbiAgICAnQlNEJzogW10sXG4gICAgJ0JXUCc6IFtdLFxuICAgICdCWU4nOiBbXSxcbiAgICAnQlpEJzogW10sXG4gICAgJ0NBRCc6IFtdLFxuICAgICdDTFAnOiBbXSxcbiAgICAnQ05ZJzogW10sXG4gICAgJ0NPUCc6IFtdLFxuICAgICdDUkMnOiBbXSxcbiAgICAnQ1VDJzogW10sXG4gICAgJ0NVUCc6IFtdLFxuICAgICdDWksnOiBbXSxcbiAgICAnREtLJzogW10sXG4gICAgJ0RPUCc6IFtdLFxuICAgICdFR1AnOiBbXSxcbiAgICAnRVNQJzogW10sXG4gICAgJ0ZJTSc6IFsnbWsnXSxcbiAgICAnRkpEJzogW10sXG4gICAgJ0ZLUCc6IFtdLFxuICAgICdHRUwnOiBbXSxcbiAgICAnR0lQJzogW10sXG4gICAgJ0dORic6IFtdLFxuICAgICdHVFEnOiBbXSxcbiAgICAnR1lEJzogW10sXG4gICAgJ0hLRCc6IFtdLFxuICAgICdITkwnOiBbXSxcbiAgICAnSFJLJzogW10sXG4gICAgJ0hVRic6IFtdLFxuICAgICdJRFInOiBbXSxcbiAgICAnSUxTJzogW10sXG4gICAgJ0lOUic6IFtdLFxuICAgICdJU0snOiBbXSxcbiAgICAnSk1EJzogW10sXG4gICAgJ0tIUic6IFtdLFxuICAgICdLTUYnOiBbXSxcbiAgICAnS1BXJzogW10sXG4gICAgJ0tSVyc6IFtdLFxuICAgICdLWUQnOiBbXSxcbiAgICAnS1pUJzogW10sXG4gICAgJ0xBSyc6IFtdLFxuICAgICdMQlAnOiBbXSxcbiAgICAnTEtSJzogW10sXG4gICAgJ0xSRCc6IFtdLFxuICAgICdMVEwnOiBbXSxcbiAgICAnTFZMJzogW10sXG4gICAgJ01HQSc6IFtdLFxuICAgICdNTUsnOiBbXSxcbiAgICAnTU5UJzogW10sXG4gICAgJ01VUic6IFtdLFxuICAgICdNWE4nOiBbXSxcbiAgICAnTVlSJzogW10sXG4gICAgJ05BRCc6IFtdLFxuICAgICdOR04nOiBbXSxcbiAgICAnTklPJzogW10sXG4gICAgJ05PSyc6IFtdLFxuICAgICdOUFInOiBbXSxcbiAgICAnTlpEJzogW10sXG4gICAgJ1BIUCc6IFtdLFxuICAgICdQS1InOiBbXSxcbiAgICAnUExOJzogW10sXG4gICAgJ1BZRyc6IFtdLFxuICAgICdST04nOiBbXSxcbiAgICAnUlVSJzogW10sXG4gICAgJ1JXRic6IFtdLFxuICAgICdTQkQnOiBbXSxcbiAgICAnU0VLJzogW10sXG4gICAgJ1NHRCc6IFtdLFxuICAgICdTSFAnOiBbXSxcbiAgICAnU1JEJzogW10sXG4gICAgJ1NTUCc6IFtdLFxuICAgICdTVE4nOiBbdSwgJ1NURCddLFxuICAgICdTWVAnOiBbXSxcbiAgICAnVEhCJzogW10sXG4gICAgJ1RPUCc6IFtdLFxuICAgICdUUlknOiBbXSxcbiAgICAnVFREJzogW10sXG4gICAgJ1RXRCc6IFtdLFxuICAgICdVQUgnOiBbXSxcbiAgICAnVVlVJzogW10sXG4gICAgJ1ZFRic6IFtdLFxuICAgICdWTkQnOiBbXSxcbiAgICAnWENEJzogW10sXG4gICAgJ1hQRic6IFtdLFxuICAgICdYWFgnOiBbXSxcbiAgICAnWkFSJzogW10sXG4gICAgJ1pNVyc6IFtdXG4gIH0sXG4gICdsdHInLFxuICBwbHVyYWxcbl07XG4iXX0=