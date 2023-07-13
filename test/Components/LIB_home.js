
import pg_Homepage from "../pageobjects/pg_Homepage";
import PGHomepage from "../pageobjects/pg_Homepage";
import { expect } from "chai";

class LIBHome {
    //closing sign up alert
    async bc_closeSignupAlert(){
    await PGHomepage.ele_close.click();
    }
    

    async bc_selectLanguage(){
    await PGHomepage.btn_language.click();
    browser.pause(2000)
    await PGHomepage.btn_ukEnglish.click();
    }

    async bc_selectCurrency(){
    await PGHomepage.btn_currency.click();
    browser.pause(2000)
    await PGHomepage.btn_aud.click();
    }

    async bc_selectStay(){
    await PGHomepage.btn_stay.click();
    browser.pause(2000)
    }
    
    // Searching a location
    async bc_searchLocation(prm_location){
    await PGHomepage.ele_search.click();
    await PGHomepage.ele_search.setValue(prm_location);

    }

    // Selecting a check in date and check out date
    async bc_selectDate(prm_checkindate,prm_checkOutdate){
    await PGHomepage.dd_clickDate.click();
    await PGHomepage.dtp_checkin(prm_checkindate).click();
    await PGHomepage.dtp_checkOut(prm_checkOutdate).click();
    }

    //verify room occupancy whether it's for one adult and 0 children 
    async bc_VerifyRoomOccupancy(prm_occupancy){
    var OccupancyText = await PGHomepage.dd_selectadult.getText();
    expect(OccupancyText).to.equal(prm_occupancy);
    }
    
    async bc_Selectadult(){
    await PGHomepage.dd_selectadult.click();
    }

    async bc_selectroom(){
    await PGHomepage.dd_selectroom.click();
    }

    async bc_clickSearch(){
    await PGHomepage.btn_clicksearch.click();
    }
    
    async bc_click5stars(){
    await PGHomepage.btn_select5star.click();
    browser.pause(2000)
    }

    async bc_clicksortBy(){
    await PGHomepage.btn_dropdownForPrice.click();
    }

    async bc_SelectLowestPrice(){
    await PGHomepage.dd_selectLowestPrice.click();
    browser.pause(2000)
    }

    async bc_selectHotel(){
    browser.pause(8000)
    await PGHomepage.btn_SelectHotel.click();
    browser.pause(8000)
    
    }
}




export default new LIBHome();