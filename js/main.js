$(document).ready(function () {
    $(".dropdown-button").dropdown({
        hover: true,
        belowOrigin: true,
        constrainWidth: false
    });
    $('.carousel').carousel();
    $(".button-collapse").sideNav();
    $(".slider").slider({
        indicators: false
    });
    $('.item-btn').hover(
        function () { $(this).addClass('text-darken-3') },
        function () { $(this).removeClass('text-darken-3') }
    );
    $('select').material_select();
    $('.tooltipped').tooltip({ delay: 50 });
});

//Product Slide Next
function nextItem(e) {
    //Prevent Page Submission
    e.preventDefault();
    $(document).ready(function () {
        $('.carousel').carousel('next');
    });
}

//Product Slide Previous
function prevItem(e) {
    e.preventDefault();
    $(document).ready(function () {
        $('.carousel').carousel('prev');
    });
}