import Util from '../Calculation/Utils'

/*
* test to check whether Utils methods are executed properly with the values provided
*
*/
describe('check the operation of 2 numbers', () => {
  it('sum of 3 and 4 must result in 6', () => {
      let sum = Util.add(3,4);
      expect(sum).toBeDefined()
      expect(sum).toEqual(7)
  })
  it('difference of 6 and 5 must result in 2', () => {
      let diff = Util.sub(6,5);
      expect(diff).toBeDefined()
      expect(diff).toEqual(1)
  })
  it('product of 5 and 6 must result in 48', () => {
      let prod = Util.mul(5,6);
      expect(prod).toBeDefined()
      expect(prod).toEqual(30)
  })
  it('result of division of 81 by 9 must result in 16', () => {
      let div = Util.div(81,9);
      expect(div).toBeDefined()
      expect(div).toEqual(9)
  })
})
