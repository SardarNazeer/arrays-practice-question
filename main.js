// Arrays Practice  Question From YT

// Q1) for a given array with marks of an student -> [88,98,56,45,92,76,22] find the average marks of an student

let marks = [88,98,56,45,92,76,22];
sum = 0;

document.write('Average Of Student');

// for of loop 
for(let val of marks){
    sum += val;
}

let average = sum / marks.length;

document.write('<br>' + average);

// Q2) for a given array with prices of 5 item -> [250,650,999.1209,764,2567]
// All item have an offer of 10% off on them. change the array to store final price after applying offer 

let items = [250,650,999,1209,764,2567];
let i = 0;

for(let val of items){
    document.write('value before discount' + " " + "=" + " " + val +  "<br>");
    offer = val / 10;
    items[i] = items[i] - offer;
    document.write('value after discount' + "=" + " " + items[i] +  '<br>')
    i++;
}