//Declarar una variable//
//menu de navegación// 
let nav = document.getElementById('nav');  //Tomar el id nav de esa variable guarde el elemento que tenga el id nav linea 19 html
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open'); //Abri el menu hamburguesa
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;
//Funcion para scroll cuando baje se haga mas grande 
function menus(){
    let Desplazamiento_Actual = window.pageYOffset;

    if(Desplazamiento_Actual<=300){ //Si desplazamienyo actual es menor a 300 si tiene nav 2 me la quites y me agregues la clase nav1
        nav.classList.remove('nav2');
        nav.className = ('nav1');
        nav.style.transition = '1s'; //Quitar y agregar la clase
        menu.style.top = '80px';
        abrir.style.color ='#F20505';
    }else{
        nav.classList.remove('nav1');
        nav.className = ('nav2');
        nav.style.transition = '1s';
        menu.style.top = '100px';
        abrir.style.color ='#0c0d69';
    }
}


//Funcion para abrir el menu hamburguesa
function apertura(){
    if(cerrado){   
        menu.style.width ='70vw'; //width del 70%
        cerrado =false;
    }else{
        menu.style.width ='0'; 
        menu.style.overflow = 'hidden';
        cerrado =true;
    }
}
window.addEventListener('load',function(){ //scroll se vea el menu al momento de subir y bajar ya que no se ve 
    $('#onload').fadeOut();    //Desaparezca preloader
    $('body').removeClass('hidden');
    menus();
});
//Scroll//
window.addEventListener ('scroll', function(){//Agregarle un evento al window cada que haga scroll ejecute una funcion
    console.log(window.pageYOffset);
    menus();
});

//click afuera del menu 
window.addEventListener('click',function(e){
    console.log(e.target);
    if(cerrado == false){
        let span = document.querySelector('span');
        if(e.target !== span && e.target !== abrir){
            menu.style.width ='0%';
            menu.style.overflow = 'hidden';
            cerrado= true;
        }
    }
   


});
window.addEventListener('resize', function(){
    if(screen.width>=700){
        cerrado = true;
        menu.style.removeProperty('overflow');
        menu.style.removeProperty('width');
    }
});

//Abrir el menu hamburguesa

abrir.addEventListener('click', function(){
    apertura();

});