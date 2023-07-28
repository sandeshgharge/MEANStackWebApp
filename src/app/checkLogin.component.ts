
export class CheckLogin {

    /**
     * On load of each page, we need to authenticate each page if there is any logged
     * in user
     * 
     * This component is added to save the repition of the codeto check of the log in
     */
    loginCheck : boolean;
    editAuth : boolean;
    constructor(){
        this.editAuth = false;
        let auth = localStorage.getItem('auth');
        console.log("Check Login :"+auth);
        if(auth != null){
            this.loginCheck = true;

            if(auth === '0')
                this.editAuth = true;
        }
        else
            this.loginCheck = false;
        
            console.log(this.editAuth);
    }
}