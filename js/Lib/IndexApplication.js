class IndexApplication {
    static nav = null ;
    static isHidden = true ;
    static main = () => {
        const navToggleChanger = window.document.body.querySelector("#nav-toggle-changer");
        this.nav = window.document.body.querySelector("#page-nav");
        navToggleChanger.addEventListener('click',this.navToggleChangerClickListener);
    }
    static navToggleChangerClickListener = () => {
        if(this.isHidden)
            this.showNav();
        else 
            this.hideNav();
    }
    static showNav(){
        this.nav.style.display = "block";
        this.isHidden = false ;
    }
    static hideNav(){
        this.nav.style.display = "none";
        this.isHidden = true ;
    }
}
export default IndexApplication ;