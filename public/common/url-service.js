(function () {
    "use strict";
    
    angular.module('public')
    .service('UrlService', UrlService);

    function UrlService() {
        let vm = this;
        const baseUrl = 'http://localhost:3000';
        //'http://localhost:8080';
        let allPosts = [];
        
    }
    
})();