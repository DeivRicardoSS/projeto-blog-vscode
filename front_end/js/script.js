function getDOM(element) {
    return document.querySelector(element);
}

const App = {
    main: getDOM('main'),
    nav: {
        home: getDOM('.fi-rr-home'),
        explore: getDOM('.fi-rr-globe'),
        search: getDOM('.fi-rr-search'),
        user: getDOM('.fi-rr-user')
    },

    //methods
    loadNav(){
        App.nav.home.addEventListener('click', getHome);
        App.nav.explore.addEventListener('click', getExplore);
        //App.nav.search.addEventListener('click', getSearch);
        App.nav.user.addEventListener('click', getUser);
    }

}

