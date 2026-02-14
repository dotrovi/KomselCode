/*
- Use birthdayReminderFix1
- change spreedsheet id to current komsel keahlian sheet
- change myEmail to current AJK emails
- uncomment mailApp to send emails

need fixing (malas buat hehe):
1. mapping of data (currently hardcoded to columns from sheet, if the sheet changes then the code will break)
2. Exceptions (never trust data)
3. maybe a better way to send emails than current spaghetti implementation
*/

function birthdayReminder()
{
  // change id to current komsel keahlian sheet
  let spreadsheet = SpreadsheetApp.openById(''),
      sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[0]),
      lastRow = sheet.getLastRow(),
      lastCol = sheet.getLastColumn(),
      data = sheet.getRange(2, 2, lastRow-1, lastCol).getValues();
  
  // change myEmail to current AJK emails
  const myEmail = ["someone@somewhere.com", "test@test.com"];
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

    // the url of current komsel keahlian sheet
    // change to current komsel keahlian sheet
    var url = "";

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
  // change id to current komsel keahlian sheet
  let spreadsheet = SpreadsheetApp.openById(''),
      sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[0]),
      lastRow = sheet.getLastRow(),
      lastCol = sheet.getLastColumn(),
      data = sheet.getRange(2, 2, lastRow-1, lastCol).getValues();

  // change myEmail to current AJK emails
  const myEmail = ["someone@somewhere.com", "test@test.com"];
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

    // the url of current komsel keahlian sheet
    // change to current komsel keahlian sheet
      var url = "";

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
  let spreadsheet = SpreadsheetApp.openById(''),
      sheet = SpreadsheetApp.setActiveSheet(spreadsheet.getSheets()[0]),
      lastRow = sheet.getLastRow(),
      lastCol = sheet.getLastColumn(),
      data = sheet.getRange(2, 2, lastRow-1, lastCol).getValues();

      Logger.log(lastRow);
}