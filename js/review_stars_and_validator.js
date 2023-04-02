/**
 * This serves as both validation checker and review stars click handler.
 *
 * @author Gabriel Beltran
 */

"use strict";

let rating = 0;
let greystar = "../resources/img/gray_star.png"
let yellowstar = "../resources/img/yellow_star.png"
let recommendation = "";


$(function() {

    const form = $("#reviewForm");
    selectedStarRating();
    selectedRecommendation();

    /**
     * This portion checks if you are placing a valid email input.
     */
    $.validator.addMethod("isEmail", function(value, element) {
        return this.optional(element) || /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/.test(value);
    }, "Sorry you have entered an invalid email address. Please try again!");

    form.validate({
        rules: {
            receiptNum: {
                required: true,
                range: [10000, 99999],
                number: true
            },

            reviewTitle: {
                required: true
            },

            yourReview: {
                required: true
            },

            nickName: {
                required: true
            },

            location: {
                required: true
            },

            email: {
                required: true,
                isEmail: true
            }
        },

        messages: {
            receiptNum: {
                required: "You must enter a receipt number",
                range: "Enter a receipt number ranging from 10000 to 99999",
                number: "The receipt number must be a number-based input"
            },

            reviewTitle: {
                required: "You must enter a title"
            },

            yourReview: {
                required: "You must type a review"
            },

            nickName: {
                required: "You must add a nickname"
            },

            location: {
                required: "You must add a location"
            },

            email: {
                required: "You must add an email to receive the coupon"
            }
        },

        submitHandler: formSubmmited
    });

});

/**
 * This sets up a value on whether you pressed the Definitely button (which added a RECOMMENDED CLASS) for future validation check,
 * or pressed the Nope button (which added the RECOMMENDED CLASS) for future validation check.
 *
 * Basically it de-highlight one button or another/
 */
function selectedRecommendation()
{
    const definitely = $("#yes");
    const nope = $("#no");

    definitely.on("click", function() {
       nope.css("filter", "grayscale(1) invert(0.5)");
       $(this).css("filter", "none");
       $(".recommendations").addClass("RECOMMENDED");
       recommendation = "Definitely!"
    });

    nope.on("click", function() {
        $(this).css("filter", "none");
        definitely.css("filter", "grayscale(1) invert(0.5)");
        $(".recommendations").addClass("RECOMMENDED");
        recommendation = "Sadly not"
    });
}

/**
 * This basically sets up value for the stars you have selected
 * and dynamically highlights the star based on what star you have selected
 * for the review.
 */
function selectedStarRating()
{
    const text = $("p.ratingtext");
    const star1 = $(".star1");
    const star2 = $(".star2");
    const star3 = $(".star3");
    const star4 = $(".star4");
    const star5 = $(".star5");

    text.hide();

    star1.on("click", function() {
        rating = 1;
        console.log(rating);
        $(this).attr("src", yellowstar);
        star2.attr("src", greystar);
        star3.attr("src", greystar);
        star4.attr("src", greystar);
        star5.attr("src", greystar);
        $(".star").addClass("RATED");
        text.show();
        text.text("Your rating is 1/5");
    })

    star2.on("click", function() {
        rating = 2;
        console.log(rating);
        star1.attr("src", yellowstar);
        $(this).attr("src", yellowstar);
        star3.attr("src", greystar);
        star4.attr("src", greystar);
        star5.attr("src", greystar);
        $(".star").addClass("RATED");
        text.show();
        text.text("Your rating is 2/5");
    })

    star3.on("click", function() {
        rating = 3;
        console.log(rating);
        star1.attr("src", yellowstar);
        star2.attr("src", yellowstar);
        $(this).attr("src", yellowstar);
        star4.attr("src", greystar);
        star5.attr("src", greystar);
        $(".star").addClass("RATED");
        text.show();
        text.text("Your rating is 3/5");
    })

    star4.on("click", function() {
        rating = 4;
        console.log(rating);
        star1.attr("src", yellowstar);
        star2.attr("src", yellowstar);
        star3.attr("src", yellowstar);
        $(this).attr("src", yellowstar);
        star5.attr("src", greystar);
        $(".star").addClass("RATED");
        text.show();
        text.text("Your rating is 4/5");
    })

    star5.on("click", function() {
        rating = 5;
        console.log(rating);
        star1.attr("src", yellowstar);
        star2.attr("src", yellowstar);
        star3.attr("src", yellowstar);
        star4.attr("src", yellowstar);
        $(this).attr("src", yellowstar);
        $(".star").addClass("RATED");
        text.show();
        text.text("Your rating is 5/5");
    })
}

/**
 * Since we cant send it to Broadway Roastery, this hypothetically launches to tell that "You have submitted it" succesfully
 * after fulfiling all the fields with valid information.
 */
function formSubmmited()
{
    window.alert("Thanks for the review! We truly appreciate your information. Expect an email with your free coffee coupon soon!");
}
