export default function objectSample() {
    // bad example
    // const a : object = {
    //     name : 'kssino',
    //     age : 24
    // }
    // a.name

    // object literal subscription -> def
    let country: {
        language : string, 
        name: string
    } = {
        language: "japanese",
        name: "japan"
    }

    console.log("object object sample 1 : ", country)

    country = {
        language: 'english',
        name: 'united states of america'
    }

    console.log("object object sample 2 : ", country)

    // optional readonly
    const kssino: {
        age: number
        lastName: string
        readonly firstName: string
        gender?: string
    } = {
        age: 24,
        lastName: "sato",
        firstName: 'taro'
    }

    kssino.gender = 'male'
    kssino.lastName = 'nakamura'
    // insert prohibitted
    //kssino.firstName = 'jiro'

    console.log("object object sample 3 : ", kssino)

    // index signature
    const capitals: {
        [countryName: string] : string
    } = {
        japan: 'tokyo',
        korea: 'soul'
    }

    capitals.china = 'beijing'
    capitals.canada = 'otawa'

    console.log("object object sample 4 : ", capitals)


}