export default function tupleSample() {
    // normal type def
    let response: [number, string] = [200, "OK"]
    // response = [400, "Bad request, "email para is missing"]

    //response = ["400", "bad request"]

    console.log("array tuple sample 1 : ", response)

    // rest para
    const girlfriends: [string, ...string[]] = ["Kana", "Eri", "Lisa"]
    girlfriends.push("Miku")

    console.log("array tuple sample 2 : ", girlfriends)

    // immutable array/tuple
    const commands: readonly string[] = ["git add", "git command"]
    // commands.push("git fetch")
    // commands[2] = "git pull"

    console.log("array tuple sample 3 : ", commands)


}
