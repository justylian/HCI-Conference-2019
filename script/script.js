// then to call it, you would use this
var imageSrcs = ["assets/2007-Beijing/1-beijing-skyline1.jpg", 'assets/2007-Beijing/2-beijing-templeofheaven.jpg', 'assets/2007-Beijing/4-beijing-tienanmen_night.jpg', 'assets/2007-Beijing/3-beijing-greatwall2.jpg',
    'assets/2007-Beijing/7-beijing-birdsnest.jpg', 'assets/2007-Beijing/5-beijing-greatwall1.jpg',
    'assets/2009-San Diego/3-skyline_night2.jpg', 'assets/2009-San Diego/5-marina.jpg', 'assets/2009-San Diego/1-sandiego-balboa.jpg', 'assets/2009-San Diego/2-sandiego-ship.jpg', 'assets/2009-San Diego/3-sandiego-hotel-del-coronado.jpg', 'assets/2009-San Diego/6-harbour.jpg', 'assets/2011,2019-Orlando/1-swandolphin.jpg', 'assets/2011,2019-Orlando/2-kennedyspacecenter-RocketGardenandengine.jpg', 'assets/2011,2019-Orlando/3-kennedyspacecenter-SpaceXCRS62.jpg'

];

function preloadImages(srcs) {
    if (!preloadImages.cache) {
        preloadImages.cache = [];
    }
    var img;
    for (var i = 0; i < srcs.length; i++) {
        img = new Image();
        img.src = srcs[i];
        preloadImages.cache.push(img);
        console.log("okdd");
    }
}
preloadImages(imageSrcs);



setTimeout(mainfunc, 0);


function mainfunc() {
    //document.getElementById("dot1").style.border="7px solid #254F50";

    var desc;
    var image;
    var imagemap;
    var imagesend;
    var timelineglobe;
    var title;

    var gap = 5000; //gap between interchanging photos-5000
    var introgap = 2000; // of each and between intros-2000
    var initialgap = 500; //gap before first photo
    var timesum = 0;
    //-------------------------BEIJING

    setTimeout(function() {

        //City name show & hide
        $("h6").css("display", "block");
        $("h6").animate({ left: 60 }, 1000);

        //+easein
        $("#send").animate({ width: 50, height: 50, left: 1710, top: 550 }, 1800);
        $("#send").animate({ width: 0, height: 0, left: 1700, top: 550 }, 500);
        $("#send").css("animation", "rot 3s infinite linear");

        $(".ball").css("background-image", "url('assets/5beijing.png')");
        $(".ball").css("background-position", "calc(100% - 20px) calc(100% - 10px)");


        $("#dot1world").css("background-image", "url('assets/china.png')").animate({ left: "105" }, introgap + 1000);

    }, timesum)
    setTimeout(function() {
        //spin large globe
        $("h6").animate({ fontSize: 40, top: 30 }, 1000);

        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);

        $(".ball").css("animation", "move-map-globe 80s infinite linear")


        image = $("#mainimg");
        image.fadeOut('fast', function() {
            image.attr('src', '');
            image.attr('src', 'assets/2007-Beijing/1-beijing-skyline1.jpg').fadeIn('slow');
            $("h5").html("Beijing Skyline ");


        });

    }, timesum = timesum + introgap)
    setTimeout(function() {

        image = $("#mainimg");
        image.fadeOut('fast', function() {
            image.attr('src', '');
            image.attr('src', 'assets/2007-Beijing/2-beijing-templeofheaven.jpg').fadeIn('slow');
            $("h5").html("Temple of Heaven ");

        });
        timesum = timesum + gap;

    }, timesum)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2007-Beijing/4-beijing-tienanmen_night.jpg').fadeIn('slow');
            $("h5").html("Tienanmen Square");

        });

        timesum = timesum + gap;

    }, timesum)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2007-Beijing/3-beijing-greatwall2.jpg').fadeIn('slow');
            $("h5").html("The Great Wall");

        });
        timesum = timesum + gap;

    }, timesum)

    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2007-Beijing/6-beijing-forbiddencity2.jpg').fadeIn('slow');
            $("h5").html("The Forbidden City");

        });
        timesum = timesum + gap;

    }, timesum)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2007-Beijing/7-beijing-birdsnest.jpg').fadeIn('slow');
            $("h5").html("Beijing Olympic Stadium");

        });
        timesum = timesum + gap;

    }, timesum)
    setTimeout(function() {
        image.fadeOut(function() {
            image.fadeOut('fast', function() {
                image.attr('src', '');

                image.attr('src', 'assets/2007-Beijing/5-beijing-greatwall1.jpg').fadeIn('slow');
                $("h5").html("The Great Wall");

            });
        });
        timesum = timesum + gap;
    }, timesum)










    //TO DO SHADOW GLOBE, PHOTOS SERVER

    //-------------------------SAN DIEGO
    //160 230
    setTimeout(function() {
        //background mainimg clear
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });

        //description clear
        $("h5").html("");

        //city name->initial
        $("h6").css("left", "-1000px");
        $("h6").css("top", "250px");
        $("h6").css("font-size", "135px");

        //city name->new entry
        $("h6").html("San Diego").animate({ left: 60 }, 1000); //*

        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + gap)



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5sandiego.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 80s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/sendflip.png)'); //*

        imagesend.animate({ width: 200, height: 200, left: 1900, top: 380 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 600, top: 410 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 620, top: 430 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "230" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 160, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);


    }, timesum = timesum + introgap)

    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2009-San Diego/3-skyline_night2.jpg').fadeIn('slow');
            $("h5").html("San Diego Skyline");

        });
        timesum = timesum + initialgap;
    }, timesum)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2009-San Diego/5-marina.jpg').fadeIn('slow');
            $("h5").html("Coronado Bridge");

        });
        timesum = timesum + gap;
    }, timesum)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2009-San Diego/1-sandiego-balboa.jpg').fadeIn('slow');
            $("h5").html("Balboa Park");

        });

        timesum = timesum + gap;

    }, )
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2009-San Diego/2-sandiego-ship.jpg').fadeIn('slow');
            $("h5").html("USS Midway Museum");

        });
        timesum = timesum + gap;


    }, timesum)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2009-San Diego/3-sandiego-hotel-del-coronado.jpg').fadeIn('slow');
            $("h5").html("Hotel del Coronado");

        });
        timesum = timesum + gap;


    }, timesum)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2009-San Diego/6-harbour.jpg').fadeIn('slow');
            $("h5").html("Harbour View");

        });

        timesum = timesum + gap;

    }, timesum)

    //-------------------------ORLANDO
    //299 350

    setTimeout(function() {
        //background mainimg clear
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });

        //description clear
        $("h5").html("");

        //city name->initial
        $("h6").css("left", "-1000px");
        $("h6").css("top", "250px");
        $("h6").css("font-size", "135px");

        //city name->new entry
        $("h6").html("Orlando").animate({ left: 60 }, 1000); //*


        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + gap)



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5orlando.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 80s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*

        imagesend.animate({ width: 200, height: 200, left: 650, top: 430 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 750, top: 450 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 750, top: 450 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "350" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 299, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);


    }, timesum = timesum + introgap)

    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/1-swandolphin.jpg').fadeIn('slow');
            $("h5").html("Orlando Skyline");

        });


    }, timesum = timesum + 500)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/2-kennedyspacecenter-RocketGardenandengine.jpg').fadeIn('slow');
            $("h5").html("Kennedy Space Center");

        });

    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/3-kennedyspacecenter-SpaceXCRS62.jpg').fadeIn('slow');
            $("h5").html("Kennedy Space Center");

        });

    }, timesum = timesum + gap)




    //-------------------------VEGAS
    //410 477

    setTimeout(function() {
        //background mainimg clear
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });

        //description clear
        $("h5").html("");

        //city name->initial
        $("h6").css("left", "-1000px");
        $("h6").css("top", "250px");
        $("h6").css("font-size", "135px");

        //city name->new entry
        $("h6").html("Las Vegas").animate({ left: 60 }, 1000); //*


        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + gap)



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5lasvegas.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 80s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/sendflip.png)'); //*

        imagesend.animate({ width: 200, height: 200, left: 1000, top: 350 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 600, top: 450 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 680, top: 380 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "477" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 410, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);


    }, timesum = timesum + introgap)



    setTimeout(function() {


        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/1-skyline_night.jpg');
            image.fadeIn('slow');
            $("h5").html("Las Vegas");

        });
    }, timesum = timesum + initialgap)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/2-signs.jpg');
            image.fadeIn('slow');
            $("h5").html("Las Vegas Signs");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/3-road.jpg');
            image.fadeIn('slow');
            $("h5").html("Eiffel Tower of Las Vegas");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/7-city_night.jpg');
            image.fadeIn('slow');
            $("h5").html("Downtown Las Vegas");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/8-bellagio.jpg');
            image.fadeIn('slow');
            $("h5").html("Bellagio Fountains");



        });
    }, timesum = timesum + gap)



    //-------------------------Crete
    //570 600

    setTimeout(function() {
        //background mainimg clear
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });

        //description clear
        $("h5").html("");

        //city name->initial
        $("h6").css("left", "-1000px");
        $("h6").css("top", "250px");
        $("h6").css("font-size", "135px");

        //city name->new entry
        $("h6").html("Crete").animate({ left: 60 }, 1000); //*


        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + gap)



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5crete.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 80s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*

        imagesend.animate({ width: 200, height: 200, left: 700, top: 400 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 1300, top: 400 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 1200, top: 400 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/greece.png')").animate({ left: "600" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 570, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);


    }, timesum = timesum + introgap)




    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', 'assets/2014-Crete/7-chania2.jpg');
            image.fadeIn('slow');
            $("h5").html("Chania");


        });
    }, timesum = timesum + initialgap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2014-Crete/4-knossos.jpg');
            image.fadeIn('slow');
            $("h5").html("Knossos Palace");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2014-Crete/1-spinalonga.jpg');
            image.fadeIn('slow');
            $("h5").html("Spinalonga");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2014-Crete/9-balos.jpg');
            image.fadeIn('slow');
            $("h5").html("Balos Beach");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2014-Crete/11-agiosnikolaos.jpg');
            image.fadeIn('slow');
            $("h5").html("Agios Nikolaos");

        });
    }, timesum = timesum + gap)





    //-------------------------Los Angeles
    //690 723




    setTimeout(function() {
        //background mainimg clear
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });

        //description clear
        $("h5").html("");

        //city name->initial
        $("h6").css("left", "-1000px");
        $("h6").css("top", "250px");
        $("h6").css("font-size", "135px");

        //city name->new entry
        $("h6").html("Los Angeles").animate({ left: 60 }, 1000); //*


        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + gap)



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5losangeles.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 80s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/sendflip.png)'); //*

        imagesend.animate({ width: 200, height: 200, left: 1350, top: 400 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 500, top: 350 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 630, top: 400 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "723" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 635, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);


    }, timesum = timesum + introgap)






    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/3-the-westin-bonaventure-hotel-and-suites-los-angeles-griffith.jpg');
            image.fadeIn('slow');
            $("h5").html("Griffith Observatory");

        });
    }, timesum = timesum + initialgap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/4-the-westin-bonaventure-hotel-and-suites-los-angeles-exterior.jpg');
            image.fadeIn('slow');
            $("h5").html("Westin Bonaventure Hotel");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/5-waltdisney.jpg');
            image.fadeIn('slow');
            $("h5").html("Walt Disney Concert Hall");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/1-hollywood.jpg');
            image.fadeIn('slow');
            $("h5").html("Hollywood Sign");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/9-santamonica.jpg');
            image.fadeIn('slow');
            $("h5").html("Santa Monica Pier");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/10-observatory.png');
            image.fadeIn('slow');
            $("h5").html("Griffith Observatory");



        });
    }, timesum = timesum + gap)




    //-------------------------Toronto
    // 815 846


    setTimeout(function() {
        //background mainimg clear
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });

        //description clear
        $("h5").html("");

        //city name->initial
        $("h6").css("left", "-1000px");
        $("h6").css("top", "250px");
        $("h6").css("font-size", "135px");

        //city name->new entry
        $("h6").html("Toronto").animate({ left: 60 }, 1000); //*


        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + gap)



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5toronto.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 80s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*

        imagesend.animate({ width: 200, height: 200, left: 650, top: 400 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 900, top: 350 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 800, top: 350 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/canada.png')").animate({ left: "846" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 795, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);


    }, timesum = timesum + introgap)





    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2016-Toronto/1-torontosign2.jpg');
            image.fadeIn('slow');
            $("h5").html("Nathan Phillips Square");

        });
    }, timesum = timesum + initialgap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2016-Toronto/5-harbour.jpg');
            image.fadeIn('slow');
            $("h5").html("Harbourfront");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2016-Toronto/1-toronto-niagara.jpg');
            image.fadeIn('slow');
            $("h5").html("Niagara Falls");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2016-Toronto/6-gooderham_building.jpg');
            image.fadeIn('slow');
            $("h5").html("Gooderham Building");




        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2016-Toronto/7-westinharbourcastle.jpg');
            image.fadeIn('slow');
            $("h5").html("The Westin Harbour Castle");

        });
    }, timesum = timesum + gap)



    //-------------------------Vancouver
    //937 970






    setTimeout(function() {
        //background mainimg clear
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });

        //description clear
        $("h5").html("");

        //city name->initial
        $("h6").css("left", "-1000px");
        $("h6").css("top", "250px");
        $("h6").css("font-size", "135px");

        //city name->new entry
        $("h6").html("Vancouver").animate({ left: 60 }, 1000); //*


        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + gap)



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5vancouver.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 80s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/sendflip.png)'); //*

        imagesend.animate({ width: 200, height: 200, left: 1100, top: 320 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 660, top: 320 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 660, top: 320 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/canada.png')").animate({ left: "970" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 900, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);


    }, timesum = timesum + introgap)




    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/4-vancouver-harbour2.jpg');
            image.fadeIn('slow');
            $("h5").html("Vancouver Harbour");

        });
    }, timesum = timesum + initialgap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/8-harbour.jpg');
            image.fadeIn('slow');
            $("h5").html("English Bay");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/9-bay_night.jpg');
            image.fadeIn('slow');
            $("h5").html("Science World");

        });
    }, timesum = timesum + gap)

    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/1-vancouver-harbour.jpg');
            image.fadeIn('slow');
            $("h5").html("Vancouver Harbour");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/2-downtown-vancouver.jpg');
            image.fadeIn('slow');
            $("h5").html("Downtown Vancouver");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/3-vancouver-convcenter.jpg');
            image.fadeIn('slow');
            $("h5").html("Vancouver Convention center");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/1-vancouver-digitalorca.jpg');
            image.fadeIn('slow');
            $("h5").html("Digital Orca");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/5-vancouver-harbour1.jpg');
            image.fadeIn('slow');
            $("h5").html("Vancouver Harbour");

        });
    }, timesum = timesum + gap)






    //-------------------------VEGAS
    //1066 1095 




    setTimeout(function() {
        //background mainimg clear
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });

        //description clear
        $("h5").html("");

        //city name->initial
        $("h6").css("left", "-1000px");
        $("h6").css("top", "250px");
        $("h6").css("font-size", "135px");

        //city name->new entry
        $("h6").html("Las Vegas").animate({ left: 60 }, 1000); //*


        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + gap)



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5lasvegas.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 80s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*

        imagesend.animate({ width: 200, height: 200, left: 800, top: 350 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 690, top: 390 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 690, top: 390 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "1095" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 1026, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);


    }, timesum = timesum + introgap)



    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/2-signs.jpg');
            image.fadeIn('slow');
            $("h5").html("Las Vegas Signs");

        });
    }, timesum = timesum + initialgap)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/3-road.jpg');
            image.fadeIn('slow');
            $("h5").html("Downtown Las Vegas");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/7-city_night.jpg');
            image.fadeIn('slow');
            $("h5").html("Eiffel Tower of Las Vegas");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/8-bellagio.jpg');
            image.fadeIn('slow');
            $("h5").html("Bellagio Fountains");



        });
    }, timesum = timesum + gap)







    //-------------------------ORLANDO
    //1340 1372




    setTimeout(function() {
        //background mainimg clear
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });

        //description clear
        $("h5").html("");

        //city name->initial
        $("h6").css("left", "-1000px");
        $("h6").css("top", "250px");
        $("h6").css("font-size", "135px");

        //city name->new entry
        $("h6").html("Orlando").animate({ left: 60 }, 1000); //*


        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + gap)



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5orlando.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 80s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*

        imagesend.animate({ width: 200, height: 200, left: 710, top: 400 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 740, top: 390 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 740, top: 390 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "1368" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 1310, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);


    }, timesum = timesum + introgap)



    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/1-swandolphin.jpg').fadeIn('slow');
            $("h5").html("Orlando Skyline");

        });


    }, timesum = timesum + initialgap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/2-kennedyspacecenter-RocketGardenandengine.jpg');
            image.fadeIn('slow');
            $("h5").html("Kennedy Space Center");

        });
    }, timesum = timesum + gap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/3-kennedyspacecenter-SpaceXCRS62.jpg');
            image.fadeIn('slow');
            $("h5").html("Kennedy Space Center");



        });
    }, timesum = timesum + (gap * 2))





    //-------------------------Copenhagen
    //1485 1517






    setTimeout(function() {
        //background mainimg clear
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });

        //description clear
        $("h5").html("");

        //city name->initial
        $("h6").css("left", "-1000px");
        $("h6").css("top", "250px");
        $("h6").css("font-size", "135px");

        //city name->new entry
        $("h6").html("Copenhagen").animate({ left: 60 }, 1000); //*


        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + (gap * 2))



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5copenhagen.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 80s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*

        imagesend.animate({ width: 200, height: 200, left: 800, top: 430 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 1360, top: 280 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 1370, top: 280 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/denmark.png')").animate({ left: "1497" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 1395, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);


    }, timesum = timesum + introgap)




    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/8-Bella-Center-entrance.jpg');
            image.fadeIn('slow');
            $("h5").html("Bella Center");

        });
    }, timesum = timesum + initialgap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/9-AC-Hotel-Bella-Sky-Copenhagen.jpg');
            image.fadeIn('slow');
            $("h5").html("AC Hotel");



        });
    }, timesum = timesum + (gap * 2))
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/1-tivoli.jpg');
            image.fadeIn('slow');
            $("h5").html("Tivoli");

        });
    }, timesum = timesum + introgap)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/2-oresund2.jpg');
            image.fadeIn('slow');
            $("h5").html("Oresund");

        });
    }, timesum = timesum + (gap * 2))
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/4-opera.jpg');
            image.fadeIn('slow');
            $("h5").html("Opera House");

        });
    }, timesum = timesum + (gap * 2))
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/6-nyhavn1.jpg');
            image.fadeIn('slow');
            $("h5").html("Nyhavn");

        });
    }, timesum = timesum + (gap * 2))
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/7-christiansborg2.jpg');
            image.fadeIn('slow');
            $("h5").html("Frederik VII Statue, Christiansborg Slot");

        });
    }, timesum = timesum + (gap * 2))



    //Reload at end
    setTimeout(function() {
        //$(".copenhagen").css("color","#152f3d");
        $("#dot1world").css("box-shadow", "0px 45px 30px 30px rgba(255, 255, 255, 0.406)");

        window.location.reload(1);
    }, timesum = timesum + 10000)
}