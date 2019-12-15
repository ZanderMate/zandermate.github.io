$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        var newEaten = $(this).data("neweat");

        var newEatState = {
            devoured: newEaten
        };
        $.ajax("/api/burger/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("changed eaten to", newEaten);
                location.reload();
            }
        )
    })


    $(".submit-button").on("submit", function (event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: 0
        };
        $.ajax("/api/burger/", {
            type: "POST",
            data: newBurger
        }).then(
            function () {
                console.log("created new burger");
                location.reload();
            }
        );
    });

    $(".delete-burger").on("click", function (event) {
        var id = $(this).data("id");
        $.ajax("/api/burger" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted cat", id);
                location.reload();
            }
        )
    })
});