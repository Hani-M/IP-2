var century, year, month, dayOfMonth, dayOfWeek, day;
//Get input
function getInput(){
  century = parseInt(document.getElementById("century").value);
  year = parseInt(document.getElementById("year").value);
  month = parseInt(document.getElementById("month").value);
  dayOfMonth = parseInt(document.getElementById("monthday").value);
  form = document.getElementById('form')
}
//Calculate func
function calculateDay(){
    getInput();
    dayOfWeek = ((((century/4) -2*century-1) + ((5*year/4) ) + ((26*(month+1)/10)) + dayOfMonth) % 7) -1;
    console.log(dayOfWeek); //Test the calculateDay function
    return (Math.floor(dayOfWeek));
}