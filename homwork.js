const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Library',
    weapon: 'Rope'
  };
  
const declareMurderer = function() {
    return `The murderer is ${scenario.murderer}.`;
  };
  
const verdict = declareMurderer();
console.log(verdict);

  the above should print murderer name

const murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// above program wont work because const variable cant be reassigned so it will give an error. when the program runs, it will return TypeError

let murderer = 'Professor Plum';

const declareMurderer = function() {
  let murderer = 'Mrs. Peacock';
  return `The murderer is ${murderer}.`;
}

const firstVerdict = declareMurderer();
console.log('First Verdict: ', firstVerdict);

const secondVerdict = `The murderer is ${murderer}.`;
console.log('Second Verdict: ', secondVerdict);

// above program will print Mrs Peacock ast first verdict because it invoking the function
// the second function print Professor plu, because we still have access to the murderer variable inside the .js file

let suspectOne = 'Miss Scarlet';
let suspectTwo = 'Professor Plum';
let suspectThree = 'Mrs. Peacock';

const declareAllSuspects = function() {
  let suspectThree = 'Colonel Mustard';
  return `The suspects are ${suspectOne}, ${suspectTwo}, ${suspectThree}.`;
}

const suspects = declareAllSuspects();
console.log(suspects);
console.log(`Suspect three is ${suspectThree}.`);

// suspects will print all suspects, and print suspectThree as Colonel Mustard 
// second log prints suspect three as Mrs Peacock because its outside the scope of the function declareAllSuspects

const scenario = {
    murderer: 'Miss Scarlet',
    room: 'Kitchen',
    weapon: 'Candle Stick'
  };
  
const changeWeapon = function(newWeapon) {
    scenario.weapon = newWeapon;
  }
  
const declareWeapon = function() {
    return `The weapon is the ${scenario.weapon}.`;
  }
  
changeWeapon('Revolver');
const verdict = declareWeapon();
console.log(verdict);

// verdict will print weapon as revolver because it is only mutating a part of the variable

let murderer = 'Colonel Mustard';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
    murderer = 'Mrs. White';
  }

  plotTwist();
}

const declareMurderer = function () {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// it prints Mrs.white as each time a value is being changed that through a function which has access to let variable which is outside the scope of these functions

let murderer = 'Professor Plum';

const changeMurderer = function() {
  murderer = 'Mr. Green';

  const plotTwist = function() {
     let murderer = 'Colonel Mustard';

    const unexpectedOutcome = function() {
      murderer = 'Miss Scarlet';
    }

    unexpectedOutcome();
  }

  plotTwist();
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

changeMurderer();
const verdict = declareMurderer();
console.log(verdict);

// the above program prints out Mr. Green because by using let murderer in plot twist it creates a new variable called murderer which isnt the same as the one defined outside the function.


const scenario = {
    murderer: 'Mrs. Peacock',
    room: 'Conservatory',
    weapon: 'Lead Pipe'
  };
  
  const changeScenario = function() {
    scenario.murderer = 'Mrs. Peacock';
    scenario.room = 'Dining Room';
  
    const plotTwist = function(room) {
      if (scenario.room === room) {
        scenario.murderer = 'Colonel Mustard';
      }
  
      const unexpectedOutcome = function(murderer) {
        if (scenario.murderer === murderer) {
          scenario.weapon = 'Candle Stick';
        }
      }
  
      unexpectedOutcome('Colonel Mustard');
    }
  
    plotTwist('Dining Room');
  }
  
const declareWeapon = function() {
    return `The weapon is ${scenario.weapon}.`
}
  
changeScenario();
const verdict = declareWeapon();
console.log(verdict);
// the outcome should be candle stick because plotTwist and unexpectedoutcome have same values as the ones passed in changescenario variable.

let murderer = 'Professor Plum';

if (murderer === 'Professor Plum') {
  let murderer = 'Mrs. Peacock';
}

const declareMurderer = function() {
  return `The murderer is ${murderer}.`;
}

const verdict = declareMurderer();
console.log(verdict);

// Answer should be Professor Plum, because we reassign the name of murdered to a new variable called murdered which isnt same as the initial one. for it to work we dont have to use let murderer = "Mrs Peacock" instead murderer = "Mrs peacock" this will change the value inside the variable and print aa different result
