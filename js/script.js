(function() {
  var decalApp;

  decalApp = angular.module("decalApp", ['ngRoute']);

  decalApp.config(function($routeProvider) {
    return $routeProvider.when("/", {
      templateUrl: "pages/about.html",
      controller: "mainController"
    }).when("/syllabus", {
      templateUrl: "pages/syllabus.html",
      controller: "syllabusController"
    }).when("/apply", {
      templateUrl: "pages/apply.html",
      controller: "applicationController"
    }).when("/team", {
      templateUrl: "pages/team.html",
      controller: "teamController"
    })
    .when("/lesson/1", {
      templateUrl: "pages/lesson.html",
      controller: "week1Controller"
    }).when("/lesson/2", {
      templateUrl: "pages/lesson.html",
      controller: "week2Controller"
    }).when("/lesson/3", {
      templateUrl: "pages/lesson.html",
      controller: "week3Controller"
    }).when("/lesson/4", {
      templateUrl: "pages/lesson.html",
      controller: "week4Controller"
    }).when("/lesson/5", {
      templateUrl: "pages/lesson.html",
      controller: "week5Controller"
    }).when("/lesson/6", {
      templateUrl: "pages/lesson.html",
      controller: "week6Controller"
    }).when("/lesson/7", {
      templateUrl: "pages/lesson.html",
      controller: "week7Controller"
    }).when("/lesson/8", {
      templateUrl: "pages/lesson.html",
      controller: "week8Controller"
    }).when("/lesson/9", {
      templateUrl: "pages/lesson.html",
      controller: "week9Controller"
    }).when("/lesson/10", {
      templateUrl: "pages/lesson.html",
      controller: "week10Controller"
    }).when("/lesson/11", {
      templateUrl: "pages/lesson.html",
      controller: "week11Controller"
    }).when("/lesson/12", {
      templateUrl: "pages/lesson.html",
      controller: "week12Controller"
    }).when("/next", {
      templateUrl: "pages/lesson.html",
      controller: "nextController"
    }).otherwise({
      redirectTo: "index.html"
    });

  });

  decalApp.controller("mainController", function($scope) {
    $scope.lessons = [
      {title: "Intro to Illustrator"},
      {title: "Pen Tool"},
      {title: "Colors & Blending"},
      {title: "Brushes & Symbols"},
      {title: "Effects & Typography"},
      {title: "Intro to Photoshop"},
      {title: "Cutouts"},
      {title: "TBA"},
      {title: "Effects & Manipulation"},
      {title: "Combining Programs"},
      {title: "Identity & Ad Design"},
      {title: "Final Showcase"}
    ]
  });

  decalApp.controller("applicationController", function($scope) {
    
  });

  decalApp.controller("week1Controller", function($scope) {
    $scope.first = false;
    $scope.week = 1;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials. Check it out over to the right!";
    $scope.homework = "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern. Be creative and check out some student examples from semesters past.";
    $scope.nextLesson = $scope.week+1;
  });

  decalApp.controller("week2Controller", function($scope) {
    $scope.week = 2;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Get your pop art on by using pen tool to create a graphic in Roy Lichtenstein's comic-book style. You'll be honing your skills with anchors and handles, and even playing with stroke width to get a Lichtenstein-like effect.";
    $scope.homework = "Pick a favorite character from a cartoon or animation, lock it underneath, and start tracing away with pen tool! After you have a set of lines you're happy with, be sure to use Live Paint to color it in.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  });

  decalApp.controller("week3Controller", function($scope) {
    $scope.week = 3;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials. Check it out over to the right!";
    $scope.homework = "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern. Be creative and check out some student examples from semesters past.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  });

  decalApp.controller("week4Controller", function($scope) {
    $scope.week = 4;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials. Check it out over to the right!";
    $scope.homework = "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern. Be creative and check out some student examples from semesters past.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  });

  decalApp.controller("week5Controller", function($scope) {
    $scope.week = 5;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials. Check it out over to the right!";
    $scope.homework = "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern. Be creative and check out some student examples from semesters past.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  });

  decalApp.controller("week6Controller", function($scope) {
    $scope.week = 6;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn your way around the Photoshop interface while fixing up a portrait. We'll play with everything from saturation to lighting to spothealing. Remember, photo editing ideally should be minor retouches which can make a major difference.";
    $scope.homework = "Find a photo of yourself or a friend and use at least two tools you learned to fix the photo up. If you're at a loss for which photo to use, you can just use the one provided.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  });

  decalApp.controller("week7Controller", function($scope) {
    $scope.week = 7;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials. Check it out over to the right!";
    $scope.homework = "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern. Be creative and check out some student examples from semesters past.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  });

  decalApp.controller("week8Controller", function($scope) {
    $scope.week = 8;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials. Check it out over to the right!";
    $scope.homework = "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern. Be creative and check out some student examples from semesters past.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  });

  decalApp.controller("week9Controller", function($scope) {
    $scope.week = 9;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to combine many images and textures with different blending modes to create an awesome movie poster. ";
    $scope.homework = "";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  });

  decalApp.controller("week10Controller", function($scope) {
    $scope.week = 10;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials. Check it out over to the right!";
    $scope.homework = "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern. Be creative and check out some student examples from semesters past.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  });

  decalApp.controller("week11Controller", function($scope) {
    $scope.week = 11;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials. Check it out over to the right!";
    $scope.homework = "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern. Be creative and check out some student examples from semesters past.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
  });

  decalApp.controller("week12Controller", function($scope) {
    $scope.week = 12;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials. Check it out over to the right!";
    $scope.homework = "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern. Be creative and check out some student examples from semesters past.";
    $scope.prevLesson = $scope.week-1;
  });

}).call(this);
