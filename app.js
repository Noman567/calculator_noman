let input = document.getElementById('screen');
let buttons = document.querySelectorAll('button');
let result = "";

let arr = Array.from(buttons);
arr.forEach(button =>{
    button.addEventListener('click', (e) =>{
        if(
            e.target.innerHTML == "=") {
                result = eval(result);
                input.value = result;
            }
            // else if(e.target.innerHTML == 'x'){
            //     e.target.innerHTML = '*';
            // }
            else if (e.target.innerHTML == 'AC') {
                result = "";
                input.value = result;
            }
            else if(
                e.target.innerHTML == 'Del') {
                    result = result.substring(0, result.length-1);
                    input.value = result;
                }
           else {
            result += e.target.innerHTML;
            input.value = result;
           }

        
    })

})
