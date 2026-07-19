const restraunt=[];
for( let i =0;i<100;i++){
    const obj={};
    obj['image']=['first.jpeg',
        "second",
        "third",
        "fourth",
        "fifth",
        "sixth",
        "seventh",
        "eighth",
        "ninth",
        "tenth"
      ][Math.floor(Math.random()*10)]

      obj['name']=[ "The Golden Spoon",
        "Spice Garden",
        "Urban Bites",
        "Royal Tandoor",
        "Ocean Grill",
        "Bella Italia",
        "Saffron Kitchen",
        "The Hungry Fork",
        "Flame & Grill",
        "Green Leaf Cafe"
      ][Math.floor(Math.random()*10)]


      obj['rating']=Math.floor(Math.random()*5+1);


      obj['food_type']= ["Pizza",
      "Burger",
      "Pasta",
      "Biryani",
      "Sushi",
      "Tacos",
      "Sandwich",
      "Noodles",
      "Salad",
      "Steak"
    ][Math.floor(Math.random()*10)]

    obj['price_for_two']=Math.floor(Math.random()*2401+100);

    obj['location']=[
        "Connaught Place",
        "Chandni Chowk",
        "Karol Bagh",
        "Hauz Khas",
        "Saket",
        "Rajouri Garden",
        "Lajpat Nagar",
        "Dwarka",
        "Rohini",
        "Greater Kailash"
      ][Math.floor(Math.random()*10)]


    obj['distance']=    Math.floor(Math.random()*10+1);
    obj['offers']=Math.floor(Math.random()*30);
    obj['Alcohal']=Math.random()>0.7;
    obj['Res_open_time']=   Math.floor(Math.random()*24);
    obj['res_closing_time']=(  obj['Res_open_time']+12)%24;


restraunt.push(obj);
}

console.log(restraunt);
// dummy data create kr liye hain...

//array to json 
const jsonData = JSON.stringify(restraunt, null, 2);
console.log(jsonData);


