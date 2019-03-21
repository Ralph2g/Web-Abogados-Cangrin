    //owl carousel
        
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        autoWidht:false,
    
        responsive:{
            0:{
                items:1,
            },
            500:{
                items:2,
                margin:20,
            },
            768:{
                items:3,
                margin:20,
            
            },
            992:{
                items:4,
                margin:20,
            }
            }
        });


$(document).ready(function(){
            
            /*Función:Megamenú*/
            
            $('.mega-menu .dropdown-menu').click(function(n){
                n.stopPropagation();
            })
            
            /*Funcion 3: INICIAMOS EL SCRIPT TYPED.JS*/
            // Can also be included with a regular script tag
            
            var options = {
            strings: [,"Contabilidad para Personas Morales^450","Contabilidad para Personas Físicas^450","Contabilidad para Empresas^450","Declaraciones Mensuales/Anuales^450", "Devoluciones de Impuestos^450",
                     "Auditorías Fiscales y Laborales^450", "Patentación de Marcas^450", "Trámites Gubernamentales", "Servicios de Outsourcing^450","Facturación Electrónica","Servicios de Nómina^450","Apertura de Sociedades^450"],
                
            typeSpeed: 48,
            smartBackspace:false,
            loop:true,
            backSpeed: 33,
            startDelay:700
            }
            
            if( document.querySelector('.typed') != null )
            var typed = new Typed(".typed", options);
            
});

//Funciones JQuery
        
    $(document).ready(function(){
            
            $('.dropdown-menu').click(function(n){
                n.stopPropagation();
            })
            
        });
                
//Funciones JS//
            
            //sticky function;
            window.onscroll = function(){
                myFunction();
            }
            
            function myFunction(){
            var ayuwoki = document.getElementById('encabezado');
            var padding = document.getElementById('mover')
            var sticky = ayuwoki.offsetTop;
        
             if( window.pageYOffset > sticky ){
                ayuwoki.classList.add("sticky");
                padding.classList.add("padding")
                }else{
                    
                ayuwoki.classList.remove("sticky");
                }
            }

        //Spy scroll
        
            function functionScroll() {
            var section = document.querySelectorAll(".section"),
                sections = {}, i = 0;

                Array.prototype.forEach.call(section, function(e) {
                sections[e.id] = e.offsetTop;
            });

                for (i in sections) {
      if (sections[i] <= window.pageYOffset +100) {
          if( document.querySelector('.activo') != null ){
             
        document.querySelector('.activo').classList.remove('activo');
        document.querySelector('.activo').classList.remove('activo');
        document.querySelector('a[href*=' + i + ']').classList.add('activo');
        document.querySelector('div[href*=' + i + ']').classList.add('activo');
             }
      }
    }
  }

  window.addEventListener('scroll', functionScroll);
  window.addEventListener('resize', functionScroll);

            