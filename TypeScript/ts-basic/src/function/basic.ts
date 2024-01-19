// allow function
export const logMessage = (message: string): void => {
    console.log("function basic sample 1 : ", message)
}

// named function
export function logMessage2(message : string) : void {
    console.log("function basic sample 2 : ", message)
}

// function-quote
export const logMessage3 = function (message : string): void {
    console.log("function basic sample 3 : ", message)
}

// allow function shorten
export const logMessage4 = (message: string) : void =>  console.log("function basic sample 4 : ", message)

// never return function
export const alwaysThrowError = (message: string): never => {
    throw new Error(message)
}

// call signature shorten
// usage in React
// 型指定をいちいちしなくて良いので楽。使い回しが可能。 
type LogMessage = (message : string) => void
export const logMessage6:LogMessage = (message) => {
    console.log("function basic sample 6 : ", message)
}

// call signature perfect
type FullLogMessage = {
    (message:string) : void
}
export const logMessage7: FullLogMessage = (message) => {
    console.log("function basic sample 7 : ", message)

}