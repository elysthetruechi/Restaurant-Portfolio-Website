$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    });

    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});

// Add an event listener to the dropdown button
document.querySelector('.dropdown-btn').addEventListener('click', function() {
    var dropdownContent = document.querySelector('.dropdown-content');
    
    // Toggle the 'show' class to display or hide the dropdown content
    dropdownContent.classList.toggle('show');
  });

  $('.carousel').owlCarousel({
    margin:0,
    loop: true,
    autoplayTimeOut: 2000,
    autoplayHoverPause: true,
    responsive: {
        0:{
            items: 1,
            nav: false
        },
        600:{
            items: 1,
            nav: false
        },
        0:{
            items: 1,
            nav: false
        }
    }
});
