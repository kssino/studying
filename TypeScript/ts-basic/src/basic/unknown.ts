export default function unknownSample(){
    const maybeNumber: unknown = 10
    console.log("unknown sample 1 : ", typeof maybeNumber, maybeNumber)

    const isFoo = maybeNumber === "foo"
    console.log("unknown sample 2 : ", typeof isFoo, isFoo)

    // const sum = maybeNumber + 10
    // unknown + num はできない

    // 以下のように記述する
    // 判定して使うことができるので、後から代入したいときに重要
    if (typeof maybeNumber === 'number'){
        const sum = maybeNumber + 10
        console.log("unknown sample 3 : ", typeof sum, sum)

    }
}