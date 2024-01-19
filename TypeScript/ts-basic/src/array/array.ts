export default function arraySample() {
    const colors : string[] = ['red', 'blue']
    colors.push('yellow')
    //colors.push(123)
    console.log("array array sample 1 : ", colors)

    const even: Array<number> = [2,4,6]
    even.push(8)
    // even.push("10")
    console.log("array array sample 2 : ", even)

    // string or num
    const ids: (string | number) [] = ["ABC", 123]
    ids.push(345)
    // ids.push(true)
    console.log("array array sample 3 : ", ids)

    // type assuming
    const generateSomeArray = () => {
        const _someArray = [] // any
        _someArray.push(123)  // num
        _someArray.push("ABC") // num or str
        return _someArray
    }

    const someArray = generateSomeArray()
    someArray.push(456)
    // someArray.push(true)
    console.log("array array sample 4 : ", someArray)


}