export default (function() {
    $(".tab").click(function() {
        $(".tab").removeClass("activeTab");
        $(this).addClass("activeTab");
        $(".tab_item").hide().eq($(this).index()).css({display: "block"})})
        .eq(0).addClass("activeTab");

    $(".tab_item").not(":first").hide();
})();