

$("#btn-header").click(function () {

    $("#forms").slideDown()

});

$("#to-close").click(function () {

    $("#forms").slideUp()

});


$("#forms").on("submit", function (e) {

    e.preventDefault()
    const url = $("#input").val()
    const newItem = $("<li style ='display:none'></li>")
    $(`<img src=${url} alt="imagem">`).appendTo(newItem)
    $(`<a href=${url} target="_blank">Ver imagem</a>`).appendTo(newItem)

    $(newItem).appendTo("#list")

    $(newItem).fadeIn(1000)
});