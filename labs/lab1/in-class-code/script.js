// heavily commented version of what we did in class today

// find instructions on how to get the data here:
// https://github.com/leoneckert/critical-data-and-visualization-spring-2021/tree/main/labs/collect-data-google-form

let data = [
    {
        "timestamp": "2021-01-27T02:48:02.529Z",
        "watermelonWithFetaCheese": 1,
        "cheesePizzaWithRanchDressing": 5,
        "soySauceOnSpaghetti": 3,
        "iceCreamWithChiliSauce": 1,
        "garlicWithRamen": 3
    },
    {
        "timestamp": "2021-01-27T02:48:04.214Z",
        "watermelonWithFetaCheese": 5,
        "cheesePizzaWithRanchDressing": 4,
        "soySauceOnSpaghetti": 5,
        "iceCreamWithChiliSauce": 1,
        "garlicWithRamen": 4
    },
    {
        "timestamp": "2021-01-27T02:48:05.138Z",
        "watermelonWithFetaCheese": 2,
        "cheesePizzaWithRanchDressing": 4,
        "soySauceOnSpaghetti": 4,
        "iceCreamWithChiliSauce": 4,
        "garlicWithRamen": 5
    },
    {
        "timestamp": "2021-01-27T02:48:05.520Z",
        "watermelonWithFetaCheese": 1,
        "cheesePizzaWithRanchDressing": 2,
        "soySauceOnSpaghetti": 3,
        "iceCreamWithChiliSauce": 3,
        "garlicWithRamen": 4
    },
    {
        "timestamp": "2021-01-27T02:48:11.098Z",
        "watermelonWithFetaCheese": 1,
        "cheesePizzaWithRanchDressing": 5,
        "soySauceOnSpaghetti": 5,
        "iceCreamWithChiliSauce": 4,
        "garlicWithRamen": 4
    },
    {
        "timestamp": "2021-01-27T02:48:14.848Z",
        "watermelonWithFetaCheese": 2,
        "cheesePizzaWithRanchDressing": 4,
        "soySauceOnSpaghetti": 3,
        "iceCreamWithChiliSauce": 2,
        "garlicWithRamen": 1
    },
    {
        "timestamp": "2021-01-27T02:48:16.147Z",
        "watermelonWithFetaCheese": 4,
        "cheesePizzaWithRanchDressing": 3,
        "soySauceOnSpaghetti": 4,
        "iceCreamWithChiliSauce": 2,
        "garlicWithRamen": 4
    },
    {
        "timestamp": "2021-01-27T02:48:27.096Z",
        "watermelonWithFetaCheese": 1,
        "cheesePizzaWithRanchDressing": 3,
        "soySauceOnSpaghetti": 5,
        "iceCreamWithChiliSauce": 5,
        "garlicWithRamen": 5
    },
    {
        "timestamp": "2021-01-27T02:48:28.716Z",
        "watermelonWithFetaCheese": 2,
        "cheesePizzaWithRanchDressing": 2,
        "soySauceOnSpaghetti": 3,
        "iceCreamWithChiliSauce": 1,
        "garlicWithRamen": 2
    },
    {
        "timestamp": "2021-01-27T02:48:29.403Z",
        "watermelonWithFetaCheese": 1,
        "cheesePizzaWithRanchDressing": 3,
        "soySauceOnSpaghetti": 4,
        "iceCreamWithChiliSauce": 5,
        "garlicWithRamen": 5
    },
    {
        "timestamp": "2021-01-27T02:48:32.183Z",
        "watermelonWithFetaCheese": 2,
        "cheesePizzaWithRanchDressing": 5,
        "soySauceOnSpaghetti": 5,
        "iceCreamWithChiliSauce": 4,
        "garlicWithRamen": 5
    },
    {
        "timestamp": "2021-01-27T02:48:33.725Z",
        "watermelonWithFetaCheese": 1,
        "cheesePizzaWithRanchDressing": 2,
        "soySauceOnSpaghetti": 3,
        "iceCreamWithChiliSauce": 1,
        "garlicWithRamen": 2
    },
    {
        "timestamp": "2021-01-27T02:48:34.622Z",
        "watermelonWithFetaCheese": 3,
        "cheesePizzaWithRanchDressing": 4,
        "soySauceOnSpaghetti": 2,
        "iceCreamWithChiliSauce": 4,
        "garlicWithRamen": 2
    },
    {
        "timestamp": "2021-01-27T02:48:54.515Z",
        "watermelonWithFetaCheese": 2,
        "cheesePizzaWithRanchDressing": 5,
        "soySauceOnSpaghetti": 5,
        "iceCreamWithChiliSauce": 2,
        "garlicWithRamen": 3
    },
    {
        "timestamp": "2021-01-27T02:49:03.752Z",
        "watermelonWithFetaCheese": 3,
        "cheesePizzaWithRanchDressing": 4,
        "soySauceOnSpaghetti": 2,
        "iceCreamWithChiliSauce": 2,
        "garlicWithRamen": 4
    }
]



// A function Leon wrote to transform the structure of the data
// The function with many comments on description of what kind of
// data it transform into what other kind of data is here:
// https://github.com/leoneckert/critical-data-and-visualization-spring-2021/tree/master/labs/lab1#transform-data


function averageData(data){
  let newData = [];
  let keys = Object.keys(data[ data.length-1 ]);
  for(let i = 0; i < keys.length; i++){
    let key = keys[i];
    let sum = 0;
    let num = 0;
    for(let j = 0; j < data.length; j++){
      let datum = data[j];
      if(key in datum){
        sum += datum[key];
        num++;
      }
    }
    let avg = sum/num;
    if(!isNaN(avg)){
      let newDataPoint = {"name": key, "average": avg, 'numMeasurements': num};
      newData.push(newDataPoint);
    }
  }
  return newData;
}

// here we use the function to transform the data
let transformedData = averageData(data);


// log things to the console as you go to make sure things
// are behaving as intended. I see the data looks good
console.log(transformedData);

// up here, we also select the container (div) on the page
// into which we insert the bars we create in the loop below
let container = document.getElementById("container");


// Loop over the data, once for each datapoint.
// in our case the loop loops 5 times because we have
// 5 foods in out dataset.
for(let i = 0; i < transformedData.length; i++){
  // get the item we deal with at this iteration
  let datapoint = transformedData[i];
  // datapoint looks like this in the first iteration:
  // {
  //   average: 2.066666666666667
  //   name: "watermelonWithFetaCheese"
  //   numMeasurements: 15
  // }

  // get the name of the current
  //  item by "digging" into the datapoint object
  // and the average liking value
  let food = datapoint.name;
  let average = datapoint.average;

  // in each iteration (once for each food)
  // we create a div
  let bar = document.createElement("div");

  // next, we assign the className to the div
  // that will make sure basic bar styling (defined in css/style.css)
  // is applied to it (like height, color, margin)
  bar.className = "bar";
  // because the width is different for each bar
  // we define it right here in javascript using the
  // average value of each data point that we iterate over
  // we stored average value in the variable "average" on line 178
  bar.style.width = (average * 20) + "px";


  // labels
  // so far we have a div that has a width that corresponds
  // to the data value. next we create a p-tag the
  // text (innerHTML) of which is the name of the food currently
  // iterated over
  // we stored the name in the variable "food" on line 184
  // create the tag
  let barname = document.createElement("p");
  // change the text
  barname.innerHTML = food;
  // now here we insert the p tag into the div tag we created above
  bar.appendChild(barname);
  // at this point the element we have created using JavaScript only
  // looks like:
  // <div class="bar"><p>watermelonWithFetaCheese</p></div>
  // (that is for the first datapoint (watermelonWithFetaCheese) that we iterate over)

  // that whole element (the div containing the p tag)
  // we append to the body after all
  // bring it from "JavaScript world" to "HTML world"
  container.appendChild(bar);




}
