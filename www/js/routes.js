angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('page2', {
    url: '/page1',
    templateUrl: 'templates/page2.html',
    controller: 'page2Ctrl'
  })

  .state('page3', {
    url: '/page2',
    templateUrl: 'templates/page3.html',
    controller: 'page3Ctrl'
  })

  .state('page8', {
    url: '/page3',
    templateUrl: 'templates/page8.html',
    controller: 'page8Ctrl'
  })

  .state('page4', {
    url: '/page4',
    templateUrl: 'templates/page4.html',
    controller: 'page4Ctrl'
  })

  .state('page5', {
    url: '/page5',
    templateUrl: 'templates/page5.html',
    controller: 'page5Ctrl'
  })

  .state('page6', {
    url: '/page6',
    templateUrl: 'templates/page6.html',
    controller: 'page6Ctrl'
  })

  .state('page7', {
    url: '/page8',
    templateUrl: 'templates/page7.html',
    controller: 'page7Ctrl'
  })

  .state('page13', {
    url: '/page9',
    templateUrl: 'templates/page13.html',
    controller: 'page13Ctrl'
  })

  .state('page9', {
    url: '/page16',
    templateUrl: 'templates/page9.html',
    controller: 'page9Ctrl'
  })

  .state('page17', {
    url: '/page31',
    templateUrl: 'templates/page17.html',
    controller: 'page17Ctrl'
  })

  .state('page14', {
    url: '/page10',
    templateUrl: 'templates/page14.html',
    controller: 'page14Ctrl'
  })

  .state('page101', {
    url: '/page11',
    templateUrl: 'templates/page101.html',
    controller: 'page101Ctrl'
  })

  .state('page151', {
    url: '/page23',
    templateUrl: 'templates/page151.html',
    controller: 'page151Ctrl'
  })

  .state('page161', {
    url: '/page25',
    templateUrl: 'templates/page161.html',
    controller: 'page161Ctrl'
  })

  .state('page111', {
    url: '/page20',
    templateUrl: 'templates/page111.html',
    controller: 'page111Ctrl'
  })

  .state('page191', {
    url: '/page33',
    templateUrl: 'templates/page191.html',
    controller: 'page191Ctrl'
  })

  .state('page201', {
    url: '/page36',
    templateUrl: 'templates/page201.html',
    controller: 'page201Ctrl'
  })

  .state('page231', {
    url: '/page43',
    templateUrl: 'templates/page231.html',
    controller: 'page231Ctrl'
  })

  .state('page241', {
    url: '/page46',
    templateUrl: 'templates/page241.html',
    controller: 'page241Ctrl'
  })

  .state('page2311', {
    url: '/page45',
    templateUrl: 'templates/page2311.html',
    controller: 'page2311Ctrl'
  })

  .state('page211', {
    url: '/page40',
    templateUrl: 'templates/page211.html',
    controller: 'page211Ctrl'
  })

  .state('page141', {
    url: '/page28',
    templateUrl: 'templates/page141.html',
    controller: 'page141Ctrl'
  })

  .state('page121', {
    url: '/page22',
    templateUrl: 'templates/page121.html',
    controller: 'page121Ctrl'
  })

  .state('page102', {
    url: '/page12',
    templateUrl: 'templates/page102.html',
    controller: 'page102Ctrl'
  })

  .state('page152', {
    url: '/page24',
    templateUrl: 'templates/page152.html',
    controller: 'page152Ctrl'
  })

  .state('page162', {
    url: '/page26',
    templateUrl: 'templates/page162.html',
    controller: 'page162Ctrl'
  })

  .state('page122', {
    url: '/page21',
    templateUrl: 'templates/page122.html',
    controller: 'page122Ctrl'
  })

  .state('page112', {
    url: '/page27',
    templateUrl: 'templates/page112.html',
    controller: 'page112Ctrl'
  })

  .state('page192', {
    url: '/page34',
    templateUrl: 'templates/page192.html',
    controller: 'page192Ctrl'
  })

  .state('page202', {
    url: '/page37',
    templateUrl: 'templates/page202.html',
    controller: 'page202Ctrl'
  })

  .state('page232', {
    url: '/page44',
    templateUrl: 'templates/page232.html',
    controller: 'page232Ctrl'
  })

  .state('page242', {
    url: '/page47',
    templateUrl: 'templates/page242.html',
    controller: 'page242Ctrl'
  })

  .state('page212', {
    url: '/page39',
    templateUrl: 'templates/page212.html',
    controller: 'page212Ctrl'
  })

  .state('page142', {
    url: '/page29',
    templateUrl: 'templates/page142.html',
    controller: 'page142Ctrl'
  })

  .state('page15', {
    url: '/page13',
    templateUrl: 'templates/page15.html',
    controller: 'page15Ctrl'
  })

  .state('page16', {
    url: '/page14',
    templateUrl: 'templates/page16.html',
    controller: 'page16Ctrl'
  })

  .state('page10', {
    url: '/page15',
    templateUrl: 'templates/page10.html',
    controller: 'page10Ctrl'
  })

  .state('page11', {
    url: '/page18',
    templateUrl: 'templates/page11.html',
    controller: 'page11Ctrl'
  })

  .state('page12', {
    url: '/page19',
    templateUrl: 'templates/page12.html',
    controller: 'page12Ctrl'
  })

  .state('page18', {
    url: '/page30',
    templateUrl: 'templates/page18.html',
    controller: 'page18Ctrl'
  })

  .state('page19', {
    url: '/page32',
    templateUrl: 'templates/page19.html',
    controller: 'page19Ctrl'
  })

  .state('page20', {
    url: '/page35',
    templateUrl: 'templates/page20.html',
    controller: 'page20Ctrl'
  })

  .state('page21', {
    url: '/page38',
    templateUrl: 'templates/page21.html',
    controller: 'page21Ctrl'
  })

  .state('page22', {
    url: '/page41',
    templateUrl: 'templates/page22.html',
    controller: 'page22Ctrl'
  })

  .state('page23', {
    url: '/page17',
    templateUrl: 'templates/page23.html',
    controller: 'page23Ctrl'
  })

  .state('page24', {
    url: '/page42',
    templateUrl: 'templates/page24.html',
    controller: 'page24Ctrl'
  })

  .state('page25', {
    url: '/page48',
    templateUrl: 'templates/page25.html',
    controller: 'page25Ctrl'
  })

  .state('page1', {
    url: '/page49',
    templateUrl: 'templates/page1.html',
    controller: 'page1Ctrl'
  })

$urlRouterProvider.otherwise('/page49')


});