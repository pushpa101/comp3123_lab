var calc = require('./calculator');

var comp = require('./comparer');


n1 = 10;

n2 = 5;


if (comp.AreNumberEqual(n1,n2) == true){
    console.log("comparing two numbers: " + n1 + "," + n2)
    console.log("numbes are equal" + "\n" + "adding two numbers")
    calc.Add(n1,n2);
} else if (comp.AreNumberEqual(n1,n2) == false){
console.log("comparing two numbers: " + n1 + "," + n2)
console.log("numbes are not equal" + "\n" + "substracting two numbers")
    calc.Sub(n1,n2);
}

comp.AreNumberEqual(n1,n2) ? calc.Add(n1,n2) : calc.Sub(n1,n2)