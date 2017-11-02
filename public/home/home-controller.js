(function () {
    "use strict";
    
    angular.module('public')
    .controller('HomeCtrl', HomeCtrl);
    function HomeCtrl() {
        let vm = this;
        let count = 0;
        let img = '';
        vm.img = 'public/images/ALIMENTARIO.JPG';

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
                vm.img = 'public/images/ALIMENTARIO.JPG';
            } else if (count === 1) {
                vm.img = 'public/images/PRODUCTIVO.JPG';
            } else if (count === 2) {
                vm.img = 'public/images/CAPITAL.jpeg';
            } else if (count === 3) {
                vm.img = 'public/images/ALIMENTARIO.JPG';
            }
        };
    }
    
})();