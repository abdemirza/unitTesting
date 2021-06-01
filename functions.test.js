const { TestWatcher } = require('@jest/core');
const functions = require('./functions');

test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
})

test("Value needs to be null ", () => {
    expect(functions.null()).toBeNull()
})

test("Testing user is same or not", () => {
    expect(functions.createUser()).toEqual({
        first_name: 'Abuzar',
        last_name: 'Mirza'
    })
})

test("User is Leanne Graham", async () => {
    const data = await functions.fetchUser()
    expect(data.name).toEqual('Leanne Graham')
});
