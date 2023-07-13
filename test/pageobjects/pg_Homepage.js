class Homepage {
    get ele_close(){
  
      return $('//*[@aria-label="Dismiss sign-in info."]')
    }
  
    get btn_language() {
  
  
      return $('//*[@data-testid="header-language-picker-trigger"]')
    
    }
  
    get btn_ukEnglish() {
  
      return $('//span[text()="English (UK)"]')
    }
  
    get btn_currency() {
  
      return $('//*[@data-testid="header-currency-picker-trigger"]')
    }
  
    get btn_aud(){
      return $('//span[text()="Australian Dollar"]')
    }
  
    get btn_stay() {
  
      return $('//*[@id ="accommodations"]')
    }
  
    get ele_search(){

        return $('//*[@id = ":Ra9:"]')
    }
  
    get dd_selectadult(){

        return $('button[data-testid="occupancy-config"]')
    
    }

    get dd_selectroom(){
        return $("//div[@class ='e98c626f34']//button[1]")
    }
    

    
    dtp_checkin(idf_checkIndate){
        
        return $(`//span[@data-date="${idf_checkIndate}"]`)  

    }

    dtp_checkOut(idf_checkOutdate){
        
        return $(`//span[@data-date="${idf_checkOutdate}"]`)  

    }
    
    get dd_clickDate(){
        return $("//div[@data-testid='searchbox-dates-container']")
    }

    get btn_clicksearch(){

        return $('//span[text()="Search"]')
    }
  
    get btn_select5star(){
        return $('//*[@data-testid="filters-group-label-content"]')
    }
    
    get btn_dropdownForPrice(){
        return $('//*[@data-testid="sorters-dropdown-trigger"]')
    }

    get dd_selectLowestPrice(){
        return $('//span[text()="Price (lowest first)"]')
      }
    get btn_SelectHotel(){
        return $("(//div[@class = 'fcab3ed991 a23c043802'])[2]")
            
    }
  }
  
  export default new Homepage();
  