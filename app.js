// Question 1
    document.write(" <br> <h2> Question 1</h2> <br> ");
    var studentNames = ["Name","Email"];
    document.write(studentNames);
// Question 2
// Question 3

    document.write(" <br> <h2> Question 3</h2> <br> ");
    var stringArr = ["Alex","Linken","Danziee"];
    document.write(stringArr);

// Question 4

    document.write(" <br> <h2> Question 4</h2> <br> ");
    var numbArr = [1,2,3,4,5,6];
    document.write(numbArr);

// Question 5
    document.write(" <br> <h2> Question 5</h2> <br> ");
    var booleanArr = [true,false];
    document.write(booleanArr);

// Question 6
    document.write(" <br> <h2> Question 6</h2> <br> ");
    var mixedArr = [01,"Danziee",true];
    document.write(mixedArr);

// Question 7

    document.write(" <br> <h2> Question 7</h2> <br> ");
    var networkArr=["Jazz","Telenor","Warid","Zong","Ufone"];
    document.write(networkArr);

// Question 8

    document.write(" <br> <h2> Question 8</h2> <br> ");
    var eduArr = ["SSC","HSC","BSC","BS","BCOM","MS","MCOM","M.Phil","P.HD"];
    document.write(eduArr);

// Question 9
    document.write(" <br> <h2> Question 9</h2> <br> ");
    var input = prompt("  Question 9 : Enter Movies Name");
    var moviesArr = [input];
    document.write(moviesArr);
    document.write(" <br> Length Of Array : " + moviesArr.length);

// Question 10 

    document.write(" <br> <h2> Question 10</h2> <br> ");
    var carArr = ["Lamborghini","Audi","Ford","Alfa Romeo"];
    var firstIndexOfCar = carArr.indexOf("Lamborghini");
    var lastIndexOfCar = carArr.length-1;
    document.write(" <br> First Index Of Array : " + firstIndexOfCar);
    document.write(" <br> Car On Frist Index : " + carArr[firstIndexOfCar]);
    document.write(" <br> Last Index Of Array : " + lastIndexOfCar );
    document.write(" <br> Car On Last Index : " + carArr[lastIndexOfCar]);

// Question 11
    document.write(" <br> <h2> Question 11</h2> <br> ");
    var stNameArr = ["Danziee" , "Dani","Sunny"];
    var stScoreArr = [450 , 320 , 480];
    var totalScore = 500;

    document.write("Score Of " + stNameArr[0] + " Is " + stScoreArr[0] + ". Percentage Is : " + (stScoreArr[0]*100)/totalScore + "%");
    document.write(" <br> Score Of " + stNameArr[1] + " Is " + stScoreArr[1] + ". Percentage Is : " + (stScoreArr[1]*100)/totalScore + "%" );
    document.write(" <br> Score Of " + stNameArr[2] + " Is " + stScoreArr[2] + ". Percentage Is : " + (stScoreArr[2]*100)/totalScore + "%" );

// Question 12 

    document.write(" <br> <h2> Question 12</h2> <br> ");
    document.write("<h2>Initial Array</h2>");
    var colorNames = ["Red","Green","Blue"];
    document.write(colorNames);

    document.write("<h3>Add Color To The Start Of Array</h3>");
    var clrInput = prompt(" Question 12 : Enter Color TO Add At The Begining Of Array");
    colorNames.unshift(clrInput);
    document.write(colorNames);

    
    document.write("<h3>Add Color To The End Of Array</h3>");
    var clrInput = prompt(" Question 12 : Enter Color TO Add At The End Of Array");
    colorNames.push(clrInput);
    document.write(colorNames);

    document.write("<h3>Add Two Or More Color To The Start Of Array</h3>");
    colorNames.unshift("Orange","LightBlue","Cyan");
    document.write(colorNames);

    document.write("<h3>Delete First Color Form The Start Of Array</h3>");
    colorNames.shift();
    document.write(colorNames);

    document.write("<h3>Delete Last Color Form The Start Of Array</h3>");
    colorNames.pop();
    document.write(colorNames);

    document.write("<h3>Add Color As Per Your Desired Position</h3>");
    var desiredIndex = +prompt(" Question 12 : Enter Desired Index To Add Color");
    var desiredColor = prompt(" Question 12 : Enter Desired Color");
    colorNames.splice(desiredIndex,0,desiredColor);
    document.write(colorNames);

    document.write("<h3>Delete Color As Per Your Desired Position</h3>");
    var desiredIndexToDlt = +prompt(" Question 12 :  Enter Index Number");
    var numOfClrToDlt = +prompt(" Question 12 : Enter Number Of Colors To Delete");
    colorNames.splice(desiredIndexToDlt,numOfClrToDlt);
    document.write(colorNames);

// Question 13 

    document.write(" <br> <h2> Question 13</h2> <br> ");
    var stdScore = [345,200,198,500];
    document.write(" <br> Initial Array : " + stdScore);
    stdScore.sort();
    document.write(" <br> Sorted Array : "+ stdScore);


// Question 14

    document.write(" <br> <h2> Question 14</h2> <br> ");
    var fruits = ["Banana","Coconut","Pineapple","Apple"];
    document.write(" <br> Initial Array : " + fruits);
    fruits.sort();
    document.write(" <br> Sorted Array : "+ fruits);


// Question 15

    document.write(" <br> <h2> Question 15</h2> <br> ");
    document.write("<h3>Initial Array</h3>");
    var citiesArr = ["Karachi","Islamabad","Lahore","Multan","Rawalpindi"];
    document.write(citiesArr);
    var selecteCities = citiesArr.slice(2,5);
    document.write("<h3> Selected Cities Array</h3>");
    document.write(selecteCities);

// Question 16 

    document.write(" <br> <h2> Question 16</h2> <br> ");
    var joinString = ["This","Is","My","Cat"];
    document.write("<h3>Initial Array</h3>");
    document.write(joinString);
    
    joinString.join();
    document.write("<h3>After Join</h3>");
    document.write(joinString.join(" "));

// Question 17 

    document.write(" <br> <h2> Question 17</h2> <br> ");
    var devices = ["Keyboard","Mouse","Printer","Monitor"];
    document.write("<h3>Initial Array</h3>");
    document.write(devices);
    document.write("<h3>FIFO</h3>");
    document.write(" <br> Out : " + devices.shift());
    document.write(" <br> Out : " + devices.shift());
    document.write(" <br> Out : " + devices.shift());
    document.write(" <br> Out : " + devices.shift());


// Question 18 

    document.write(" <br> <h2> Question 18</h2> <br> ");
    var devicesLifo = ["Keyboard","Mouse","Printer","Monitor"];
    document.write("<h3>Initial Array</h3>");
    document.write(devicesLifo);
    document.write("<h3>LIFO</h3>");
    document.write(" <br> Out : " + devicesLifo.pop());
    document.write(" <br> Out : " + devicesLifo.pop());
    document.write(" <br> Out : " + devicesLifo.pop());
    document.write(" <br> Out : " + devicesLifo.pop());

// Question 19 

    document.write(" <br> <h2> Question 19</h2> <br> ");
    var mobileArr = ["Nokia","Samsung","HTC","Apple"];

    document.write("<select>  <option>"+ mobileArr[0] +"</option><option>"+ mobileArr[1] +"</option><option>"+ mobileArr[2] +"</option><option>"+ mobileArr[3] +"</option>  </select>");


// Question 20 

    document.write(" <br> <h2> Question 20</h2> <br> ");
    document.write("<h3>Empty Multidimensionl Array</h3>");
    var emptyMultiArr = [[],[],[]];
    document.write(emptyMultiArr);


// Question 21

    document.write(" <br> <h2> Question 21</h2> <br> ");
    document.write("<h3>Multidimensionl Array</h3>");
    var multiArr = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
    document.write( "<br>" + multiArr[0]);
    document.write( "<br>" + multiArr[1]);
    document.write( "<br>" + multiArr[2]);