const { expect } = require("chai")
const {
    originalFormatter,
    proceduralFormatter,
    functionalFormatter,
    builtInFormatter,
} = require("../index")

describe("formatters", () => {
    [
        originalFormatter,
        proceduralFormatter,
        builtInFormatter,
        functionalFormatter
    ].forEach(formatter => {
        describe(formatter.name, () => { 
            testFormatter(formatter)
        })
    })
})

function testFormatter(formatter){
    it("adds 2 commas to a million", () => {
        const result = formatter(1000000)
        expect(result).to.equal("1,000,000")
    })
    it("adds 5 commas to a quadrillion", () => {
        const result = formatter(10000000000000000)
        expect(result).to.equal("10,000,000,000,000,000")
    })
    it("keeps the order of number correct", () => {
        const result = formatter(1234567)
        expect(result).to.equal("1,234,567")
    })
}
