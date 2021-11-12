(function(){

    'use strict';

    document.getElementById("convert").addEventListener("submit" , function(event){

        event.preventDefault();
        var distance = parseFloat(document.getElementById("distance").value);
        var answer = document.getElementById("answer");
        
        if(distance)
        {
            var conversion = (distance * 1.60934).toFixed(3);
            answer.innerHTML = `<h2> ${distance} miles equals ${conversion} kilometers</h2>`;
        }

        else
        {
            answer.innerHTML = "<h2> Please enter a valid number!</h2>";
        }
    });
    
})();