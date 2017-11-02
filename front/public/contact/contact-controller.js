(function () {
    "use strict";
    
    angular.module('public')
    .controller('ContactCtrl', ContactCtrl);

    function ContactCtrl() {
        let vm = this;
        let message = {};
        let msg = '';

        /*vm.newContact = (name, phone, email, descrip) => {
            if (name == null || email == null || descrip == null) {
                vm.msg = 'Favor llenar los campos';
            };
            vm.message = {
                name: name,
                phone: phone,
                email: email,
                descrip: descrip
            };
            let msg = vm.message;
            //never do this UrlService.createMessage(vm.msg)
            UrlService.createMessage(msg); 
            vm.message = {
                name: '',
                phone: '',
                email: '',
                descrip: ''
            }; 
        };*/
   
    }
    
})();