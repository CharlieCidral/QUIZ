var R = 0;
$('button.1').click(function(){
    $(this).toggleClass('btn-light btn-success');
    R += 1;
});

$('button.0').click(function(){
    $(this).toggleClass('btn-light btn-danger');
});

$('button.2').click(function(){
    var Resultado = (R * 100)/5;
    $('.resultado').html("Voce acertou: "+Resultado+"%");
});

$('button.3').click(function(){
    location.reload();
});

