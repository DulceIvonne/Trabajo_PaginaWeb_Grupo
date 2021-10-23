$(function(){
    $('.filter').click(function(){                                   //Todos los elementos que tengan filter cuando desees click 
       $(this).addClass('active').siblings().removeClass('active'); //Elemento que se le de click recuadros
       let valor = $(this).attr('data-nombre');
       if(valor== 'todos'){
           $('.cont-work').show('1000');
       }else{
           $('.cont-work').not('.'+ valor).hide('1000');  //No lo oculte 
           $('.cont-work').filter('.'+ valor).show('1000');

       }
    });

    // Enlaces dentro de la pagina para redirigirte
    let acerca = $('#acerca').offset().top,
        trabajo = $('#trabajo').offset().top,
        servicio =$('#servicio').offset().top,
        contacto = $('#contacto').offset().top;

    window.addEventListener('resize',function(){
    let acerca1 = $('#acerca').offset().top,
        trabajo1 = $('#trabajo').offset().top,
        servicio1 = $('#servicio').offset().top,
        contacto1 = $('#contacto').offset().top;

      acerca = acerca1;
      trabajo = trabajo1;
      servicio = servicio1;
      contacto = contacto1;
    });

    $('#enlace-inicio').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        },600);

        });
    $('#enlace-acerca').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:acerca -100
        },600);
    
         });
    $('#enlace-servicios').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: servicio -100
        },600);
        
        });
   $('#enlace-trabajo').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop: trabajo -100
        },600);
            
        });
    $('#enlace-contacto').on('click', function(e){
        e.preventDefault();
        $('html,body').animate({
            scrollTop:  contacto -100
        },600);
    
        });
        
    });