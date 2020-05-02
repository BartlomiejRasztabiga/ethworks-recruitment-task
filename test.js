const { expect } = require('chai')
const { add } = require('./app')

it('test1', () => {
    a = [[2, 2], [3, 0]] //2x^2 + 3
    b = [[3, 3], [1, 2]] //3x^3 + x^2
    c = add(a, b)

    expect(c).to.deep.equal([[3, 3], [3, 2], [3, 0]]); //3x^3 + 3x^2 + 3
})

it('test2', () => {
    a = [[0, 0]] //0
    b = [[0, 0]] //0
    c = add(a, b)

    expect(c).to.deep.equal([[0, 0]]); //0
})

it('test3', () => {
    a = [[1, 0]] //1
    b = [[2, 0]] //2
    c = add(a, b)

    expect(c).to.deep.equal([[3, 0]]); //3
})

it('test4', () => {
    a = [[1, 0]] //1
    b = [[-2, 0]] //-2
    c = add(a, b)

    expect(c).to.deep.equal([[-1, 0]]); //-1
})

it('test5', () => {
    a = [[2, 2], [1, 1]] //2x^2 + x
    b = [[-3, 2], [-1, 1], [-1, 0]] //-3x^2 - x - 1
    c = add(a, b)

    expect(c).to.deep.equal([[-1, 2], [-1, 0]]); //-x^2 - 1
})