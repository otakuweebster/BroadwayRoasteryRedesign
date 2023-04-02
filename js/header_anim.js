/**
 * This serves as an animation scroll handler that, if you scroll down 60px down more, the navigation resizes down or resizes back to normal if you
 * scroll back up.
 *
 * @author Gabriel Beltran
 */
$(function () {
    $(window).on("scroll", function() {
        $(".container-fluid").toggleClass("shrink", $(this).scrollTop() > 60)
        $(".logo").toggleClass("shrink_img", $(this).scrollTop() > 60)
        $(".logo d-md-none mx-0").toggleClass("shrink_img_phone", $(this).scrollTop() > 50)
    })
});