//function to extract json data and fill the layout

function getAndRenderData(timespan){ // daily | weekly | monthly

    let x = document.getElementsByClassName("btn");
    for (let i = 0; i < x.length; i++) {
        if (x[i].classList.contains(timespan)) {
            x[i].style.opacity = 1;
            x[i].style.color = "white";}
        else{
            x[i].style.opacity = 0.5;
            x[i].style.color = "hsl(235, 45%, 61%)";
        }    
    }

    let hrs = document.getElementsByClassName("hours");
    let desc = document.getElementsByClassName("desc");
    fetch("./data.json")
        .then(response => {
            return response.json();
            })
    .then(jsondata => {
        for(let i = 0; i < hrs.length; i++){
            hrs[i].innerHTML = jsondata[i]['timeframes'][timespan]['current'] + "hrs";
            let y = "";
            if (timespan == "daily"){
                y = "Day"
            }
            else if (timespan == "weekly"){
                y = "Week"
            }
            else{
                y = "Month"
            }
            desc[i].innerHTML = "Last " + y + " - " + jsondata[i]['timeframes'][timespan]['previous']+ "hrs";
            
        }
    });
}