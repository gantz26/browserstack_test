# Summary

This repository contains auto tests for verifying the functionality of swipe, drag and drop and interections with input field, switch and drop-down list.

## Requirements

The next requirements must be completed to run tests:
1. Install [Visual Studio code](https://code.visualstudio.com/)
2. Install [Node.js](https://nodejs.org/en)
3. Sign up [BrowserStack](https://app-automate.browserstack.com/) website

## Steps to install, launch and creating a report

1. Firstly, make a copy of this repository
```
git clone https://github.com/gantz26/browserstack_test.git
```

2. Then, open this folder in Visual Studio Code and install all dependencies
```
npm ci
```

3. Before launching the tests you need to upload your app to the BrowserStack servers using the next command in command line.
You can get the username and access key on your profile page on BrowserStack website
```
curl -u "<username>:<access_key>" \
-X POST "https://api-cloud.browserstack.com/app-automate/upload" \
-F "file=@/path/to/app/file/application-debug.apk" \
-F "custom_id=SampleApp"
-F "ios_keychain_support=true"

```

4. After execution of the previous command you will get the following response
```
{
    "app_url": "bs://<hashed app-id>",
    "custom_id": "<your_id>",
    "shareable_id": "<your_shareable_id>"
}
```

5. Create .env file and add the necessary data there
```
BROWSERSTACK_USERNAME=<username>
BROWSERSTACK_ACCESS_KEY=<access_key>
BROWSERSTACK_APP_URL=<app_url>
```

6. To run the tests use one of the next commands:
```
npm run wdio:google
npm run wdio:samsung
```

7. To generate and view a report:
```
npm run allure:generate
npm run allure:open
```