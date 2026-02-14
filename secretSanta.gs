/*
Basically:
Check the code under function emailPersonal & emailFullList

To run without sending email (testing/debugging),
1. MailApp is commented, uncomment logger
2. Run function SecretSantaNumbersEmail (or debug)

To run and send email (for real),
1. MailApp is uncommented, comment logger
2. Run function SecretSantaNumbersEmail ONCE ONLY

kalau ada cara lagi bagus untuk debug, guna cara kamu hehe
*/

// just names (deprecated, use numbers)
function sendSecretSantaEmail() {

  // PIC email to get name lists (ONLY ONE)
  var emailPIC = "hivor234@gmail.com";

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

    // insert padlet link here
    body += "Here is the padlet link:\n(padlet link here)";
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
    
    emailPersonal(emailAddress, subject, body);
  }
  emailFullList(emailPIC, listSanta);
}

// numbers
function SecretSantaNumbersEmail() {

  // PIC email to get name lists (ONLY ONE)
  var emailPIC = "";

  // retrieve active form & responses
  var form = FormApp.getActiveForm()
  var formResponses = form.getResponses();

  // Randomize list
  formResponses = formResponses.sort(() => Math.random() - 0.5);

  var listSanta = 'List of Gifters and Giftees (Numbers only):\n\n'
  var listSanta2 = 'List of Gifters and Giftees (Names only):\n\n'

  // this one doesnt give unique numbers
  // let arrayNum = Array.from({length: formResponses.length}, () => Math.floor(Math.random() * 100));

  // this one needs a pre-filled array, then shuffle it
  // probably a better way to do this but this is the one i can think of for now
  for (var arrayNum = [], i = 0; i < formResponses.length; i++) arrayNum[i] = i + 1;
  arrayNum = shuffle(arrayNum);

  // Send email for each one
  for (var i = 0; i < formResponses.length; i++) {
    var body = `LETS GO GOG 🥳🥳🥳\n`
    body += "\n(jangan tertukar nombor ah, baca betul2 hehe)"

    var formResponse = formResponses[i];
    var itemResponses = formResponse.getItemResponses();
    var itemResponse = itemResponses[0];
    var gifteeNum = arrayNum[i];
    body += "\n\n⭐------------------------------⭐"
    body += "\n You will be gifting to number " + gifteeNum + "\n";
    body += "⭐------------------------------⭐"
    //body += itemResponse.getResponse() + "\n\n";

    var recipientIndex = i + 1
    if(recipientIndex >= formResponses.length){
      recipientIndex = 0
    }

    body += "\n\n\n✨------------------------------✨";
    body += "\n\tYour Number is " + arrayNum[recipientIndex] + "\n";
    body += "✨------------------------------✨";

    // insert padlet link here
    body += "\n\nHere is the padlet link:\n(padlet link here)";
    body += "\n\nApa2 kemusykilan bole diajukan kepada ivor, jeremy atau elvy :D";

    formResponse2 = formResponses[recipientIndex];
    itemResponses2 = formResponse2.getItemResponses();
    itemResponse2 = itemResponses2[0];

    listSanta2 += itemResponse2.getResponse() + " -> " + itemResponse.getResponse() + "\n"
    listSanta += arrayNum[recipientIndex] + " -> " + gifteeNum + "\n"
    var emailAddress = formResponses[recipientIndex].getRespondentEmail()
    var subject = "Gift Of Grace: Exchange Gift";
    
    emailPersonal(emailAddress, subject, body);
  }

  emailFullList(emailPIC, listSanta);
  emailFullList(emailPIC, listSanta2);
}

// send individual emails
function emailPersonal(emailAddress, subject, body) {
  // CHANGE THIS BEFORE REAL DEAL
  Logger.log("sending to: " + emailAddress + "\n" + body);
  MailApp.sendEmail(emailAddress, subject, body)
}

function emailFullList(emailPIC, listSanta) {
  // CHANGE THIS BEFORE REAL DEAL
  Logger.log(listSanta)
  MailApp.sendEmail(emailPIC, "Komsel Gift of Grace: Cozy Edition Full List", listSanta)  // pic
}

// shuffle numbers into an array
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