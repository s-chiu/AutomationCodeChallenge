const { Given, When, Then } = require('@cucumber/cucumber');
const testpage = require('../pageobjects/testpage.js');


Given(/^the user is on the test page$/, async () => {
    await testpage.open();
});

When(/^the user adds a new user (\w+) to the table$/, async (userName) => {
    await testpage.ClickAddUserButton();
    await testpage.SetFirstName("newFirstName");
    await testpage.SetLastName("newLastName");
    await testpage.SetUserName(userName);
    await testpage.SetPassword("dummypw");
    await testpage.SetCompany("15");
    await testpage.SetRole("Admin");
    await testpage.SetEmail("testemail@test.com");
    await testpage.SetPhone("3122222222");
    await testpage.ClickSaveUser();
});

When(/^the user (\w+) is displayed on the table$/, async (userName) => {
    await expect(testpage.TryReturnUser(userName)).toBeElementsArrayOfSize(1);
});

When(/^the user deletes the user with the username (\w+)$/, async (userName) => {
    await testpage.ClickDeleteUserButton(userName);
    await testpage.ConfirmDeleteUser();
});

Then(/^the user (\w+) is not displayed on the table$/, async (userName) => {
    await expect(testpage.TryReturnUser(userName)).toBeElementsArrayOfSize(0);
});