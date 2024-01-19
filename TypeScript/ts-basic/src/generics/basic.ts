export default function genericsBasicSample(){
    // generic non use
    const stringReduce = (array:string[], initialValue:string): string => {
        let resullt = initialValue
        for(let i=0; i<array.length; i++) {
            resullt += array[i]
        }
        return resullt
    }

    console.log("generics basic sample 1 : ", stringReduce(["May","the", "force", "be"],""))

    const numberReduce = (array:number[], initialValue:number): number => {
        let resullt = initialValue
        for(let i=0; i<array.length; i++) {
            resullt += array[i]
        }
        return resullt
    }

    console.log("generics basic sample 2 : ", numberReduce([100,200,300], 1000))

    type Reduce = {
        (array: string[], initialValue: string): string
        (array: number[], initialValue: number): number
    }

    type GenericReduce<T> = {
        (array: T[], initialValue: T): T
    }

    const genericStringReduce: GenericReduce<string> = (array, initialValue) => {
        let resullt = initialValue
        for(let i=0; i<array.length; i++) {
            resullt += array[i]
        }
        return resullt
    }
    console.log("generics basic sample 3 : ", genericStringReduce(["May","the", "force", "be", "2"],""))

    // various generic definition
    // perfect independently
    type genericReduce2 = {
        <T>(array: T[], initialValue: T) : T
        <U>(array: U[], initialValue: U) : U

    }

    // call signature shorten
    type genericReduce3<T> = (array: T, initialValue: T) => T
    type genericReduce4 = <T>(array: T, initialValue: T) => T



}