/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

// THIS CODE IS GENERATED - DO NOT MODIFY.
const u = undefined;

function plural(n: number): number {

if (n === 0)
    return 0;
if (n === 1)
    return 1;
if (n === 2)
    return 2;
if (n % 100 === Math.floor(n % 100) && (n % 100 >= 3 && n % 100 <= 10))
    return 3;
if (n % 100 === Math.floor(n % 100) && (n % 100 >= 11 && n % 100 <= 99))
    return 4;
return 5;
}

export default ["ar-JO",[["ص","م"],u,u],[["ص","م"],u,["صباحًا","مساءً"]],[["ح","ن","ث","ر","خ","ج","س"],["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"],u,["أحد","إثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"]],u,[["ك","ش","آ","ن","أ","ح","ت","آ","أ","ت","ت","ك"],["كانون الثاني","شباط","آذار","نيسان","أيار","حزيران","تموز","آب","أيلول","تشرين الأول","تشرين الثاني","كانون الأول"],u],u,[["ق.م","م"],u,["قبل الميلاد","ميلادي"]],6,[5,6],["d‏/M‏/y","dd‏/MM‏/y","d MMMM y","EEEE، d MMMM y"],["h:mm a","h:mm:ss a","h:mm:ss a z","h:mm:ss a zzzz"],["{1} {0}",u,u,u],[".",",",";","‎%‎","‎+","‎-","E","×","‰","∞","ليس رقمًا",":"],["#,##0.###","#,##0%","¤ #,##0.00","#E0"],"JOD","د.أ.‏","دينار أردني",{"AED":["د.إ.‏"],"ARS":[u,"AR$"],"AUD":["AU$"],"BBD":[u,"BB$"],"BHD":["د.ب.‏"],"BMD":[u,"BM$"],"BND":[u,"BN$"],"BSD":[u,"BS$"],"BZD":[u,"BZ$"],"CAD":["CA$"],"CLP":[u,"CL$"],"CNY":["CN¥"],"COP":[u,"CO$"],"CUP":[u,"CU$"],"DOP":[u,"DO$"],"DZD":["د.ج.‏"],"EGP":["ج.م.‏","E£"],"FJD":[u,"FJ$"],"GBP":["UK£"],"GYD":[u,"GY$"],"HKD":["HK$"],"IQD":["د.ع.‏"],"IRR":["ر.إ."],"JMD":[u,"JM$"],"JOD":["د.أ.‏"],"JPY":["JP¥"],"KWD":["د.ك.‏"],"KYD":[u,"KY$"],"LBP":["ل.ل.‏","L£"],"LRD":[u,"$LR"],"LYD":["د.ل.‏"],"MAD":["د.م.‏"],"MRU":["أ.م."],"MXN":["MX$"],"NZD":["NZ$"],"OMR":["ر.ع.‏"],"QAR":["ر.ق.‏"],"SAR":["ر.س.‏"],"SBD":[u,"SB$"],"SDD":["د.س.‏"],"SDG":["ج.س."],"SRD":[u,"SR$"],"SYP":["ل.س.‏","£"],"THB":["฿"],"TND":["د.ت.‏"],"TTD":[u,"TT$"],"TWD":["NT$"],"USD":["US$"],"UYU":[u,"UY$"],"XXX":["***"],"YER":["ر.ي.‏"]},"rtl", plural];
