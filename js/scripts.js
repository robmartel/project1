
     $(function() {
            $(".carousel").carousel( { interval: 5000, pause: "false" } );
            $("#carouselButton").click(function(){
                if ($("#carouselButton").children("i").hasClass("fa-pause")) {
                    $(".carousel").carousel("pause");
                    $("#carouselButton").children("i").removeClass("fa-pause");
                    $("#carouselButton").children("i").addClass("fa-play");
                } else {
                    $(".carousel").carousel("cycle");
                    $("#carouselButton").children("i").removeClass("fa-play");
                    $("#carouselButton").children("i").addClass("fa-pause"); 
                }
            });
        });
        $(function() {
            $(".carousel2").carousel( { interval: 5000, pause: "false" } );
            $("#carouselButtonMenu").click(function(){
                if ($("#carouselButtonMenu").children("i").hasClass("fa-pause")) {
                    $(".carousel2").carousel("pause");
                    $("#carouselButtonMenu").children("i").removeClass("fa-pause");
                    $("#carouselButtonMenu").children("i").addClass("fa-play");
                } else {
                    $(".carousel2").carousel("cycle");
                    $("#carouselButtonMenu").children("i").removeClass("fa-play");
                    $("#carouselButtonMenu").children("i").addClass("fa-pause"); 
                }
            });
        });
        $(function() {
            $(".carousel3").carousel( { interval: 5000, pause: "false" } );
            $("#carouselButton3").click(function(){
                if ($("#carouselButton3").children("i").hasClass("fa-pause")) {
                    $(".carousel3").carousel("pause");
                    $("#carouselButton3").children("i").removeClass("fa-pause");
                    $("#carouselButton3").children("i").addClass("fa-play");
                } else {
                    $(".carousel3").carousel("cycle");
                    $("#carouselButton3").children("i").removeClass("fa-play");
                    $("#carouselButton3").children("i").addClass("fa-pause"); 
                }
            });
        });
        $(function(){
            $("#reserveButton").click(function(){
                $("#reserveModal").modal('show')
            });
        });
        $(function() {
            $("#loginButton").click(function() {
                $("#loginModal").modal('show')
            });
        });
