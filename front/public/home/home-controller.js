(function () {
    "use strict";
    
    angular.module('public')
    .controller('HomeCtrl', HomeCtrl);
    function HomeCtrl() {
        let vm = this;
        let count = 0;
        let img = '';
        vm.img = 'public/images/CAPITAL.jpeg';

        vm.next = () => {
            count ++;
            if (count > 3) {
                count = 0;
            }
            vm.counter();
        };
        
        vm.previous = () => {
            count--;
            if (count < 0) {
                count = 3;
            }
            vm.counter();
        };

        vm.counter = () => {
            if (count === 0) {
                vm.img = 'public/images/CAPITAL.jpeg';
            } else if (count === 1) {
                vm.img = 'public/images/PRODUCTIVO.jpg';
            } else if (count === 2) {
                vm.img = 'public/images/CAPITAL.jpeg';
            } else if (count === 3) {
                vm.img = 'public/images/ALIMENTARIO.jpg';
            }
        };
    }
    
})();
$(document).ready(function() {
    //Set the carousel options
    $('#myCarousel').carousel({
      pause: true,
      interval: 2500,
    });
    $('#quote-carousel').carousel({
        pause: true,
        interval: 4000,
      });
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
      });
      // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
      })
  });