const { $ } = require('@wdio/globals')

class LoginPage {

    get inputUsername () {
        return $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_name"]');
    }

    get inputWeight () {
        return $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_weight"]');
    }
    get inputHeight () {
        return $('//android.widget.EditText[@resource-id="com.fghilmany.dietmealapp:id/et_height"]');
    }

    get genderMale () {
        return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_male"]');
    }
    get genderFemale () {
        return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_female"]');
    }
    get btnNext () {
        return $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_next"]');
    }
    get ActivitySit (){
        return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_rest"]')
    }
    get ActivityWriteAndType (){
        return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_very_very_low"]')
    }
    get ActivityHomework (){
        return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_very_low"]')
    }
    get ActivityStudy (){
        return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_low_to_medium"]')
    }
    get ActivityFarming (){
        return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_medium"]')
    }
    get ActivityJigsaw (){
        return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_heavy"]')
    }
    get ActivityHiking (){
        return $('//android.widget.RadioButton[@resource-id="com.fghilmany.dietmealapp:id/rb_very_heavy"]')
    }
    get btnFinish (){
        return $('//android.widget.Button[@resource-id="com.fghilmany.dietmealapp:id/bt_finish"]')
    }
    get btnMeals (){
        return $('//android.widget.FrameLayout[@content-desc="Meals"]')
    }
    get btnProfile (){
        return $('//android.widget.FrameLayout[@content-desc="Profile"]')
    }
    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async login(username, weight, height) {
        if (!username || weight === null || height === null) {
            return ;
        }
        await this.inputUsername.setValue(username);
        await this.inputWeight.setValue(weight);
        await this.inputHeight.setValue(height);
        await this.genderMale.click();
        await this.btnNext.click();
        await this.ActivityHiking.click();
        await this.btnFinish.click();
    }
    

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
