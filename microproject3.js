// import food from './food.json' assert {type: 'json'};
const data=require("./food.json")
// list all the food items
console.log(data);

// list all the food items with category vegetables
let veg=data.filter((vegetables)=>{
    vegetables.category="Vegetable";
    return vegetables;

})
console.log(veg);

// list all the food items with category fruit
let fruit=data.filter((fruits)=>{
    fruits.category="Fruit";
    return fruits;

})
console.log(fruit);

//list all the food items with category protein
let protein=data.filter((proteins)=>{
    proteins.category="Protein";
    return proteins;

})
console.log(protein);

// list all the food items with category nuts
let nut=data.filter((nuts)=>{
    nuts.category="Nuts";
    return nuts;

})
console.log(nut);

// list all the food items with category grains
let grain=data.filter((grains)=>{
    grains.category="Grain";
    return grains;

})
console.log(grain);

// list all the food items with category dairy
let dairy=data.filter((dairies)=>{
    dairies.category="Dairy";
    return dairies;

})
    console.log(dairy);

    // list all the food items with calorie below 100
const less_calorie=data.filter(s => s.calorie < 100);
console.log(less_calorie);

    // list all the food items with calorie above 100
const more_calorie=data.filter(s => s.calorie > 100);
console.log(more_calorie);

    // list all the food items with highest protien content to lowest
const protein1=data.sort((p1,p2)=>p2.protiens-p1.protiens);
console.log(protein1);

    // list all the food items with highest protien content to lowest
const cab=data.sort((c1,c2)=>c1.cab-c2.cab);
console.log(cab)