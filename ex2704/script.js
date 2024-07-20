/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) { // val = valor do "expect(5)"
    
    return {
        toBe(val2) { // val2 = toBe(5)
            if (val === val2) {
                return true
            } else {
                throw "Not Equal" //lançando um erro | forçando um erro
            }
        },
        notToBe(val2) { // val2 = notToBe(5)
            if (val !== val2) {
                return true
            } else {
                throw "Equal" //lançando um erro | forçando um erro
            }
        }
    }  
    
};

// Retorno que o exercício queria era {"value": true} | {"error": "Not Equal"} | {"error": "Equal"}


console.log(expect(5).toBe(5)); // true
console.log(expect(5).notToBe(5)); // throws "Equal"
