(function () {
    "use strict";
    angular.module('public', ['ui.router'])
    .config(MainRoutes);

    MainRoutes.$inject = ['$urlRouterProvider', '$stateProvider'];
    function MainRoutes($urlRouterProvider, $stateProvider) {
        //If user goes to a path that doesn't exist, redirect to public root
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('public', {
                abstract: true,
                templateUrl: './public/public.html'
            })
            .state('public.home', {
                url: '/',
                templateUrl: './public/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'homeC',
                module: 'public'
            })
            .state('public.us', {
                url: '/nosotros',
                templateUrl: './public/us/us.html',
                controller: 'UsCtrl',
                controllerAs: 'usC',
                module: 'public'
            })
            .state('public.contact', {
                url: '/contacto',
                templateUrl: './public/contact/contact.html',
                controller: 'ContactCtrl',
                controllerAs: 'contactC',
                module: 'public'
            })
            .state('public.blog', {
                url: '/blog?title=:',
                templateUrl: './public/blog/blog.html',
                params: {title: null},
                controller: 'BlogCtrl',
                controllerAs: 'blogC',
                module: 'public'
            })
            .state('public.funds', {
                url: '/fondos',
                templateUrl: './public/funds/funds.html',
                module: 'public'
            })
            .state('public.financing', {
                url: '/financiamiento',
                templateUrl: './public/financing/financing.html',
                module: 'public'
            })
            .state('public.education', {
                url: '/educación',
                templateUrl: './public/education/education.html',
                module: 'public'
            });
            
    }
})();