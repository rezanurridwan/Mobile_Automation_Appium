const {$} = require ('@wdio/globals');

class assertionPage {
    get assertTextWelcome (){
       return $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/header_welcome"]')
    }
    get assertTextDailyActivity (){
       return $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/title_activity"]')
    }
    get assertTextInputForm (){
       return $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/tv_header_desc"]')
    }
    get assertTextHai (){
       return $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/tv_header_name"]')
    }
    get assertMenuMeals (){
       return $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/tv_meal" and @text="Sangu Koneng"]')
    }
    get assertMenuProfile (){
       return $('(//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/tv_name"])[1]')
    }
}

module.exports = new assertionPage();

