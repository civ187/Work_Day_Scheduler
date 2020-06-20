$(document).ready(function () {   
    
    //displays current date
    $("#currentDay").text(moment().format("dddd, MMMM Do"));
    
    //save button and click listener to save user input
    $(".saveBtn").on("click", function () {
        console.log(this); 
        var task = $(this).siblings(".description").val();
        var hour = $(this).parent().attr("id");

        //sets hours and task into local storage
        localStorage.setItem(hour, task);
    })
    
    //loads any saved data from local Storage.
    $("#hour08 .description").val(localStorage.getItem("hour08"));
    $("#hour09 .description").val(localStorage.getItem("hour09"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));
    $("#hour19 .description").val(localStorage.getItem("hour19"));

    function hourTracker(){

        //retrieves current hour
        var currentHour = moment().hour();
        
        //loop function to color code the hours as past, present, future.
        $(".time-block").each(function() {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log( blockHour, currentHour)
            
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else if (blockHour === currentHour){
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
        })
    }
    hourTracker();
})