const getUser = () => {
    const existingUser = sessionStorage.getItem('userId');
    if (existingUser) {
        return existingUser;
    } else {
        const newUser = 'user-' + new Date().getTime();
        sessionStorage.setItem('userId', newUser)
        return newUser;
    }
}


const getDataKey = () => {
    const userId = getUser();
    return `binimoyMart/orders/${userId}`
}


// push to local storage: a temporary place for database
const getDatabaseOrder= () => {
    const dataKey = getDataKey();
    const data = localStorage.getItem(dataKey) || "{}";
    return JSON.parse(data);
}

const addToDatabaseOrder = (key, count) => {
    const currentOrder = getDatabaseOrder();
    currentOrder[key] = count;
    localStorage.setItem(getDataKey(), JSON.stringify(currentOrder));
}

const removeFromDatabaseOrder = key => {
    const currentOrder = getDatabaseOrder();
    delete currentOrder[key];
    localStorage.setItem(getDataKey(), JSON.stringify(currentOrder));
}

const processOrder = (Order) => {
    localStorage.removeItem(getDataKey());
}


export { addToDatabaseOrder, getDatabaseOrder, removeFromDatabaseOrder, processOrder };


// polyfill to support older browser
const localStorage = window.localStorage || (() => {
    let store = {}
    return {
        getItem(key) {
            return store[key]
        },
        setItem(key, value) {
            store[key] = value.toString()
        },
        clear() {
            store = {}
        }
    };
})()

const sessionStorage = window.sessionStorage || (() => {
    let store = {}
    return {
        getItem(key) {
            return store[key]
        },
        setItem(key, value) {
            store[key] = value.toString()
        },
        clear() {
            store = {}
        }
    };
})()
// end of poly fill