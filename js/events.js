console.log('This is separate JS file')

// option 2 add onclick function

function makeRed(){
  document.body.style.backgroundColor = 'red';
}

// option 3 part 1

const makeBlueButton = document.getElementById('make-blue');
        makeBlueButton.onclick = makeBlue;

        function makeBlue(){
          document.body.style.backgroundColor = 'blue';
        }

        // option 3 part 2
        const purpleButton = document.getElementById('make-purple');
        purpleButton.onclick = function makePurple(){
          document.body.style.backgroundColor = 'purple';
        }

        // option 4 part 1
        const pinkButton = document.getElementById('make-pink');
         pinkButton.addEventListener('click', makePink);

         function makePink(){
          document.body.style.backgroundColor = 'pink';
         }

        //  part 2
        const makeGreenButton = document.getElementById('make-green');
        makeGreenButton.addEventListener('click', function makeGreen(){
         document.body.style.backgroundColor = 'green';
        })

        // option 4 final
        document.getElementById('make-goldenrod').addEventListener('click', function(){
          document.body.style.backgroundColor = 'goldenrod';
        })