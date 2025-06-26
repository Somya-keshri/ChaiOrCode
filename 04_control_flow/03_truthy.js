const userEmail = "s@sam.ai";

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

if(userEmail.length === 0){
    console.log("Array is empty");
}
//  FALSY VALUES
// false, 0, -0, BigInt 0n, "", null, undefined, NaN 

// TRUTHY VALUES
// 'false', "0", " ", [], {}, function(){}

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}