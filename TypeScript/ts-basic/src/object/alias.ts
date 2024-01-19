export default function typeAliasSample() {
    // alias
    type Country = {
        capital: string
        language:string
        name: string
    }

    const Japan: Country = {
        capital: 'tokyo',
        language: 'japanese',
        name: 'japan'
    }

    console.log("object alias sample 1 :", Japan)

    const America: Country = {
        capital: "washington-dc",
        language: "english",
        name: "usa"

    }

    console.log("object alias sample 2 :", America)

    // union / intersection

    type Knight = {
        hp: number
        sp: number
        weapon: string
        swordSkill: string
    }

    type Wizard = {
        hp: number
        mp: number
        weapon: string
        magicSkill: string
    }


    // these 2 -> combined
    // Knight or Wizard type
    type Adventurer = Knight | Wizard

    // Knight and Wizard type
    type Paradin = Knight & Wizard

    // knight poi
    const adventurer1: Adventurer = {
        hp: 100,
        sp: 30,
        weapon: 'wood sword',
        swordSkill: '3 continuing slash'

    }

    // wizard poi
    const adventurer2: Adventurer = {
        hp: 100,
        mp: 30,
        weapon: 'wood decki',
        magicSkill: 'fire ball'
    }

    console.log("object alias sample 3 :", adventurer1)
    console.log("object alias sample 4 :", adventurer2)


    const paradin: Paradin = {
        hp: 300,
        sp: 100,
        mp: 100,
        weapon: "silver sword",
        swordSkill: "3 slash",
        magicSkill: 'fire ball'

    }

    console.log("object alias sample 5 :", paradin)


}