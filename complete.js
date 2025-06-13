for(let i = 1;i<= 6 ; i++){

document.getElementById(`complete-btn-${i}`).addEventListener("click",
    function (event) {
        event.preventDefault();
        alert("taskmeeter.netlife.appsays\n\nBoard updated Successfully");

        event.target.disabled = true;
        
        event.target.classList.remove('bg-blue-600');
        event.target.classList.add('bg-gray-400');

        if(i==6){
             alert("taskmeeter.netlife.appsays\n\ncongrats!!!You have completed all the current task");
        }

    //Subtraction

        const subtraction = getInnerTextById("subtraction");
        const sub = subtraction - 1;
        setInnerTextByIdandValue("subtraction", sub) 

    //Addition

        const addition = getInnerTextById("addition");
        const add = addition + 1;
        setInnerTextByIdandValue("addition", add);


    //Actibity log 


    const container = document.getElementById("activity-log");

    const p = document.createElement("p");
    const currentTime = new Date().toLocaleString();
    p.innerText = `You have completed the task  "${activitybox}" at ${currentTime}`; 
    
        
    container.appendChild(p)
          
});
}


document.getElementById("clear").addEventListener("click",function(){
    
     document.getElementById("activity-log").innerHTML = ' ';
});


function getInnerTextById(id) {
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIdandValue(id,value) {
    document.getElementById(id).innerText = value;
}


         

