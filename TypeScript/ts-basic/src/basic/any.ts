export default function anySample(){
    //anyだと型がなんでも良くなってしまってわかりにくくなるので避けること
    let name: any = 'kssino' // string
    console.log("any sample 1 : ", typeof name, name)

    name = 24
    console.log("any sample 2 : ", typeof name, name)


}