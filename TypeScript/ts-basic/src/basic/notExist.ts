export default function notExistSample() {
    let name = null
    console.log("notExist sample 1 : ", typeof name, name)

    name = 'kssino'

    if (!name) {
        // 名前があるとき 
        console.log("notExist sample 2 : ", " I am not...")
    } else {
        console.log("notExist sample 3 : ", " I am " + name)
    }

    let age = undefined
    console.log("notExist sample 4 : ", typeof age, age)

    age = 24

    if (!age) {
        console.log("notExist sample 5 : ", "secret age")
    } else {
        console.log("notExist sample 6 : ", "myage is " + age)
    }

}