$(document).ready(function() {

    // 1. Change Text Content
    $("#change-text").click(function() {
        $("#content p").text("Content diubah");
    });

    // 2. Toggle Visibility
    $("#toggle-visibility").click(function() {
        $("#content p").toggle();
    });

    // 3. Add New Element
    $("#add-element").click(function() {
        $("#content").append("<p>Ini adalah element baru</p>");
    });

    // 4. Remove Element
    $("#remove-element").click(function() {
        $("#content p:last").remove();  // Remove the last paragraph
    });

    // 5. Update HTML Content
    $("#update-html").click(function() {
        var newContent = $("#new-content").val();
        $("#content p").html(newContent);
    });

    // 6. Animate Element
    $("#animate").click(function() {
        $("p").animate({
            opacity: 0.5,
            left: "+=100px",
            top: "+=50px"
        }, 1000); // Animate over 1 second
    });

    // 7. Get Element Attributes (retrieve attribute value)
    var targetWidth = $("#target-element").attr("width");
    console.log("Target element width:", targetWidth);

    // 8. Set Element Attributes (modify attribute value)
    $("#target-element").attr("title", "This is a tooltip");

    // 9. Add/Remove Classes
    $("#target-element").addClass("active");  // Add class
    $("#target-element").removeClass("active"); // Remove class

    // 10. Create Custom Events (demonstrate event triggering and handling)
    $(document).on("customEvent", function(event) {
        console.log("Custom event triggered:", event.data);
    });

    
});
