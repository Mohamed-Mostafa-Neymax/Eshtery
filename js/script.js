$('.dropdown').on('mouseover', function () {
    $(this).children('.dropdown-content').css('display', 'block');
});
$('.dropdown').on('mouseleave', function () {
    $(this).children('.dropdown-content').css('display', 'none');
});