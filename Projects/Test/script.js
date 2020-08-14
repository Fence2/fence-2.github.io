// var btn1 = document.getElementById("btn1");
// const areWeLive = () => console.log("YOO");
// btn1.addEventListener("click", areWeLive);
const array = [1, 2, 10, 16];

const double = [];
const newArray = array.forEach((num) => {
	double.push(num*2);
});

console.log(double);

// map, filter, reduce

const mapArrya = array.map(num => num * 2);


const filterArray = array.filter(num => num > 5);

const reduceArray = array.reduce((accumulator, num) => {
 return accumulator + num;
}, 0);

console.log(reduceArray);