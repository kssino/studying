export default function genericAdvancedSample() {
    // map function similar sigature
    // 2 generic type ( not only T, but T and U )
    type Map<T,U> = (array: T[], fn: (item: T) => U) => U[]
    const mapStrigsToNumbers: Map<string, number>  = (array, fn) => {
        let resullt = []
        for (let i=0; i<array.length; i++) {
            const item = array[i]

            resullt[i] = fn(item)
        }

        return resullt

    }  

    const numbers = mapStrigsToNumbers(["123", "456", "789"], (item) => Number(item))
    console.log("generic advanced sample 1 : ", numbers)

}