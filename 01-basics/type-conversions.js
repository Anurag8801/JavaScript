let value = true
let value2 = false
// console.log(typeof value)

// boolean to string
    let strValue = String(value)
    // console.log(typeof strValue)
    // console.log(strValue)

// boolean to number
    let numValue = Number(value)
    // console.log(typeof numValue)
    // console.log(numValue)

    let numValue2 = Number(value2)
    // console.log(numValue2)

//Numeric Conversion
    // Numeric conversion in mathematical functions and expressions happens automatically.
    let a= `10`, b = `2`
    let result = (a/b)
    // console.log(result)

/*  for numeric conversion : undefined	NaN
 null	0
 true / false	1 / 0
 string	The string is read “as is”, whitespaces (includes spaces, tabs \t, newlines \n etc.) from both sides are ignored. An empty string becomes 0. An error gives NaN.*/


    //for boolean conversion : 0, null, undefined, NaN, ""	are false and any other value is true.

let x = -1
console.log(Boolean(x))