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
      {title: "Layer Styles & Cutouts"},
      {title: "Effects & Manipulation"},
      {title: "Photo Manipulation and Gifs"},
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
    $scope.download = "https://www.dropbox.com/s/48s7dfufh29hzve/Lesson%201%20%26%20Tutorial%201%20%28Abstract%20Pattern%29.pdf?dl=0";
  });

  decalApp.controller("week2Controller", function($scope) {
    $scope.week = 2;
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Get your pop art on by using pen tool to create a graphic in Roy Lichtenstein's comic-book style. You'll be honing your skills with anchors and handles, and even playing with stroke width to get a Lichtenstein-like effect.";
    $scope.homework = "Pick a favorite character from a cartoon or animation, lock it underneath, and start tracing away with pen tool! After you have a set of lines you're happy with, be sure to use Live Paint to color it in.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/jg17nkemn8xcqaq/week2files.zip?dl=0";
  });

  decalApp.controller("week3Controller", function($scope) {
    $scope.week = 3;
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to make blends and gradients in Illustrator and how to use these tools to create an original composition.";
    $scope.homework = "Pen tool a scene of your choice, and then go to Edit -> Edit Colors -> Recolor Artwork to create a day and night scene. Make sure you incorporate both the gradient tool and the blend tool into the work you've created.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/1bncd3syb1p4yar/lesson3.zip?dl=0";


  });

  decalApp.controller("week4Controller", function($scope) {
    $scope.week = 4;
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to make all different types of brushes and apply them in a fun poster series about New York City.";
    $scope.homework = "Create a either a brush (either scatter, art, or pattern) and use it to create a little doodle!";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/xv3pxbwvcycvj3i/Tutorial%204%20Files.zip?dl=0";
  });

  decalApp.controller("week5Controller", function($scope) {
    $scope.week = 5;
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Today we're making cookies through Illustrator Effects & Appearances. We'll also talk a little about typography and how you can manipulate type in your designs.";
    $scope.homework = "No weekly homework this week! BUT you should start working on your Midsemester Poster Project. Create a poster for your favorite movie (or television show if you want). Use at least 3 tools that we've learned in class. Get creative and have fun! See this link for examples: http://imgur.com/a/M9nCV#0";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/ipu7zzp1q9593v4/week5.zip?dl=0";

  });

  decalApp.controller("week6Controller", function($scope) {
    $scope.week = 6;
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn your way around the Photoshop interface while fixing up a portrait. We'll play with everything from saturation to lighting to spothealing. Remember, photo editing ideally should be minor retouches which can make a major difference.";
    $scope.homework = "Find a photo of yourself or a friend and use at least two tools you learned to fix the photo up. You can also go above and beyond and practice more intense photo manipulation like you can see in the example on the left! If you're at a loss for which photo to use, you can just use the one provided.";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/4cr709ar0roo2vp/week6.zip?dl=0";

  });

  decalApp.controller("week7Controller", function($scope) {
    $scope.week = 7;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Everything you make in Photoshop is built on layers. This lesson will give you an overview of techniques you can use to manipulate layer styles and create cutouts.";
    $scope.homework = "Make a poster dedicated to your favorite celebrity crush and add some cool text!"
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/zpnujydh3f2map8/week7.zip?dl=0";

  });

  decalApp.controller("week8Controller", function($scope) {
    $scope.week = 8;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to combine many images and textures with different blending modes to create an awesome movie poster.";
    $scope.homework = "Create a book cover using at least two textures and two stock photos. We'll provide you a folder of textures/photos you can choose from but don't feel limited to only these!";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/rf1z97ovbni1jtv/HARRYP__.zip?dl=0";
  });

  decalApp.controller("week9Controller", function($scope) {
    $scope.week = 9;
    $scope.date = "Nov 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to do cool tricks and effects in Photoshop including photo manipulation and gifs! ";
    $scope.homework = "Create a sci-fi magazine cover that may be on a magazine in the future! Use one the effects taught in class today ";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/zqq0gfrl4ollxrd/Lesson9Files.zip?dl=0";

  });

  decalApp.controller("week10Controller", function($scope) {
    $scope.week = 10;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Learn how to combine Illustrator & Photoshop to create cool composite images and designs.";
    $scope.homework = "Choose your favorite book and create a custom cover for it using at least two textures and two stock photos";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;
    $scope.download = "https://www.dropbox.com/s/es0uxkg5jcwj4x2/tutorial%2010%20files.zip?dl=0";

  });

  decalApp.controller("week11Controller", function($scope) {
    $scope.week = 11;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Apply everything you've learned this semester by rebranding and creating an advertisement design for a company!";
    $scope.homework = "Work on your final project";
    $scope.prevLesson = $scope.week-1;
    $scope.nextLesson = $scope.week+1;

  });

  decalApp.controller("week12Controller", function($scope) {
    $scope.week = 12;
    $scope.date = "Oct 5";
    $scope.pageTitle = $scope.lessons[$scope.week-1]["title"];
    $scope.tutorial = "Our last class will be a potluck style showcase! Bring some snacks to share and see all the work you and your classmates have accomplished this semester. The course will conclude with everyone presenting to the class their final project.";
    $scope.homework = "";
    $scope.prevLesson = $scope.week-1;

  });

}).call(this);