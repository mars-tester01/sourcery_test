const use = function () {
    console.log("there is no answer in your head")
}

const plus = function (a: number, b: number): number {
    return a + b
}

type Person = {
    age: number,
    name: string,
}
type MaybePerson = {
    age: string,
    name: string,
}
const findPerson = function (name: string): Person {
    const found1 = legacies.filter(e => e.name === name)
    if (found1.length > 0) return found1[0]

    if (hasPerson(name)) {
        const found2 = new_legacies.filter(e => e.name === name)
        if (found2.length > 0) return {
            age: Number(found2[0].age),
            name: found2[0].name,
        }
    }
    // will never reach out to here
}
const hasPerson = function (name: string): boolean {
    return new_legacies.filter(e => e.name === name).length > 0
}
const legacies: Person[] = [
    { age: 1, name: "legacy-name-1" },
    { age: 2, name: "legacy-name-2" },
]
const new_legacies: MaybePerson[] = [
    { age: "1", name: "new-legacy-name-1" },
    { age: "2", name: "new-legacy-name-2" },
]
const getPersons = function (id: string): MaybePerson[] {
    const hasNumber = /\d/.test(id)
    if (hasNumber) {
        return new_legacy(Number(id))
    } else {
        return legacy(id).map(e => { return {
            age: String(e.age),
            name: e.name,
        }})
    }
}
const legacy = function (id: string): Person[] {
    if (id === "1") return [ { age: 1, name: "legacy-name-1" } ]
    else return [ { age: 2, name: "legacy-name-2" } ]
}
const new_legacy = function (id: number): MaybePerson[] {
    if (id === 1) return [ { age: "1", name: "new-legacy-name-1" } ]
    else return [ { age: "2", name: "new-legacy-name-2" } ]
}