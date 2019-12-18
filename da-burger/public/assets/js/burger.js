$(function () {
    $(".change-eaten").on("click", function (event) {
        var id = $(this).data("id");
        //var newEaten = $(this).data("neweat");
        //console.log(newEaten);
        var newEatState = {
            devoured: true
        };
        console.log(id)
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newEatState
        }).then(
            function () {
                console.log("changed eaten to", newEaten);
                location.reload();
            }
        )
    })


    $(".submit-button").on("click", function (event) {
        event.preventDefault();
        var newBurger = {
            burger_name: $("#burger_name").val().trim(),
            devoured: 0
        };
        console.log(newBurger);
        $.ajax("/api/burgers/", {
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
        $.ajax("/api/burgers/" + id, {
            type: "DELETE"
        }).then(
            function () {
                console.log("deleted burger", id);
                location.reload();
            }
        )
    })
});