function addBook(bookinfo) {
    return {
        type: "ADD_BOOK",
        payload: { name: bookinfo.name, 
            price: bookinfo.price, 
            category: bookinfo.category, 
            description: bookinfo.description 
        }
    }
};

function updateBook(bookinfo) {
    return {
        type: "UPDATE_BOOK",
        payload: { 
            id: bookinfo.id,
            name: bookinfo.name,
            price: bookinfo.price, 
            category: bookinfo.category, 
            description: bookinfo.description 
        }
    }
}

function deleteBook(bookinfo) {
    return {
        type: "DELETE_BOOK",
        payload: { name: bookinfo.name, 
            price: bookinfo.price, 
            category: bookinfo.category, 
            description: bookinfo.description 
        }
    }
}

module.exports = {
    addBook,
    deleteBook,
    updateBook
}