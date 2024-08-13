import { getDOM } from '../core/getDOM.core'

const Page = {
    main: getDOM('main'),
    nav: {
        home: getDOM('.fi-rr-home'),
        explore: getDOM('.fi-rr-globe'),
        search: getDOM('.fi-rr-search'),
        user: getDOM('.fi-rr-user')
    },
    loadEvents(){

    }
}

export default Page;