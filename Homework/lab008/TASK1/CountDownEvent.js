var dateEvent = "1 1 2021";

function changeEvenName(){
    let eventName = $("#eventName").val();
    console.log(eventName);
    $("body h1:first-child").text("Countdown to "+eventName)
}

function changeEventDate(){
    dateEvent = $("#date").val();
    dateEvent = dateEvent.split("-")
    dateEvent.push(dateEvent[1]);
    dateEvent.splice(1,1);
    dateEvent = dateEvent[2] + " " +  dateEvent[1] + " "  + dateEvent[0] + " " ;
    
}

function countdown() {
  let now = Math.floor(Date.now() / 1000);
  let eventDate = Math.floor(Date.parse(dateEvent) / 1000);
  let interval = eventDate - now;
  let year = Math.floor(interval / 31557600);
  let month = Math.floor((interval % 31557600) / 2629800);
  let day = Math.floor(((interval % 31557600) % 2629800) / 86400);
  let hour = Math.floor((((interval % 31557600) % 2629800) % 86400) / 3600);
  let min = Math.floor(
    ((((interval % 31557600) % 2629800) % 86400) % 3600) / 60
  );
  let sec = Math.floor(
    ((((interval % 31557600) % 2629800) % 86400) % 3600) % 60
  );

  $("body h1:nth-child(2)").text(
    year +
      " year " +
      month +
      " Month " +
      day +
      " Day " +
      hour +
      " Hour " +
      min +
      " Minute " +
      sec +
      " Second "
  );
}

function startup() {
    changeEvenName();
  setInterval(countdown, 100);
}
