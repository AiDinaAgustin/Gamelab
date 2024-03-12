$(document).ready(function() {
    const targetElement = $("#effect-target");

    // Fade In
    $("#fade-in").click(function() {
        targetElement.fadeIn(1000);
    });

    // Fade Out
    $("#fade-out").click(function() {
        targetElement.fadeOut(1000);
    });

    // Fade Toggle
    $("#fade-toggle").click(function() {
        targetElement.fadeToggle(1000);
    });

    // Slide Down
    $("#slide-down").click(function() {
        targetElement.slideDown(1000);
    });

    // Slide Up
    $("#slide-up").click(function() {
        targetElement.slideUp(1000);
    });

    // Slide Toggle
    $("#slide-toggle").click(function() {
        targetElement.slideToggle(1000);
    });

    // Custom Animation (improved clarity)
    $("#animate").click(function() {
        targetElement.animate({
            width: '50%',  // Adjust width as desired
            height: '150px', // Adjust height as desired
            backgroundColor: '#ccc',  // Change color if needed
            marginTop: '20px'   // Add margin for visual effect
        }, 1000);
    });

    // Show (animated)
    $("#show").click(function() {
        targetElement.show(1000);
    });

    // Hide (animated)
    $("#hide").click(function() {
        targetElement.hide(1000);
    });

    // Toggle (animated)
    $("#toggle").click(function() {
        targetElement.toggle(1000);
    });
});
