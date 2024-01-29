// export function getAsString(value: any): string {
//     if (Array.isArray(value)) return value[0];
//     return value || '';
// }
//
// export function phoneNumberFormat(value: any): string {
//     if (!value) return '';
//     value = value.replace(/\s/g, '');
//     return value.replace(/(\d{3})(\d{3})(\d{3,4})/, '$1 $2 $3');
// }
//
// export function emailFormat(value: any): boolean {
//     if (!value) return false;
//     return value.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/) != null;
// }
//
// export function absoluteUrl(path: string) {
//     return `${process.env.NEXT_PUBLIC_BASE_URL}${path}`
// }
//
// export function getPercentage(value: number) {
//     const formatter = new Intl.NumberFormat("en-US", {
//         style: "percent",
//         minimumFractionDigits: 0,
//         maximumFractionDigits: 2
//     });
//
//     return formatter.format(value);
// }
//
// export const Num2VNText = (s_r: any, ccy: any) => {
//     let s = s_r.toString();
//     //process minus case
//     var minus = "";
//     if (s.substring(0, 1) == "-") {
//         s = s.replace("-", "").trim();
//         minus = "trừ";
//     }
//     if (s.substring(0, 1) == "+") {
//         s = s.replace("+", "").trim();
//     }
//
//     var rtnf = "";
//     var l = 0;
//     var i = 0;
//     var j = 0;
//     var dk = 0;
//     var A = [];
//     s = s.replace(/,/g, "");
//     var s1 = "";
//     var strTmp = "";
//     var chk_s = s;
//     chk_s = chk_s.replace(".", "/");
//     if (chk_s.search("/") != -1) {
//         s1 = s.substring(s.indexOf(".") + 1);
//         s = s.substring(0, s.indexOf("."));
//     }
//     var B = [];
//     s = s.trim();
//     l = s.length;
//     if (l > 32) {
//         rtnf = "Number Very Large!";
//         return rtnf;
//     }
//     for (i = 0; i < l; i++) {
//         A[i] = s.substring(i, 1 + i);
//     }
//     for (i = 0; i < l; i++) {
//         if (((l - i) % 3 == 0) && (A[i] == "0") && ((A[i + 1] != "0") || (A[i + 2] != "0"))) {
//             rtnf += " không";
//         }
//         if (A[i] == "2") { rtnf += " hai"; }
//         if (A[i] == "3") { rtnf += " ba"; }
//         if (A[i] == "4") { rtnf += " bốn"; }
//         if (A[i] == "6") { rtnf += " sáu"; }
//         if (A[i] == "7") { rtnf += " bảy"; }
//         if (A[i] == "8") { rtnf += " tám"; }
//         if (A[i] == "9") { rtnf += " chín"; }
//         if (A[i] == "5") {
//             if ((i > 0) && ((l - i) % 3 == 1) && (A[i - 1] != "0")) {
//                 rtnf += " lăm";
//             } else {
//                 rtnf += " năm";
//             }
//         }
//         if ((i > 2) && (A[i] == "1") && ((l - i) % 3 == 1) && (Number(A[i - 1]) > 1)) {
//             rtnf += " mốt";
//         } else if ((A[i] == "1") && ((l - i) % 3 != 2)) {
//             rtnf += " một";
//         }
//         if ((l - i) % 3 == 2 && A[i] != "0" && A[i] != "1") {
//             rtnf += " mươi";
//         } else if ((l - i) % 3 == 2 && A[i] != "0") {
//             rtnf += " mười";
//         }
//         if (i == 0) {
//             if ((l - i) % 3 == 2 && A[i] == "0" && A[i + 1] != "0") {
//                 rtnf += " không";
//             }
//         } else {
//             if ((l - i) % 3 == 2 && A[i] == "0" && A[i + 1] != "0") {
//                 rtnf += " lẻ";
//             }
//         }
//         if ((l - i) % 3 == 0 && (A[i + 1] != "0" || A[i + 2] != "0")) {
//             rtnf += " trăm";
//         } else if ((l - i) % 3 == 0 && A[i] != "0") {
//             rtnf += " trăm";
//         }
//         if ((l - i) == 4) {
//             rtnf += " nghìn";
//         }
//         if ((l - i) == 7) {
//             rtnf += " triệu";
//         }
//         if ((l - i) == 10) {
//             rtnf += " tỷ";
//         }
//         if ((l - i) == 13) {
//             rtnf += " nghìn tỷ";
//         }
//         if ((l - i) == 16) {
//             rtnf += " triệu tỷ";
//         }
//         if ((l - i) == 19) {
//             rtnf += " tỷ tỷ";
//         }
//         if ((l - i) == 22) {
//             rtnf += " triệu tỷ tỷ";
//         }
//         if ((l - i) == 25) {
//             rtnf += " triệu tỷ tỷ";
//         }
//         if ((l - i) == 28) {
//             rtnf += " tỷ tỷ tỷ";
//         }
//         if ((l - i) % 3 == 0 && A[i] == "0" && A[i + 1] == "0" && A[i + 2] == "0") {
//             i = i + 2;
//         }
//         if ((l - i) % 3 == 1) {
//             dk = 1;
//             for (j = i; j < l; j++) {
//                 if (A[j] != "0") {
//                     dk = 0;
//                 }
//             }
//         }
//         if (dk == 1) break;
//     }
//
//     if (ccy == "USD") {
//         rtnf += " đô";
//         if (s1?.length > 0) //Đọc số lẻ
//         {
//             l = s1?.length
//             if (l > 8) {
//                 rtnf += " ERROR!!!";
//                 return rtnf;
//             }
//             for (i = 0; i < l; i++) {
//                 B[i] = s1.substring(i, 1);
//             }
//             strTmp = "";
//             //Dịch Tạm
//             for (i = 0; i < 2; i++) {
//                 if ((i > 0) && (B[0] != "0") && (B[0] != "1")) {
//                     strTmp += " mươi";
//                 }
//
//                 if (B[i] == "1") {
//                     if (i == 0) {
//                         strTmp += " mười";
//                     } else {
//                         if (B[0] == "1") {
//                             strTmp += " một";
//                         } else {
//                             strTmp += " mốt";
//                         }
//                     }
//                 }
//
//                 switch (B[i]) {
//                     case "2":
//                         strTmp += " hai";
//                         break;
//                     case "3":
//                         strTmp += " ba";
//                         break;
//                     case "4":
//                         strTmp += " bốn";
//                         break;
//                     case "5":
//                         strTmp += " năm";
//                         break;
//                     case "6":
//                         strTmp += " sáu";
//                         break;
//                     case "7":
//                         strTmp += " bảy";
//                         break;
//                     case "8":
//                         strTmp += " tám";
//                         break;
//                     case "9":
//                         strTmp += " chín";
//                         break;
//                 }
//             }
//         }
//         if (strTmp != "") {
//             rtnf = rtnf + " và" + strTmp + " cen";
//         }
//     }
//
//     if (ccy == "VND") {
//         rtnf += " đồng";
//     }
//
//     rtnf = minus + rtnf; //process minus case
//     let rmSpace = rtnf.trim()
//     return rmSpace.charAt(0).toUpperCase() + rmSpace.slice(1);
// }