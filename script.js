$(document).ready(function() {
    // runs only after dom loaded
    console.log("jQuery is ready!")
});

    // we dont need to use document.ready because I placed script links to the end of body
$("#theme").on("click", function(){
    if($("#theme").text() === "Dark mode"){
        $("*").css({"background-color": "black"});
        $("*").css({"color": "white"});
        $("#theme").text("Light mode");
        }
    else {
        $("*").css({"background-color": "white"});
        $("*").css({"color": "black"});
        $("#theme").text("Dark mode");
    };

});

$("#greeting").on("click", function () {
    $("#linehead").text("go to next tasks");
});
$("#colorheads").on("click", () => {
    $(".headlines").css({"color": "purple"});
});
$("#sizep").on("click", () => {
    $("p").css({"font-size": "20px"});
});



$("#hide").on('click', () => {$("#task2").hide();});
$("#show").on('click', () => {$("#task2").show();});
$("#toggle").on('click', () => {$("#task2").toggle();});


$("#fIn").on('click', () => {
    $("#jsPic, #htmlPic").fadeIn("slow");
});
$("#fOut").on('click', () => {
    $("#jsPic, #htmlPic").fadeOut("slow");
});
$("#fToggle").on('click', () => {
    $("#jsPic, #htmlPic").fadeToggle("slow");
});



$(".slideHeading").on("click", function() {

    let panel = $(this).next(".slidePanel");

    if (panel.is(":visible")) {
        panel.slideUp("slow");
    } else {
        panel.slideDown("slow");
    }

});

$("#togglePanels").on("click", function() {
    $(".slidePanel").slideToggle("slow");
});






$("#addSkill").on("click", function() {
    let input = $("#inputSkill").val().trim();

    if(input !== ""){
        $("#task5").append($("<li>").text(input));
        $("#inputSkill").val("");
    } else {
        console.log("input cannot be empty");
    }
});

$("#prependSkill").on("click", function() {
    let input = $("#inputSkill").val().trim();

    if(input !== ""){
        $("#task5").prepend($("<li>").text(input));
        $("#inputSkill").val("");
    }
    else {
        console.log("input cannot be empty");
    }
});

$("#removeSkill").on("click", function() {

    if($("#task5 li").length > 0){
        $("#task5 li").last().remove();
    }
    else {
        console.log("The list is empty");
    }
});

$("#task6").on("click", () => {
    if($("#github").text() !== "My linkedin:"){
        $("#github").attr("href", "https://www.linkedin.com/in/aidyn-eskendirov-24240b38a/");
        $("#github").text("My linkedin:");
        $("#task6").text("Click to change to github");
    } else {
        $("#github").attr("href", "https://github.com/imelon228");
        $("#github").text("My github");
        $("#task6").text("Click to change to linkedin");
    }
    
});



$("#task7").on("input", (event) => {
    let name = $("#name").val();
    let email = $("#email").val();



    $("#liveinputname").text(name);
    $("#liveinputemail").text(email);
});



let skillsAnimated = false;

$("#animateSkills").on("click", function() {

    $(".progressBar").each(function() {

        let targetWidth = $(this).data("width");

        $(this).animate({
            width: skillsAnimated ? "0%" : targetWidth + "%"
        }, 1000);

    });

    skillsAnimated = !skillsAnimated;

    if (skillsAnimated) {
        $(this).text("Reset Skills");
    } else {
        $(this).text("Animate My Skills");
    }

});