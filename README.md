# KomselCode
Repo for all projects related to Komsel UTM JB.

| File | Explanation | Apps Script Extension
| --- | --- | --- |
| [appsscript.json](https://github.com/dotrovi/KomselCode/blob/main/appsscript.json) | Configuration, automatically done by this [Google App Script Github Extension](https://chromewebstore.google.com/detail/google-apps-script-github/lfjcgcmkmjjlieihflfhjopckgpelofo?hl=en) | - |
| [birthdayReminder.gs](https://github.com/dotrovi/KomselCode/blob/main/birthdayReminder.gs) | Email reminders to AJKs for someone's birthday, trigger daily (see below for trigger explanation) | Google SpreadSheet |
| [secretSanta.gs](https://github.com/dotrovi/KomselCode/blob/main/secretSanta.gs) | Email gifters & giftees during GOG, and also the full list to the PIC | Google Form |
| [setBirthdayCalendar](https://github.com/dotrovi/KomselCode/blob/main/setBirthdayCalendar.gs) | Set's the birthday of any person who submits Keahlian form | Google Form |

---

## [Apps Script](https://developers.google.com/apps-script)
Apps Script is a cloud-based JavaScript platform powered by Google Drive that lets you integrate with and automate tasks across Google products. 

#### How to Access Apps Script
From google form
![gf](/img/GoogleFormAppsScript.png)

From google sheet
![gs](/img/GoogleSheetAppsScript.png)

What you get:
![apps script](/img/AppsScriptSample.png)

#### Access Code

Open the editor from the side bar
![editor](/img/editor.png)

Then copy/paste the preferred code into the editor

#### Triggers
Access triggers from the side bar
Then add new trigger
![reminder trigger](/img/reminderTrigger.png)

Triggers will be used for daily birthday checking (remember to save it!)