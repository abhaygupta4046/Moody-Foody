$('.navbar-toggler').click(function(){
   
    $('.navbar-toggler').toggleClass('change')

})

//sticky navbar less padding 

$(window).scroll(function(){
    let position =$(this).scrollTop();
    console.log(position);


})








//magnific-popup
$('.parent-container').magnificPopup({
    delegate: 'a', // child items selector, by clicking on it popup will open
    type: 'image',

    gallery:{
        enabled:true
    }
    // other options
  });
  