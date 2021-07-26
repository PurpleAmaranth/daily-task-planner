// Given vars
var today = moment();
var tomorrow = moment().add(1, "days");

$(document).ready(function () {
    // Displays current day
    $('#currentDay').text(moment().format('dddd, MMMM Do'));

    // Saves description to storage
    $('.saveBtn').on('click', function () {
        var description = $(this).siblings('.description').val();
        var hour = $(this).parent().attr('id');
        localStorage.setItem(hour, description);
    });

    // Sets parses through time and changes color
    function presentTime() {
        var currentTime = moment().hours();
        
        $('.time-block').each(function() {
           
            var currentHour = parseInt($(this).attr('id').split('-')[1]);
            
            if(currentHour < currentTime) {
                $(this).addClass('past');
            } else if(currentHour === currentTime) {
                $(this).removeClass('past');
                $(this).removeClass('future');
                $(this).addClass('present'); 
            } else {
                $(this).removeClass('past');
                $(this).removeClass('present');
                $(this).addClass('future'); 
            }
        });
    }

    // Set current time
    presentTime();

    // Load local storage
    $('#9AM .description').val(localStorage.getItem('9AM'));
    $('#10AM .description').val(localStorage.getItem('10AM'));
    $('#11AM .description').val(localStorage.getItem('11AM'));
    $('#12PM .description').val(localStorage.getItem('12AM'));
    $('#1PM .description').val(localStorage.getItem('1PM'));
    $('#2PM .description').val(localStorage.getItem('2PM'));
    $('#3PM .description').val(localStorage.getItem('3PM'));
    $('#4PM .description').val(localStorage.getItem('4PM'));
    $('#5PM .description').val(localStorage.getItem('5PM'));
    $('#6PM .description').val(localStorage.getItem('6PM'));
    $('#7PM .description').val(localStorage.getItem('7PM'));

});
    
