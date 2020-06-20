

$(document).ready(function(){

    // animacion de borde en cada enlace
    // agregamos la clase como un after al enlace del navbar
    $('.navbar-nav li a').addClass('animacion-borde');

    // Animacion seccion de Acerca de

    // Progresion


    // en la linea de scrolling 854 se mostrara la animacion
    const x=854;
    const y=650;
    $(window).on("scroll", function () {
        

        // capturas el numero de scrolling para verificar en que numero ya debe mostrarse la animacion
        var scrollh= $(document).height();
        var scrollt= $(document).scrollTop();

        // si el scrollt es mayor a 854 se mostrara la animacion
        if(x < scrollt){
            $('.pg1').css('width','90%');
            $('.pg2').css('width','80%');
            $('.pg3').css('width','90%');
        }
        else if(y > scrollt){
            $('.pg1,.pg2,.pg3').css('width','0%');
            
        }
    /*     $('.progress .sp-1').text(scrollh);
        $('.progress .sp-2').text(scrollt); */

    });


    // Animacion a los bordes de los precios

    var bordes=".precios .basico .border-basico:nth-child";
    var bordes2=".precios .empresa .border-basico:nth-child";
    var bordePro=".precios .pro .border-pro:nth-child";

    // insertamos codigo html de llenado de bordes 
    $('.basico a').hover(function(){
        $(bordes+'(1)').css('width','100%');
        $(bordes+'(2)').css('height','100%');
        $(bordes+'(3)').css('height','100%');
        $(bordes+'(4)').css('width','100%');

        $('.basico hr').css("background-color","#e30022");
    },
        // funcion de salida
        function(){
            $(bordes+'(1)').css('width','30px');
            $(bordes+'(2)').css('height','30px');
            $(bordes+'(3)').css('height','30px');
            $(bordes+'(4)').css('width','30px');

            $('.basico hr').css("background-color","inherit");
        }

    
    )
    $('.empresa a').hover(function(){
        $(bordes2+'(1)').css('width','100%');
        $(bordes2+'(2)').css('height','100%');
        $(bordes2+'(3)').css('height','100%');
        $(bordes2+'(4)').css('width','100%');

        $('.empresa hr').css("background-color","#e30022");
    },
        // funcion de salida
        function(){
            $(bordes2+'(1)').css('width','30px');
            $(bordes2+'(2)').css('height','30px');
            $(bordes2+'(3)').css('height','30px');
            $(bordes2+'(4)').css('width','30px');

            $('.empresa hr').css("background-color","inherit");
        }

    
    );

    // hover para el borde pro
    $('.bordelio a').hover(function () {
            // entrada
            $(bordePro+'(1)').css({
                'height':'100%',
                'bottom':'0'
            });
            $(bordePro+'(2)').css({
                'height':'100%',
                'bottom':'0'
            });
            $('.bordelio hr').css("background-color","#e30022");
            
        }, function () {
            // salida
            $(bordePro+'(1)').css({
                'height':'120px',
                'bottom':'40%'
            });
            $(bordePro+'(2)').css({
                'height':'120',
                'bottom':'40%'
            });
            $('.bordelio hr').css("background-color","inherit");
        }
    );



    // animacion a los tabuladores

    // agregamos el estilo
    $('.servicios .nav-tabs:nth-child(1)').css({
        'background-color' : 'white',
        'border-top' : '3px solid #ef233c'
    }); //solo afecta a uno

    var tabuladores=".servicios .nav-tabs:nth-child";
    // creamos un evento para inicio y cierre 
    $(tabuladores+'(1)').on('focusin', function () {
        
        $(this).css({
            'background-color' : 'white',
            'border-top' : '3px solid #ef233c'
        });

    });
    $(tabuladores+'(1)').on('focusout', function () {
        
        $(this).css({
            'background-color' : '#edf2f4',
            'border-top' : '1px solid rgb(200, 187, 187)'
        });

    });


    // 2do
    $(tabuladores+'(2)').on('focusin', function () {
        
        $('.servicios .nav-tabs:nth-child(1)').css({
            'background-color' : '#edf2f4',
            'border-top' : '1px solid rgb(200, 187, 187)'
        });

        $(this).css({
            'background-color' : 'white',
            'border-top' : '3px solid #ef233c'
        });

    });
    $(tabuladores+'(2)').on('focusout', function () {
        
        $(this).css({
            'background-color' : '#edf2f4',
            'border-top' : '1px solid rgb(200, 187, 187)'
        });

    });

    // 3er
    $(tabuladores+'(3)').on('focusin', function () {
        
        $(this).css({
            'background-color' : 'white',
            'border-top' : '3px solid #ef233c'
        });

    });
    $(tabuladores+'(3)').on('focusout', function () {
        
        $(this).css({
            'background-color' : '#edf2f4',
            'border-top' : '1px solid rgb(200, 187, 187)'
        });

    });

    // 4to
    $(tabuladores+'(4)').on('focusin', function () {
        
        $(this).css({
            'background-color' : 'white',
            'border-top' : '3px solid #ef233c'
        });

    });
    $(tabuladores+'(4)').on('focusout', function () {
        
        $(this).css({
            'background-color' : '#edf2f4',
            'border-top' : '1px solid rgb(200, 187, 187)'
        });

    });




    // Scroll hacia arriba

    $('.volverInicio a').on('click', function () {
        
        // animacion del html
        $('html, body').animate({
            scrollTop : 0
        },1500)
        // asemos que suba arriba en 1.5segundos

    });

    // barra de navegacion 
    $(window).scroll(function () { 
        
        // condicionamos
        if ($(document).scrollTop()>450) { //si pasa los 450px aparece el nav en negrita por la clase sticky definida
            $('nav').addClass('fixed-top').addClass('navegador-fijo')
        }
        else{
            $('nav').removeClass('fixed-top').removeClass('navegador-fijo')
        }
    });



    // navegacion de los links

    $('.nav-item #inicio').on('click', function () {
        $('html, body').animate({scrollTop : 0}, 1000);
    });
    $('.nav-item #nosotros').on('click', function () {
        $('html, body').animate({scrollTop : 843}, 1000);
    });
    $('.nav-item #precios').on('click', function () {
        $('html, body').animate({scrollTop : 1550}, 1000);
    });
    $('.nav-item #servicios').on('click', function () {
        $('html, body').animate({scrollTop : 2000}, 1000);
    });
    $('.nav-item #team').on('click', function () {
        $('html, body').animate({scrollTop : 2500}, 1000);
    });
    $('.nav-item #contacto').on('click', function () {
        $('html, body').animate({scrollTop : 3110}, 1000);
    });




    // SAbremos la altura del scroll
    $(window).scroll(function(event) {
        var scrollLeft = $(window).scrollLeft();
        var scrollTop = $(window).scrollTop();
        console.log("Vertical "+scrollTop);
        console.log("Horizontal "+scrollLeft);
      });
})