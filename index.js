//Marcella Indarwati - Web C - Afternoon
//Membuat contoh program Javascript

//If...Else
let price = 70000;
if (price > 50000) {
    console.log("Selamat, anda mendapatkan diskon!");
} else {
    console.log("Mohon maaf, anda belum mendapatkan diskon!");
}

//Nested If
let nilai = 90;
if (nilai >=85 ){
    console.log("Selamat nilai anda, A");
} else if (nilai <=84 && nilai >=80) {
    console.log("Selamat nilai anda, A-");
} else if (nilai <=79 && nilai >=75 ) {
    console.log("Selamat nilai anda, B+");
} else if (nilai <=74 && nilai >= 70) {
    console.log("Selamat nilai anda, B");
} else if (nilai <=69 && nilai >= 65) {
    console.log("Selamat nilai anda, B-");
} else if (nilai <= 64 && nilai >= 60 ) {
    console.log("Selamat nilai anda, C+");
} else if (nilai <= 59 && nilai >= 55) {
    console.log("Selamat nilai anda, C");
} else if (nilai <= 54 && nilai >= 50) {
    console.log("Selamat nilai anda, C-");
} else if (nilai <=50 && nilai >= 40) {
    console.log("Selamat nilai anda, D");
} else {
    console.log("Selamat nilai anda, E");
}

//Switch Case
let grade = "A";
switch (grade) {
    case "A" :
        console.log("Excellent!");
        break;
    case "A-" :
        console.log("Amazing!");
        break;
    case "B+" :
        console.log("Awesome!");
        break;
    case "B" :
        console.log("Very Good!");
        break;
    case "B-" :
        console.log("Good!");
        break;
    case "C+" :
        console.log("Fighting!");
        break;
    case "C" :
        console.log("You Can Do It!");
        break;
    case "C-" :
        console.log("Study More!");
        break;
    case "D" :
        console.log("OMG, This is not good:(");
        break;
    case "E" :
        console.log("So Bad:((");
        break;
    default :
        console.log("!!Kosong!!");
}

//For Statement
let p;
for (p=1; p<=10; p++) {
    console.log("Ini adalah angka " + p);
}

//While
let y= 1;
while (y<=10) {
    console.log("Ini adalah angka " + y);
    y++;
}

//Do...While
let z= 1;
do {
    console.log("Ini adalah angka " + z);
    z++;
}
while (z <= 10);

//Function
let nickname = "Marcella";
function nama() {
    console.log("Nama saya itu " + nickname);
}
nama();