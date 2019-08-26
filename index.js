function takeANumber(line_people,name){
  line_people.push(name);
  //var position = -1;
  //for (var i = 0 ; i < line_people.length ; i++)
  //{
  //  if (line_people[i] === name 
  //}
 var position =  line_people.length;
 return "Welcome, "+name+". You are number "+position+" in line.";
 
}
//want to change so that we give them just a number. 
//"Welcome, you are number x".
var numberOfCustomers = 0;
function takeANumber(line_people){
  //var number = 0; 
  
  line_people.push(++numberOfCustomers);
  
  return "Welcome, you are number "+numberOfCustomers;
}

function nowServing(currentDeliLine){
  if (currentDeliLine === undefined || currentDeliLine.length === 0)
  {
    return "There is nobody waiting to be served!";
  }
  else
  {
    return "Currently serving "+currentDeliLine.shift()+".";
  }
    
}

function currentLine(line_people){
  if (line_people === undefined || line_people.length ===0 )
  {
   return "The line is currently empty."; 
  }
  else
  {
  var returnString = "The line is currently: ";
  
  for (var i = 0 ; i < line_people.length ; i++)
  {
    var perLoop = (i+1) + ". " + line_people[i];
    if (i !== line_people.length-1) { perLoop += ", "; }
    returnString += perLoop;
  }
  
  return returnString;
  }
}