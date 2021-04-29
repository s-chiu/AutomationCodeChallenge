const Page = require('./page');

class TestPage extends Page {
    open () {
        return super.open();
    }

    get AddUserButton () { return $("//button[contains(text(),'Add User')]") }
    get FirstNameField () { return $("//input[@name='FirstName']") }
    get LastNameField () { return $("//input[@name='LastName']") }
    get UserNameField () { return $("//input[@name='UserName']") }
    get PasswordField () { return $("//input[@name='Password']") }
    get RoleDropdown () { return $("//select[@name='RoleId']") }
    get EmailField () { return $("//input[@name='Email']") }
    get PhoneField () { return $("//input[@name='Mobilephone']") }
    get SaveUserButton () { return $("//button[@ng-click='save(user)']") }
    get CloseAddUserModalButton () { return $("//button[@ng-click='close()']") }
    get ConfirmDeleteUserButton () { return $("//button[@ng-click='close(btn.result)' and text()='OK']") }


    async ClickAddUserButton()
    {
        await (await this.AddUserButton).click();
    }

    async SetFirstName(firstName)
    {
        await (await this.FirstNameField).setValue(firstName);
    }

    async SetLastName(lastName)
    {
        await (await this.LastNameField).setValue(lastName);
    }

    async SetUserName(userName)
    {
        await (await this.UserNameField).setValue(userName);
    }

    async SetPassword(password)
    {
        await (await this.PasswordField).setValue(password);
    }

    async SetCompany(companyValue)
    {
        this.Company = $("//input[@name='optionsRadios' and @value='" +companyValue + "']") ;
        (await this.Company).click();
    }

    async SetRole(role)
    {
        await (await this.RoleDropdown).click();
        this.Role= $("//option[text()='" + role +"']") ;
        (await this.Role).click();
    }

    async SetEmail(email)
    {
        await (await this.EmailField).setValue(email);
    }

    async SetPhone(phone)
    {
        await (await this.PhoneField).setValue(phone);
    }

    async ClickSaveUser()
    {
        await (await this.SaveUserButton).click();
    }

    async ClickCloseAddUserModal()
    {
        await (await this.CloseAddUserModalButton).click();
    }

    async ClickDeleteUserButton(userName)
    {
        this.deleteButton= $("//td[text()='" + userName + "'] /../td/button/i[contains(@class,'icon-remove')]") ;
        (await this.deleteButton).click();
    }

    async ConfirmDeleteUser()
    {
        await (await this.ConfirmDeleteUserButton).click();
    }
    
    async TryReturnUser(identifier)
    {
         return $$("//td[text()='" + identifier + "']");

    }
}

module.exports = new TestPage();