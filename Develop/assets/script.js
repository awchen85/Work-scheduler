$(document).ready(function () {
    $('#list-items').html(localStorage.getItem('listItems'));
    $('.add-items').submit(function(event)
    {
        event.preventDefault();
        var item = $('#work-task-item').val();
        if(item)
        {
    localStorage.setItem('listItems', $('#list-items').html());
        $('#work-list-item').val("");
        }
    });
});
