import LIB_home from "../Components/LIB_home";
import test1data from "../Data/test1data.json";


describe('Automation Assignment', () =>{

    it('My Assignment', async() => {

        browser.maximizeWindow();
        browser.url('https://booking.com')
        
        //1.Close sign up alert and navigate to the booking.com website
        await LIB_home.bc_closeSignupAlert();
        

        //2. Selecting a Language (English(UK))
        await LIB_home.bc_selectLanguage();

        // 3. Selecting a currency by clicking on currency panel and selecting AUS dollars

        await LIB_home.bc_selectCurrency();

        // 4. Click on the "Stays" Tab on top panel.

        await LIB_home.bc_selectStay();

        // 5. Type 'Kandy' in the search location 

        await LIB_home.bc_searchLocation(test1data.location);

        //6. Selecting a check in date and check out date

        await LIB_home.bc_selectDate(test1data.checkindate,test1data.checkOutdate);
        
        // 7. Selecting a roomw for 1 adult and 0 children 
        await LIB_home.bc_Selectadult();

        await LIB_home.bc_selectroom();
        
        //verifying the selected room
        await LIB_home.bc_VerifyRoomOccupancy(test1data.OccupancyText);

        //7. click on search button

        await LIB_home.bc_clickSearch();

        //8. CLick on 5 stars

        await LIB_home.bc_click5stars();

        //9.click on sort by button
        await LIB_home.bc_clicksortBy();

        //10.Click on flitering lowest price hotels first

        await LIB_home.bc_SelectLowestPrice();

        //11. Click on selected hotel
        await LIB_home.bc_selectHotel();

    })

})
