// Case1: 1-7 gacha bo'lgan sonlarni hafta kunlariga mos ravishda chiqarish
let day = 3; 
switch (day) {
    case 1: console.log("Dushanba"); break;
    case 2: console.log("Seshanba"); break;
    case 3: console.log("Chorshanba"); break;
    case 4: console.log("Payshanba"); break;
    case 5: console.log("Juma"); break;
    case 6: console.log("Shanba"); break;
    case 7: console.log("Yakshanba"); break;
    default: console.log("Xato");
}

// Case2: Baholarni chiqarish
let grade = 5; 
switch (grade) {
    case 1: console.log("Yomon"); break;
    case 2: console.log("Qoniqarsiz"); break;
    case 3: console.log("Qoniqarli"); break;
    case 4: console.log("Yaxshi"); break;
    case 5: console.log("A'lo"); break;
    default: console.log("Xato");
}

// Case3: Oyni faslga ajratish
let month = 2; 
if (month === 12 || month === 1 || month === 2) {
    console.log("Qish");
} else if (month >= 3 && month <= 5) {
    console.log("Bahor");
} else if (month >= 6 && month <= 8) {
    console.log("Yoz");
} else if (month >= 9 && month <= 11) {
    console.log("Kuz");
} else {
    console.log("Xato");
}

// Case4: Oyning kunlari soni
month = 4; 
if (month === 4 || month === 6 || month === 9 || month === 11) {
    console.log(30);
} else if (month === 2) {
    console.log(28);
} else if (month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12) {
    console.log(31);
} else {
    console.log("Xato");
}

// Case5: A va B ustida arifmetik amallar bajarish
let A = 10, B = 5, operation = 3; 
switch (operation) {
    case 1: console.log(A + B); break;
    case 2: console.log(A - B); break;
    case 3: console.log(A * B); break;
    case 4: 
        if (B !== 0) console.log(A / B); 
        else console.log("Bo'lish mumkin emas");
        break;
    default: console.log("Xato");
}

// Case6: Uzunlik birligini metrlarga o'tkazish
let unit = 3, value = 500; // Misol uchun qiymatlar
switch (unit) {
    case 1: console.log(value * 0.1); break; 
    case 2: console.log(value * 1000); break; 
    case 3: console.log(value); break; 
    case 4: console.log(value * 0.001); break; 
    case 5: console.log(value * 0.01); break; 
    default: console.log("Xato");
}

// Case7: Og'irlik birligini kilogrammlarga o'tkazish
unit = 1; value = 3; 
switch (unit) {
    case 1: console.log(value); break; 
    case 2: console.log(value * 0.000001); break; 
    case 3: console.log(value * 0.001); break; 
    case 4: console.log(value * 1000); break;
    case 5: console.log(value * 100); break; 
    default: console.log("Xato");
}

// Case8: Kiritilgan sanani chiqarish
let D = 28, M = 2; 
if (M > 0 && M <= 12 && D > 0 && ((M === 2 && D <= 28) || (M !== 2 && D <= [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][M - 1]))) {
    console.log(`Sana: ${D}-${M}`);
} else {
    console.log("Xato sana");
}

// Case9: Kiritilgan sanadan keyingi sanani chiqarish
D = 30; M = 4; 
D++;
if (D > [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][M - 1]) {
    D = 1;
    M++;
    if (M > 12) M = 1;
}
console.log(`Keyingi sana: ${D}-${M}`);

// Case10: Robotning holatini aniqlash
{
    
}
let direction = "shimol", command = "chapga buril"; 
let index;
if (direction === "shimol") index = 0;
else if (direction === "sharq") index = 1;
else if (direction === "janub") index = 2;
else if (direction === "g'arb") index = 3;
else {
    console.log("Noto'g'ri yo'nalish");
}

switch (command) {
    case "chapga buril": index = (index + 3) % 4; break;
    case "o'ngga buril": index = (index + 1) % 4; break;
    case "orqaga buril": index = (index + 2) % 4; break;
    default: console.log("Noto'g'ri komanda");
}

const directions = ["shimol", "sharq", "janub", "g'arb"];
console.log(directions[index]);

//---------------------------------------------------------------------------------------
// if1: Butun son berilgan. Agar son musbat bo'lsa, 1 ga oshirilsin, aks holda o'zgarmasin.
let num = 5; 
if (num > 0) num++;
console.log(num);

// if2: Butun son berilgan. Agar son musbat bo'lsa, 1 ga oshirilsin, aks holda 2 ga kamaytirilisin.
num = -3; 
if (num > 0) {
    num++;
} else {
    num -= 2;
}
console.log(num);

// if3: Butun son berilgan. Agar musbat bo'lsa 1 ga oshirilsin, manfiy bo'lsa 2 ga kamaytirilisin. Agar 0 bo'lsa, 10 ga aylansin.
num = 0; 
if (num > 0) {
    num++;
} else if (num < 0) {
    num -= 2;
} else {
    num = 10;
}
console.log(num);

// if4: Uchta butun son berilgan. Shu sonlar orasidan nechta musbat son borligini aniqlash.
let a = 5, b = -3, c = 7; 
let positiveCount = 0;
if (a > 0) positiveCount++;
if (b > 0) positiveCount++;
if (c > 0) positiveCount++;
console.log(positiveCount);

// if5: Uchta butun son berilgan. Shu sonlar orasidan nechta musbat va manfiy son borligini aniqlash.
a = -5; b = 3; c = -7; 
let positiveCount2 = 0, negativeCount = 0;
if (a > 0) positiveCount2++; else if (a < 0) negativeCount++;
if (b > 0) positiveCount2++; else if (b < 0) negativeCount++;
if (c > 0) positiveCount2++; else if (c < 0) negativeCount++;
console.log("Musbat sonlar:", positiveCount2, "Manfiy sonlar:", negativeCount);

// if6: Ikkita butun son berilgan. Shu sonlarning kattasini aniqlash.
a = 10; b = 20; 
let max = a > b ? a : b;
console.log("Katta son:", max);

// if7: Ikkita butun son berilgan. Shu sonlarning kichigi tartib raqamini aniqlash.
a = 10; b = 20; 
let minIndex = a < b ? 1 : 2;
console.log("Kichik son tartib raqami:", minIndex);

// if8: Ikkita butun son berilgan. Shu sonlarning kattasi avval, keyin kichigi chiqarilsin.
{a = 30; b = 25; 
if (a > b) {
    console.log(a, b);
} else {
    console.log(b, a);
}
{}

// if9: A va B haqiqiy sonlari berilgan. Shu sonlarni shunday almashtiringki, A son kichik va B katta bo'lsin.
let A = 15.5, B = 10.2; 
if (A > B) {
    let temp = A;
    A = B;
    B = temp;
}
console.log("A:", A, "B:", B);
}

{
    A = 10; B = 20; 
if (A !== B) {
    A = A + B;
    B = A;
} else {
    A = 0;
    B = 0;
}
console.log("A:", A, "B:", B);
}
// if10: A va B butun sonlari berilgan. Agar ular teng bo'lmasa, ularning yig'indisini o'zlashtirsin, aks holda 0 ni o'zlashtirsin.
