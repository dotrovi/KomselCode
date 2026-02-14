function birthdayReminder()
{
  let spreadsheet = SpreadsheetApp.openById('1pK6K-srpnUZa1g-fKnzl6mfoGBZpW8hYfClHXqNbHKw'),
      sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[0]),
      lastRow = sheet.getLastRow(),
      lastCol = sheet.getLastColumn(),
      data = sheet.getRange(2, 2, lastRow-1, lastCol).getValues();

  const myEmail = ["hivor234@gmail.com", "praycesm@gmail.com", "shaunbryan290101@gmail.com", "rayenraymond12@gmail.com", "salehasundai0987@gmail.com", "anziedyana30@gmail.com", "pristinievinee@gmail.com", "crystalkaren2005@gmail.com", "elijahxavier23@gmail.com", "umangsengalang7@gmail.com", "essone.fith.77@gmail.com", "bluecat0215joy@gmail.com", "ashleyjaty04@gmail.com", "jeremy.geafri05@gmail.com", "aelldo@graduate.utm.my", "laurathovenin@gmail.com", "jerichoolsen@gmail.com"];
  let emailLen = myEmail.length;

  for (let index = 0; index < lastRow-1; index++)
  {
    let birthday = data[index][2];
    //Logger.log(birthday);

    if (birthday == '-')
      {
        continue;
      }

    birthday = Utilities.formatDate(birthday, 'GMT+8', 'dd/MM');
    let today = new Date();
    today = Utilities.formatDate(today, 'GMT+8', 'dd/MM');

    var url = "https://docs.google.com/spreadsheets/d/1pK6K-srpnUZa1g-fKnzl6mfoGBZpW8hYfClHXqNbHKw/edit?usp=sharing";

    for (let i = 0; i < emailLen; i++)
    {
      let emailNow = myEmail[i];
      if (birthday == today)
      {
        //MailApp.sendEmail(emailNow, "Birthday Komsel!", "Today is " + data[index][1] + "'s birthday! Wish them a happy birthday in komsel!\n\n(Sila re-check semula birthday date dalam sheets sekiranya code ini tersilap calculate birthday :D)\n\nLink to sheets:\n" + url);
        Logger.log(birthday);
      } 
    }
  }
}

function birthdayReminderFix1()
{
  let spreadsheet = SpreadsheetApp.openById('1pK6K-srpnUZa1g-fKnzl6mfoGBZpW8hYfClHXqNbHKw'),
      sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[0]),
      lastRow = sheet.getLastRow(),
      lastCol = sheet.getLastColumn(),
      data = sheet.getRange(2, 2, lastRow-1, lastCol).getValues();

  const myEmail = ["hivor234@gmail.com", "praycesm@gmail.com", "shaunbryan290101@gmail.com", "rayenraymond12@gmail.com", "salehasundai0987@gmail.com", "anziedyana30@gmail.com", "pristinievinee@gmail.com", "crystalkaren2005@gmail.com", "elijahxavier23@gmail.com", "umangsengalang7@gmail.com", "essone.fith.77@gmail.com", "bluecat0215joy@gmail.com", "ashleyjaty04@gmail.com", "jeremy.geafri05@gmail.com", "aelldo@graduate.utm.my", "laurathovenin@gmail.com", "jerichoolsen@gmail.com"];
  
  let emailLen = myEmail.length;

    for (let index = 0; index < lastRow-1; index++)
    {
      let birthday = data[index][2];

      // siapa yg manually letak data tu dngn date '-', faham2 lh (tak marah hehe)
      if (birthday == '-')
      {
        continue;
      }

      birthday = Utilities.formatDate(birthday, 'GMT+8', 'dd/MM');

      let today = new Date();
      today = Utilities.formatDate(today, 'GMT+8', 'dd/MM');

      //Logger.log(birthday);

      var url = "https://docs.google.com/spreadsheets/d/1pK6K-srpnUZa1g-fKnzl6mfoGBZpW8hYfClHXqNbHKw/edit?usp=sharing";

      if (birthday == today)
      {
        for (let i = 0; i < emailLen; i++)
        {
          let emailNow = myEmail[i];
          MailApp.sendEmail(emailNow, "Birthday Komsel!", "Today is " + data[index][1] + "'s birthday! Wish them a happy birthday in komsel!\n\n(Sila re-check semula birthday date dalam sheets sekiranya code ini tersilap calculate birthday :D)\n\nLink to sheets:\n" + url);
          //Logger.log(data[index][1])
          //Logger.log(birthday);
        }
      }
    }
}

function testing()
{
  let spreadsheet = SpreadsheetApp.openById('1pK6K-srpnUZa1g-fKnzl6mfoGBZpW8hYfClHXqNbHKw'),
      sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[0]),
      lastRow = sheet.getLastRow(),
      lastCol = sheet.getLastColumn(),
      data = sheet.getRange(2, 2, lastRow-1, lastCol).getValues();

      Logger.log(lastRow);
}