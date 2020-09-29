let alert = console.log

function getWeekDay(date){
  let days = ['SU', 'MO' , 'TU' , 'WE', 'TH' , 'FR' , 'SA'];
  return days[date.getDay()];
}

let date = new Date(2020 ,9 , 29);
alert (getWeekDay(date))