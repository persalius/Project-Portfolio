//Гамбургер меню
var state = true;
$(".bmenu").click(function() {
    $(this).toggleClass("active");
    
    if (state) {
        $(".menu").animate({left: 0}, 500);
    } else {
        $(".menu").animate({left: "-180px"}, 500);
    };
    
    state = !state;
});

//Редактирование строки
$(".customer-edit").on("click", function() {
    $(".edit-block").fadeIn();
});

$(".edit-block").on("click", function() {
    $(this).fadeOut();
});

//Удаление строки
$(".customer-delete").on("click", function() {
    $(this).parent().parent().remove();
});

















