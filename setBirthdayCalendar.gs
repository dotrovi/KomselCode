/*
This code is to set birthday of ahli in Komsel Google Calendar

sejujurnya, tak berapa berguna, so just stick with birthday reminders
klau mau guna ni, pandai2 lh (or contact ivor)
*/

// gets last submitted form, then create calendar event based on the birthday and nickname in the form
function setBirthdayCalendarKomsel(event) {
  var form = FormApp.getActiveForm();
  var formResponses = form.getResponses();

  var formResponse = event.response;
  var itemResponses = formResponse.getItemResponses();

  var itemResponse = itemResponses[2];  // birthdate, based on google form question order
  var birthday = itemResponse.getResponse();

  var itemResponse = itemResponses[1];  // nickname, based on google form question order
  var nickname = itemResponse.getResponse();

  var formattedBirthday = new Date(birthday);
  formattedBirthday.setFullYear(2025);

  var title = nickname +"'s birthday!";
  Logger.log(birthday);
  Logger.log(formattedBirthday);

  /*
  creation of event below is very spaghetti

  to make it better:
  semester starts in October
  so take account whole year 
  
  ex: Oct 2025 - Sep 2026
  do logic so birthday calendar is between Oct 2025 - Sep 2026 only
  (hehe)
  */


  CalendarApp.createAllDayEvent(
    title, 
    formattedBirthday,
    {location: 'Komsel UTM', description: 'Wish them a happy birthday!'}
  );

  formattedBirthday.setFullYear(2026);

  CalendarApp.createAllDayEvent(
    title, 
    formattedBirthday,
    {location: 'Komsel UTM', description: 'Wish them a happy birthday!'}
  );
}

function setBirthdayCalendarKomselManual() {
  var form = FormApp.getActiveForm();
  var formResponses = form.getResponses();

  var formResponse = formResponses[6];
  var itemResponses = formResponse.getItemResponses();

  var itemResponse = itemResponses[2];  // birthdate, based on google form question order
  var birthday = itemResponse.getResponse();

  var itemResponse = itemResponses[1];  // nickname, based on google form question order
  var nickname = itemResponse.getResponse();

  var formattedBirthday = new Date(birthday);
  formattedBirthday.setFullYear(2025);

  var title = nickname +"'s birthday!";
  Logger.log(birthday);
  Logger.log(formattedBirthday);

  CalendarApp.createAllDayEvent(
    title, 
    formattedBirthday,
    {location: 'Komsel UTM', description: 'Wish them a happy birthday!'}
  );

  formattedBirthday.setFullYear(2026);

  CalendarApp.createAllDayEvent(
    title, 
    formattedBirthday,
    {location: 'Komsel UTM', description: 'Wish them a happy birthday!'}
  );
}