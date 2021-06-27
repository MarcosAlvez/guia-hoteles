$(function(){
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });
    $('#contacto').on('show.bs.modal', function (e){
        console.log('El modal se está mostrando.');
        $('#contactoBtn').removeClass("btn-outline-success");
        $('#contactoBtn').addClass("btn-dark");
        $('#contactoBtn').prop('disabled', true);
    });
    $('#contacto').on('hidden.bs.modal', function (e){
        console.log('El modal se ocultó.');
        $('#contactoBtn').prop('disabled', false);
        $('#contactoBtn').removeClass("btn-dark");
        $('#contactoBtn').addClass("btn-outline-success");
    });
});
