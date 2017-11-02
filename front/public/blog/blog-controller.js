(function () {
    "use strict";
    
    angular.module('public')
    .controller('BlogCtrl', BlogCtrl);
    //BlogCtrl.$inject = ['$state'];
    function BlogCtrl() {
        let vm = this;
        let postList = [];

        /*vm.getInfo = (title, description) => {
            vm.info = {
                title: title,
                description: description
            };
            let obj = vm.info;
            console.log(obj);
            //UrlService.getPostId(post);
            $state.go('public.comment', {title: title, description: description});

        }*/
    }
    
})();