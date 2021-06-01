const anagram = require('./anagram')

test('Keep and Peek are anagrams', () => {
    expect(anagram("Keep", "Peek")).toBe(true)
})

test('"Hitler Woman" and "Mother In Law"', () => {
    expect(anagram("Mother In Law", "Hitler Woman")).toBe(true)
})