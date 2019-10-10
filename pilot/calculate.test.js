const Calculate = require("./calculate");
 
test("add", async () => {
    let checkCalculate = Calculate.add(5,6);
    expect(checkCalculate).toBe(11);
});

test("multiple", async () => {
    let checkCalculate = Calculate.multiple(5, 6);
    expect(checkCalculate).toBe(30);
});

test("minus", async () => {
    let checkCalculate = Calculate.minus(5, 6);
    expect(checkCalculate).toBe(-1);
});
