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
      {title: "Brushes, Symbols, and Effects"},
      {title: "Typography"},
      {title: "Intro to Photoshop"},
      {title: "Selection Tools & Masking"},
      {title: "Blending, Layer Styles, and Filter Effects"},
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
    $scope.tutorial = "Learn how to create a cool-looking abstract pattern which you can personalize with your own color choices and initials.";
    $scope.homework = "This week's homework is to get you comfortable with finding your away around Illustrator on your own! Follow the tutorial we did in class to make another cool pattern.";
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/3kg5c18k8yhwt5u/lesson1_files.zip?dl=0";
  });

  decalApp.controller("week2Controller", function($scope) {
    $scope.week = 2;
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Get your pop art on by using pen tool to create a graphic in Roy Lichtenstein's comic-book style. You'll be honing your skills with anchors and handles, and even playing with stroke width to get a Lichtenstein-like effect.";
    $scope.homework = "Pick a favorite character from a cartoon or animation, lock it underneath, and start tracing away with pen tool! After you have a set of lines you're happy with, be sure to use Live Paint to color it in.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/6ivpgkvdiziarn0/Lesson%202%20Files.zip?dl=0";
  });

  decalApp.controller("week3Controller", function($scope) {
    $scope.week = 3;
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to make blends and gradients in Illustrator and how to use these tools to create an original composition.";
    $scope.homework = "Pen tool a scene of your choice, and then go to Edit -> Edit Colors -> Recolor Artwork to create a day and night scene. Make sure you incorporate both the gradient tool and the blend tool into the work you've created.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/r3pnujetnv2x2m8/Week%203%20Files.zip?dl=0";
  });

  decalApp.controller("week4Controller", function($scope) {
    $scope.week = 4;
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to make all different types of brushes and apply them in a fun poster series about New York City.";
    $scope.homework = "Create a poster of a landmark using the pen tool. Stylize your poster by applying brushes to your paths!";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "http://tinyurl.com/lesson4-innoddecal";
  });

  decalApp.controller("week5Controller", function($scope) {
    $scope.week = 5;
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "For this week's lesson, we'll talk a little about typography and how you can manipulate type in your designs.";
    $scope.homework = "No weekly homework this week! BUT you should start working on your Midterm Project. Create an infographic about anything you want. Incorporate 3 facts about your topic and make an illustration for each of them. You must use at least 3 tools that we've learned in class, so get creative and have fun!";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://drive.google.com/open?id=0B-Hy6K4Zn4ZyM3R2enlaQ2ktR0E&authuser=2";

  });

  decalApp.controller("week6Controller", function($scope) {
    $scope.week = 6;
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn your way around the Photoshop interface while fixing up a portrait. We'll play with everything from saturation to lighting to spothealing. Remember, photo editing ideally should be minor retouches which can make a major difference.";
    $scope.homework = "Find a photo of a celebrity with no makeup on and use at least two tools you learned to fix the photo up. Imagine you work for a fashion magazine and must make the photo cover-ready!";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://drive.google.com/file/d/0B-Hy6K4Zn4ZyellUMnBTNl9MV2M/view?usp=sharing";

  });

  decalApp.controller("week7Controller", function($scope) {
    $scope.week = 7;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "This week's lesson is all about selection tools and masks. You'll learn how to cut out parts of an image as well as hide parts of an image that you don't want to see. We'll be following the tutorial at bit.ly/lesson7tutorial and doing a group activity in class!";
    $scope.homework = "Make a promotional poster for a fictional sitcom. Use the selection tools and masking techniques from today's lesson to cut out and arrange the people you want to star in your show as well as the tools from last week to enhance the images you've chosen!"
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://drive.google.com/file/d/0B-Hy6K4Zn4ZybTJBTGQzLWU3bUU/view?usp=sharing";

  });

  decalApp.controller("week8Controller", function($scope) {
    $scope.week = 8;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to apply special effects on text & images using blending modes, layer styles, and filter effects!";
    $scope.homework = "Using your new knowledge of blending modes, clipping & layer masks, make a sci-fi movie poster! Put a subject or two onto a cool background, apply some textures, and give your movie a name.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://drive.google.com/file/d/0B-Hy6K4Zn4ZyZkNiLVZULTR6cms/view?usp=sharing";
  });

  decalApp.controller("week9Controller", function($scope) {
    $scope.week = 9;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to combine Illustrator & Photoshop to create cool composite images and designs.";
    $scope.homework = "Choose your favorite book and create a custom cover for it using at least two textures and two stock photos";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    //$scope.download = "https://www.dropbox.com/s/es0uxkg5jcwj4x2/tutorial%2010%20files.zip?dl=0";

  });

  decalApp.controller("week10Controller", function($scope) {
    $scope.week = 10;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Apply everything you've learned this semester by rebranding and creating an advertisement design for a company!";
    $scope.homework = "Work on your final project";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;

  });

  decalApp.controller("week11Controller", function($scope) {
    $scope.week = 11;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Our last class will be a potluck style showcase! Bring some snacks to share and see all the work you and your classmates have accomplished this semester. The course will conclude with everyone presenting to the class their final project.";
    $scope.homework = "";
    $scope.prevLesson = $scope.week-1;

  });

}).call(this);
