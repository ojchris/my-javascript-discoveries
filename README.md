# my-javascript-discoveries
interesting JS stuff I discovered

/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// this prototype call creates a function called 'capitalize' and 
//adds it to the string object if doesn't exist already in JS
String.prototype.capitalize = function(){
       return this.replace( /(^|\s)([a-z])/g , function(m,p1,p2){ return p1+p2.toUpperCase(); } );
      };
      
for (day of days){
    console.log(day.capitalize())
}
