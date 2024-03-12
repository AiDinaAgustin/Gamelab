$(document).ready(function() {

    // 1. Click Event
    $("#click-me").click(function() {
        $("#click-message").text("You clicked the button!");
    });

    // 2. Change Event (for input field)
    $("#name-input").change(function() {
        var name = $(this).val();
        $("#name-display").text("Hello, " + name + "!");
    });

    // 3. Hover Event (for image)
    $("#hover-image").hover(function() {
        $("#hover-text").text("Wow ini hovernya");
    }, function() {
        $("#hover-text").text("");
    });

    // 4. Submit Event (for form)
    $("#submit-form").submit(function(event) {
        event.preventDefault(); // Prevent default form submission behavior
        var message = $("#message").val();
        $("#form-message").text("You submitted: " + message);
    });

    // 5. todolist
    $("#add-todo").click(function() {
        var newTodo = $("#new-todo").val();
        if (newTodo) {
            $("#todo-list").append("<li>" + newTodo + "</li>");
            $("#new-todo").val(""); // Clear the input field
        }
    });


});
