// OR operator
let checkOR = (0 || 1 || null)
console.log(checkOR)
//returns first truthy value and last operand if no truthy value


// AND operator
let checkAND = (`0` && 1 && undefined && null)
console.log(checkAND)
//returns first truthy value and last operand if no truthy value


// SHHORT circuiting of logical operator
true || console.log(`first operand was true in OR`)
false || console.log(`first operand was false in OR`)

true && console.log(`fisrt value was true in AND`)
false && console.log(`fisrt value was false in AND`)

// precedence of AND and OR
console.log(1 && null || 1 && "0")

