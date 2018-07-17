
/* 
    var vs let vs const
*/

/* 
var => function scope
let => block scope
const => constant
*/

function funcaoQualquer(){
    var a = 123;

    {
        let b = 5555;
        console.log(b);
    }

    
    console.log(a);
}

funcaoQualquer();