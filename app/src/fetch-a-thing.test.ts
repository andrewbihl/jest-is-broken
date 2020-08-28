import {fetchSomething} from ./fetch-a-thing

test(fetchSomething, () => {
    const res = fetchSomething()
    expect(res).toEqual(true)
})
