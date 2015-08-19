Template['eventCarousel'].helpers({

});

Template['eventCarousel'].events({
});

Template['eventCarousel'].onRendered(function(){
  $(".hero-carousel").owlCarousel({
    autoPlay: true,
    items : 1,
    nav: true,
    dots: false,
    navText: ['',''],
    loop: true
  });
});

