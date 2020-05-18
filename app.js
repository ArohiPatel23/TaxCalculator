const readline = require('readline');

var name = "";
var age = "";
var gender = "";
var income = ""

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer) => {
    name = answer;

    rl.question('What is your gender? ', (answer) => {
        gender = answer;

        rl.question('What is your age? ', (answer) => {
            age = answer;

            rl.question('What is your income p.a.? ', (answer) => {
                income = answer;

                if(age < 18){
                    console.log("you are not eligible to pay tax");
                }
                else{
                   calculateTax() 
                }


                rl.close();
            });

        });

    });
});



function calculateTax() {
    var taxAmount = 0;
    if(income <= 250000 || ((age >= 60 ||age <= 80) && income <= 300000) || (age > 80 && income <= 500000)  ){
        console.log("you are not eligible to pay tax");
    }
    else{
        if (age < 60){
            if(income > 250000 && income <= 500000 )
                taxAmount = ((income - 250000) * 0.05);
                
            if(income > 500000 && income <= 1000000 )
                taxAmount = ((income - 500000) * 0.2);
                console.log("you are eligible to pay" + taxAmount + "tax" )
            if(income > 1000000 )
                taxAmount = ((income - 1000000) * 0.3);
        }
        else{
            if(age > 60 && age <= 80){
                if(income > 300000 && income <= 500000 )
                    taxAmount = ((income - 300000) * 0.05);
                if(income > 500000 && income <= 1000000 )
                    taxAmount = ((income - 500000) * 0.2);
                if(income > 1000000 )
                    taxAmount = ((income - 1000000) * 0.3);
            }
            else{

                if(income > 500000 && income <= 1000000 )
                    taxAmount = ((income - 500000) * 0.2);
                    
                if(income > 1000000 )
                    taxAmount = ((income - 1000000) * 0.3);
            }
        }
        console.log("you are eligible to pay " + taxAmount + " amount of tax" )
    }
}