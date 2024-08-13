const getDOM = {
    getDOM(element){
        return document.querySelector(element);
    },
    getDOMAll(element){
        return document.querySelectorAll(element);
    }
}

export default getDOM;