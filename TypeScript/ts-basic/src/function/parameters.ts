// option parameter
export const isUserSignedIn = (userId: string, username?:string) : boolean => {
    if (userId === 'ABC') {
        console.log('function parameters sample 1 : user signed in! user name is ', username)
        return true
    }else{
        console.log('function parameters sample 2 : user is not signed in')
        return false
    }
}

// default parameter
export const isUserSignedIn2 = (userId: string, username = 'NO NAME') : boolean => {
    if (userId === 'ABC') {
        console.log('function parameters sample 3 : user signed in! user name is ', username)
        return true
    }else{
        console.log('function parameters sample 4 : user is not signed in')
        return false
    }
}

// rest parameter
export const sumProductsPrice = (...ProductsPrice: number[]) : number => {
    return ProductsPrice.reduce((prevTotal, productPrice) => {
        return prevTotal + productPrice
    }, 0) // 0　initial value
}