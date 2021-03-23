const assert = require("chai").assert;
const actions = require("../201806839");

describe("201806839.js functions", function () {
  it("Random number between n and m values", function () {
    const n = 1,m = 0
    const result = actions.getRandom(n, m);
    assert.isAtLeast(result, m, result + " is lower than " + m);
    assert.isAtMost(result, n, result + " is greater than " + n);
  });
  it("Current date must be a string", function () {
    const result=actions.getCurrentDate()
    assert.isString(result)
  });
  it("Current mood not avaliable", function () {
    const result=actions.getCurrentMood('eager')
    assert.equal(result,'...')
  });
  it("Flip a coin is ok", function () {
    const result=actions.flipCoin()
    assert.isOk(result,'You\'ve flipped a coin')
  });
  it("Long names cannot be framed", function () {
    const result=actions.frameName('Wolfeschlegelsteinhausenbergerdorff')
    assert.equal(result,'Name cannot be framed','Who are you?')
  });
});

