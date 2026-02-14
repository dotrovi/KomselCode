// deprecated
function sendSecretSantaEmail() {
  var form = FormApp.getActiveForm()
  var formResponses = form.getResponses();

  //Randomize list
  formResponses = formResponses.sort(() => Math.random() - 0.5);

  var listSanta = 'List of Gifters and Giftees:\n\n'


  //Send email for each one
  for (var i = 0; i < formResponses.length; i++) {
    var body = `omo gog lagi\n`

    var formResponse = formResponses[i];
    var itemResponses = formResponse.getItemResponses();
    var itemResponse = itemResponses[0];
    body += "\nYou will be gifting to:\n";
    body += itemResponse.getResponse() + "\n\n";
    body += "Here is the padlet link:\https://padlet.com/hivor234/gog25 (yang lama)";
    body += "\n\nApa2 kemusykilan bole diajukan kepada elvy :D";

    var recipientIndex = i + 1
    if(recipientIndex >= formResponses.length){
      recipientIndex = 0
    }

    formResponse2 = formResponses[recipientIndex];
    itemResponses2 = formResponse2.getItemResponses();
    itemResponse2 = itemResponses2[0];

    listSanta += itemResponse2.getResponse() + " -> " + itemResponse.getResponse() + "\n"
    var emailAddress = formResponses[recipientIndex].getRespondentEmail()
    var subject = "Gift Of Grace: Cozy Edition"
    

    // CHANGE THIS BEFORE REAL DEAL
    Logger.log("sending to: " + emailAddress + "\n" + body)
    //MailApp.sendEmail(emailAddress, subject, body)
  }
  // CHANGE THIS BEFORE REAL DEAL
  Logger.log(listSanta)
  //MailApp.sendEmail("salehasundai0987@gmail.com", "Komsel Gift of Grace: Cozy Edition Full List", listSanta)
  //MailApp.sendEmail("hivor234@gmail.com", "Komsel Gift of Grace: Cozy Edition Full List", listSanta)
}

// Use this one
function SecretSantaNumbersEmail() {
  var form = FormApp.getActiveForm()
  var formResponses = form.getResponses();

  //Randomize list
  formResponses = formResponses.sort(() => Math.random() - 0.5);

  var listSanta = 'List of Gifters and Giftees (Numbers only):\n\n'
  var listSanta2 = 'List of Gifters and Giftees (Names only):\n\n'

  // this one doesnt give unique numbers
  // let arrayNum = Array.from({length: formResponses.length}, () => Math.floor(Math.random() * 100));

  // this one needs a pre-filled array, then shuffle it
  for (var arrayNum = [], i = 0; i < formResponses.length; i++) arrayNum[i] = i + 1;
  arrayNum = shuffle(arrayNum);

  // Send email for each one
  for (var i = 0; i < formResponses.length; i++) {
    var body = `omo gog lagi\n`

    var formResponse = formResponses[i];
    var itemResponses = formResponse.getItemResponses();
    var itemResponse = itemResponses[0];
    var gifteeNum = arrayNum[i];
    body += "⭐------------------------------⭐"
    body += "\nYou will be gifting to number " + gifteeNum + "\n";
    body += "⭐------------------------------⭐"
    //body += itemResponse.getResponse() + "\n\n";

    var recipientIndex = i + 1
    if(recipientIndex >= formResponses.length){
      recipientIndex = 0
    }

    body += "\n\n\n⭐------------------------------⭐";
    body += "\nYour Number is " + arrayNum[recipientIndex];
    body += "⭐------------------------------⭐";
    body += "\n\nHere is the padlet link:\https://padlet.com/hivor234/gog25";
    body += "\nApa2 kemusykilan bole diajukan kepada elvy :D";

    formResponse2 = formResponses[recipientIndex];
    itemResponses2 = formResponse2.getItemResponses();
    itemResponse2 = itemResponses2[0];

    listSanta2 += itemResponse2.getResponse() + " -> " + itemResponse.getResponse() + "\n"
    listSanta += arrayNum[recipientIndex] + " -> " + gifteeNum + "\n"
    var emailAddress = formResponses[recipientIndex].getRespondentEmail()
    var subject = "Gift Of Grace"
    

    // CHANGE THIS BEFORE REAL DEAL
    Logger.log("sending to: " + emailAddress + "\n" + body)
    //MailApp.sendEmail(emailAddress, subject, body)
  }
  // CHANGE THIS BEFORE REAL DEAL
  Logger.log(listSanta)
  Logger.log(listSanta2)
  //MailApp.sendEmail("salehasundai0987@gmail.com", "Komsel Gift of Grace: Cozy Edition Full List", listSanta)
  //MailApp.sendEmail("hivor234@gmail.com", "Komsel Gift of Grace: Cozy Edition Full List", listSanta)
  //MailApp.sendEmail("hivor234@gmail.com", "Komsel Gift of Grace: Cozy Edition Full List", listSanta2)
}

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}