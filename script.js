$(document).ready(function () {
    // Animações ao rolar
    $(window).scroll(function () {
        $('.card').each(function () {
            const elementTop = $(this).offset().top;
            const windowTop = $(window).scrollTop() + $(window).height();
            if (windowTop > elementTop) {
                $(this).addClass('animate');
            }
        });
    });

    // Botão de Pedido
    $(".btn-pedir").click(function () {
        alert("Que delícia! Pedido realizado com sucesso!");
    });

    // Formulário de Contato
    $("#formContato").submit(function (e) {
        e.preventDefault();
        const nome = $("#nome").val();
        const email = $("#email").val();
        const mensagem = $("#mensagem").val();

        if (nome && email && mensagem) {
            alert("Obrigado, " + nome + "! Sua mensagem foi enviada. 😋");
            $(this).trigger("reset");
        } else {
            alert("Por favor, preencha todos os campos!");
        }
    });
});
