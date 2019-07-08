setTimeout(mainfunc, 0);



function mainfunc() {
    //document.getElementById("dot1").style.border="7px solid #254F50";

    var desc;
    var image;
    var timelineglobe;
    var title;

    //-------------------------BEIJING


    //$(".ball").animate({ top: 960,left:60, width:30 ,height:30 }, 5000 );
    setTimeout(function() {

        //City name show & hide
        $("h6").css("display", "block");
        $("h6").css("display", "block").animate({ left: 60 }, 500);
        $("h6").css("display", "block").animate({ fontSize: 40 }, 4000);

        //spin large globe
        $(".stage").animate({ width: 260, height: 250 }, 4000);
        $("#globe").animate({ right: 0, top: 10 }, 4000);

        $("#send").animate({ width: 50, height: 50, left: 1500, top: 400 }, 2000);
        $("#send").animate({ width: 0, height: 0, left: 1200, top: 400 }, 500);

        $(".ball").css("animation", "move-map-china 140s infinite linear")
        $(".ball").css("background-image", "url('assets/5beijing.png')");

        $("#dot1world").css("background-image", "url('assets/china.png')").animate({ left: "105" }, 4000);

    }, 0)
    setTimeout(function() {
        // $(".stage").css("display", "block").animate({ width: 250, height: 245, right: 0 }, 3000);
        //$("#globe").animate({ right: 0, top: 0 }, 3000);
        //$("h6").animate({ left: 1250, top: -80 }, 3000);
        //$("#dot1world").src="assets/5Beijing.png";//365 520 655 805 973 1128 1295 1545 1793


        //document.getElementById("title").display="none";
        //document.getElementById("mainimg").src="assets/2.png"
        image = $("#mainimg");
        image.fadeOut('fast', function() {
            image.attr('src', '');
            image.attr('src', 'assets/2007-Beijing/6-skyline1.jpg').fadeIn('slow');

        });
        $("h5").html("Beijing Skyline ");

    }, 4000)
    setTimeout(function() {
        // $(".stage").css("display", "block").animate({ width: 250, height: 245, right: 0 }, 3000);
        //$("#globe").animate({ right: 0, top: 0 }, 3000);
        //$("h6").animate({ left: 1250, top: -80 }, 3000);
        //$("#dot1world").src="assets/5Beijing.png";//365 520 655 805 973 1128 1295 1545 1793


        //document.getElementById("title").display="none";
        //document.getElementById("mainimg").src="assets/2.png"
        image = $("#mainimg");
        image.fadeOut('fast', function() {
            image.attr('src', '');
            image.attr('src', 'assets/2007-Beijing/3-templeofheaven.jpg').fadeIn('slow');
        });
        $("h5").html("Temple of Heaven ");

    }, 10000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2007-Beijing/2-tienanmen_night.jpg').fadeIn('slow');

        });
        $("h5").html("Tienanmen Square");


    }, 15000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2007-Beijing/8-greatwall2.jpg').fadeIn('slow');

        });
        $("h5").html("The Great Wall");

    }, 20000)
    setTimeout(function() {
        image.fadeOut(function() {
            image.fadeOut('fast', function() {
                image.attr('src', '');

                image.attr('src', 'assets/2007-Beijing/9-greatwall1.jpg').fadeIn('slow');

            });
            $("h5").html("The Great Wall");
        });
    }, 25000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2007-Beijing/10-forbiddencity2.jpg').fadeIn('slow');

        });
        $("h5").html("The Forbidden City");
    }, 30000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2007-Beijing/12-birdsnest.jpg').fadeIn('slow');

        });
        $("h5").html("Beijing Olympic Stadium");
    }, 35000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2007-Beijing/13-hall.jpg').fadeIn('slow');

        });
        $("h5").html("Conference Hall");



    }, 40000)



    //-------------------------SAN DIEGO
    setTimeout(function() {
        $("h5").html("");

        //City name show & hide
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });
        $("h6").html("San Diego");
        $("h6").css("left", "-100px");
        $("h6").css("font-size", "150px");
        $("h6").css("display", "block").animate({ left: 160 }, 500);
        $("h6").css("display", "block").animate({ fontSize: 40 }, 4000);

        //spin large globe
        $(".stage").animate({ width: 1100, height: 1050 }, 0);
        $("#globe").animate({ right: 750, top: 200 }, 0);
        $(".stage").animate({ width: 260, height: 250 }, 4000);
        $("#globe").animate({ right: 0, top: 10 }, 4000);

        $("#send").animate({ width: 300, height: 300, left: 20, top: 800 }, 0);
        $("#send").animate({ width: 50, height: 50, left: 1500, top: 400 }, 2000);
        $("#send").animate({ width: 0, height: 0, left: 1200, top: 400 }, 500);

        $(".ball").css("animation", "move-map-americawest 140s infinite linear")
        $(".ball").css("background-image", "url('assets/5sandiego.png')");

        $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "230" }, 4000);

    }, 45000)
    setTimeout(function() {
        //$(".stage").css("display", "block").animate({ width: 1050, height: 1050 }, 6000);
        //$(".ball").css("background-image", "url('assets/5sandiego.png')");
        //$(".stage").css("display", "block").animate({ width: 1050, height: 1050 }, 3000);
        //$("#globe").animate({ right: 480 }, 3000);
        //$("h6").animate({ left: 200, top: 300 }, 1000);

        //$("h6").animate({ left: 1250, top: -80 }, 6000);


        //$(".stage").css("display", "block").animate({ width: 250, height: 245, right: 0 }, 3000);
        //$("#globe").animate({ right: 0, top: 0 }, 3000);


        //$("h6").animate({ left: 0, top: 0 }, 1000);
        // $("h6").html("San Diego");
        //$("h6").css("display", "block").animate({ left: 100 }, 3000);
        //$("h6").animate({ left: -320, top: -165 }, 1000);

        //$("h6").css("display", "block").animate({ top: 0 }, 3000);
        //$("h6").css("display", "block").animate({ top: -400 }, 1000);


        //Change city title

        //$("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "190" }, 2000);



        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2009-San Diego/3-skyline_night2.jpg').fadeIn('slow');

        });
        $("h5").html("San Diego Skyline");

    }, 49000)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2009-San Diego/5-marina.jpg').fadeIn('slow');

        });
        $("h5").html("Marina View");

    }, 55000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2009-San Diego/6-harbour.jpg').fadeIn('slow');

        });
        $("h5").html("Harbour View");


    }, 60000)

    //-------------------------ORLANDO
    setTimeout(function() {
        $("h5").html("");

        //City name show & hide
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });
        $("h6").html("Orlando");
        $("h6").css("left", "-300px");
        $("h6").css("font-size", "150px");
        $("h6").animate({ left: 299 }, 500);
        $("h6").animate({ fontSize: 40 }, 4000);

        //spin large globe
        $(".stage").animate({ width: 1100, height: 1050 }, 0);
        $("#globe").animate({ right: 750, top: 200 }, 0);
        $(".stage").animate({ width: 260, height: 250 }, 4000);
        $("#globe").animate({ right: 0, top: 10 }, 4000);

        $("#send").animate({ width: 300, height: 300, left: 20, top: 800 }, 0);
        $("#send").animate({ width: 50, height: 50, left: 1500, top: 400 }, 2000);
        $("#send").animate({ width: 0, height: 0, left: 1200, top: 400 }, 500);

        $(".ball").css("animation", "move-map-americaeast 140s infinite linear")
        $(".ball").css("background-image", "url('assets/5orlando.png')");

        $("#dot1world").animate({ left: "350" }, 4000);

    }, 65000)
    setTimeout(function() {
        //$(".ball").css("background-image", "url('assets/5orlando.png')").fadeIn('slow');

        //$("h6").html("Orlando");
        //$("h6").css("display", "block").animate({ left: 100 }, 3000);

        //$(".sandiego").css("color", "#d6d6d6");

        //$(".orlando1").css("color", "white");

        //$("#dot1world").animate({ left: "345" }, 2000); //365 520 655 805 973 1128 1295 1545 1793

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/1-swandolphin.jpg').fadeIn('slow');

        });
        $("h5").html("Orlando Skyline");


    }, 69000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/2-kennedyspacecenter-RocketGardenandengine.jpg').fadeIn('slow');

        });
        $("h5").html("Kennedy Space Center");

    }, 75000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/3-kennedyspacecenter-SpaceXCRS62.jpg').fadeIn('slow');

        });
        $("h5").html("Kennedy Space Center");

    }, 80000)




    //-------------------------VEGAS
    setTimeout(function() {
        $("h5").html("");

        //City name show & hide
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });
        $("h6").html("Las Vegas");
        $("h6").css("left", "-100px");
        $("h6").css("font-size", "150px");
        $("h6").css("display", "block").animate({ left: 410 }, 500);
        $("h6").css("display", "block").animate({ fontSize: 40 }, 4000);

        //spin large globe
        $(".stage").animate({ width: 1100, height: 1050 }, 0);
        $("#globe").animate({ right: 750, top: 200 }, 0);
        $(".stage").animate({ width: 260, height: 250 }, 4000);
        $("#globe").animate({ right: 0, top: 10 }, 4000);

        $("#send").animate({ width: 300, height: 300, left: 20, top: 800 }, 0);
        $("#send").animate({ width: 50, height: 50, left: 1500, top: 400 }, 2000);
        $("#send").animate({ width: 0, height: 0, left: 1200, top: 400 }, 500);

        $(".ball").css("animation", "move-map-americawest 140s infinite linear")
        $(".ball").css("background-image", "url('assets/5lasvegas.png')");

        $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "477" }, 4000);

    }, 85000)
    setTimeout(function() {
        $ //(".ball").css("background-image", "url('assets/5lasvegas.png')");

        // $("h6").html("Las Vegas");
        // $("h6").css("display", "block").animate({ top: 0 }, 3000);
        //$("h6").css("display", "block").animate({ top: -400 }, 1000);



        //$(".orlando1").css("color", "#d6d6d6");

        //$(".lasvegas1").css("color", "white");

        //$("#dot1world").animate({ left: "500" }, 2000); //365 520 655 805 973 1128 1295 1545 1793

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/1-skyline_night.jpg');
            image.fadeIn('slow');
            $("h5").html("Las Vegas");

        });
    }, 89000)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/2-signs.jpg');
            image.fadeIn('slow');
            $("h5").html("Las Vegas Signs");

        });
    }, 95000)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/3-road.jpg');
            image.fadeIn('slow');
            $("h5").html("Eiffel Tower of Las Vegas");

        });
    }, 100000)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/7-city_night.jpg');
            image.fadeIn('slow');
            $("h5").html("Downtown Las Vegas");

        });
    }, 105000)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/8-bellagio.jpg');
            image.fadeIn('slow');
            $("h5").html("Bellagio Fountains");



        });
    }, 110000)



    //-------------------------Crete
    setTimeout(function() {
        $("h5").html("");
        //City name show & hide
        image.fadeOut('fast', function() {
            image.attr('src', '');
        });
        $("h6").html("Crete");
        $("h6").css("left", "-300px");
        $("h6").css("font-size", "150px");
        $("h6").css("display", "block").animate({ left: 570 }, 500);
        $("h6").css("display", "block").animate({ fontSize: 40 }, 4000);

        //spin large globe
        $(".stage").animate({ width: 1100, height: 1050 }, 0);
        $("#globe").animate({ right: 750, top: 200 }, 0);
        $(".stage").animate({ width: 260, height: 250 }, 4000);
        $("#globe").animate({ right: 0, top: 10 }, 4000);

        $("#send").animate({ width: 300, height: 300, left: 20, top: 800 }, 0);
        $("#send").animate({ width: 50, height: 50, left: 1500, top: 400 }, 2000);
        $("#send").animate({ width: 0, height: 0, left: 1200, top: 400 }, 500);

        $(".ball").css("animation", "move-map-europe 140s infinite linear")
        $(".ball").css("background-image", "url('assets/5crete.png')");

        $("#dot1world").css("background-image", "url('assets/greece.png')").animate({ left: "600" }, 4000);


    }, 115000)
    setTimeout(function() {
        //$(".ball").css("background-image", "url('assets/5crete.png')");

        // $("h6").html("Crete");
        // $("h6").css("display", "block").animate({ top: 0 }, 3000);
        //$("h6").css("display", "block").animate({ top: -400 }, 1000);

        //$("#dot1world").css("background-image", "url('assets/greece.png')");

        //$(".lasvegas1").css("color", "#d6d6d6");

        //$(".crete").css("color", "white");

        // $("#dot1world").animate({ left: "635" }, 2000); //365 520 655 805 973 1128 1295 1545 1793

        image.fadeOut('fast', function() {
            image.attr('src', 'assets/2014-Crete/7-chania2.jpg');
            image.fadeIn('slow');
            $("h5").html("Chania");


        });
    }, 119000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2014-Crete/4-knossos.jpg');
            image.fadeIn('slow');
            $("h5").html("Knossos Palace");

        });
    }, 125000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2014-Crete/1-spinalonga.jpg');
            image.fadeIn('slow');
            $("h5").html("Spinalonga");

        });
    }, 130000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2014-Crete/9-balos.jpg');
            image.fadeIn('slow');
            $("h5").html("Balos Beach");

        });
    }, 135000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2014-Crete/11-agiosnikolaos.jpg');
            image.fadeIn('slow');
            $("h5").html("Agios Nikolaos");

        });
    }, 140000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2014-Crete/14-openong_session2.jpeg');
            image.fadeIn('slow');
            $("h5").html("Opening Session");




        });
    }, 145000)




    //-------------------------Los Angeles
    setTimeout(function() {
        $(".ball").css("background-image", "url('assets/5losangeles.png')");

        $("h6").html("Los Angeles");
        $("h6").css("display", "block").animate({ top: 0 }, 3000);
        $("h6").css("display", "block").animate({ top: -400 }, 1000);

        $("#dot1world").css("background-image", "url('assets/usa.png')");

        // $(".crete").css("color", "#d6d6d6");

        //$(".losangeles").css("color", "white");

        $("#dot1world").animate({ left: "789" }, 2000); //365 520 655 805 973 1128 1295 1545 1793

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/7-skyline1.jpg');
            image.fadeIn('slow');
            $("h5").html("Los Angeles");


        });
    }, 150000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/2-the-westin-bonaventure-hotel-and-suites-los-angeles-santamonicapier.jpg');
            image.fadeIn('slow');
            $("h5").html("Santa Monica Pier");

        });
    }, 130000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/3-the-westin-bonaventure-hotel-and-suites-los-angeles-griffith.jpg');
            image.fadeIn('slow');
            $("h5").html("Griffith Observatory");

        });
    }, 135000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/4-the-westin-bonaventure-hotel-and-suites-los-angeles-exterior.jpg');
            image.fadeIn('slow');
            $("h5").html("Westin Bonaventure Hotel");

        });
    }, 140000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/5-waltdisney.jpg');
            image.fadeIn('slow');
            $("h5").html("Walt Disney Concert Hall");

        });
    }, 145000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/1-hollywood.jpg');
            image.fadeIn('slow');
            $("h5").html("Hollywood Sign");

        });
    }, 150000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/9-santamonica.jpg');
            image.fadeIn('slow');
            $("h5").html("Santa Monica Pier");

        });
    }, 155000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2015-Los Angeles/10-observatory.png');
            image.fadeIn('slow');
            $("h5").html("Griffith Observatory");



        });
    }, 160000)



    //-------------------------Toronto
    setTimeout(function() {
        $(".ball").css("background-image", "url('assets/5toronto.png')");

        $("h6").html("Toronto");
        $("h6").css("display", "block").animate({ top: 0 }, 3000);
        $("h6").css("display", "block").animate({ top: -400 }, 1000);

        $("#dot1world").css("background-image", "url('assets/canada.png')");

        // $(".losangeles").css("color", "#d6d6d6");

        //$(".toronto").css("color", "white");

        $("#dot1world").animate({ left: "953" }, 2000); //365 520 655 805 973 1128 1295 1545 1793

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2016-Toronto/4-skyline_night.jpg');
            image.fadeIn('slow');
            $("h5").html("Toronto");


        });
    }, 165000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2016-Toronto/1-torontosign2.jpg');
            image.fadeIn('slow');
            $("h5").html("Nathan Phillips Square");

        });
    }, 170000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2016-Toronto/5-harbour.jpg');
            image.fadeIn('slow');
            $("h5").html("Harbourfront");

        });
    }, 175000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2016-Toronto/6-gooderham_building.jpg');
            image.fadeIn('slow');
            $("h5").html("Gooderham Building");




        });
    }, 180000)



    //-------------------------Vancouver
    setTimeout(function() {
        $(".ball").css("background-image", "url('assets/5vancouver.png')");

        $("h6").html("Vancouver");
        $("h6").css("display", "block").animate({ top: 0 }, 3000);
        $("h6").css("display", "block").animate({ top: -400 }, 1000);

        $("#dot1world").css("background-image", "url('assets/canada.png')");

        //$(".toronto").css("color", "#d6d6d6");

        //$(".vancouver").css("color", "white");

        $("#dot1world").animate({ left: "1107" }, 2000); //365 520 655 805 973 1128 1295 1545 1793

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/2-skyline_night.jpg');
            image.fadeIn('slow');
            $("h5").html("Vancouver");

        });
    }, 185000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/3-sea.jpg');
            image.fadeIn('slow');
            $("h5").html("Coal Harbour");

        });
    }, 190000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/8-harbour.jpg');
            image.fadeIn('slow');
            $("h5").html("English Bay");

        });
    }, 195000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/9-bay_night.jpg');
            image.fadeIn('slow');
            $("h5").html("Science World");

        });
    }, 200000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2017-Vancouver/11-expo.jpg');
            image.fadeIn('slow');
            $("h5").html("Science World");




        });
    }, 205000)





    //-------------------------VEGAS
    setTimeout(function() {
        $(".ball").css("background-image", "url('assets/5lasvegas.png')");

        $("h6").html("Las Vegas");
        $("h6").css("display", "block").animate({ top: 0 }, 3000);
        $("h6").css("display", "block").animate({ top: -400 }, 1000);

        $("#dot1world").css("background-image", "url('assets/usa.png')");

        //$(".vancouver").css("color", "#d6d6d6");

        //$(".lasvegas2").css("color", "white");

        $("#dot1world").animate({ left: "1276" }, 2000); //365 520 655 805 973 1128 1295 1545 1793

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/1-skyline_night.jpg');
            image.fadeIn('slow');
            $("h5").html("Las Vegas Skyline");

        });
    }, 210000)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/2-signs.jpg');
            image.fadeIn('slow');
            $("h5").html("Las Vegas Signs");

        });
    }, 215000)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/3-road.jpg');
            image.fadeIn('slow');
            $("h5").html("Downtown Las Vegas");

        });
    }, 220000)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/7-city_night.jpg');
            image.fadeIn('slow');
            $("h5").html("Eiffel Tower of Las Vegas");

        });
    }, 225000)
    setTimeout(function() {

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2013,2018-Las Vegas/8-bellagio.jpg');
            image.fadeIn('slow');
            $("h5").html("Bellagio Fountains");



        });
    }, 230000)







    //-------------------------ORLANDO
    setTimeout(function() {
        $(".ball").css("background-image", "url('assets/5orlando.png')");

        $("h6").html("Orlando");
        $("h6").css("display", "block").animate({ top: 0 }, 3000);
        $("h6").css("display", "block").animate({ top: -400 }, 1000);

        //$(".lasvegas2").css("color", "#d6d6d6");

        //$(".orlando2").css("color","white");
        $("#dot1world").css("box-shadow", "0px 45px 30px 30px rgba(255, 255, 255, 0)");
        $("#dot1world").animate({ left: "1592" }, 2000); //365 520 655 805 973 1128 1295 1545 1793

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/1-swandolphin.jpg');
            image.fadeIn('slow');
            $("h5").html("Orlando");

        });
    }, 240000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/2-kennedyspacecenter-RocketGardenandengine.jpg');
            image.fadeIn('slow');
            $("h5").html("Kennedy Space Center");

        });
    }, 250000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2011,2019-Orlando/3-kennedyspacecenter-SpaceXCRS62.jpg');
            image.fadeIn('slow');
            $("h5").html("Kennedy Space Center");



        });
    }, 260000)





    //-------------------------Copenhagen
    setTimeout(function() {
        $(".ball").css("background-image", "url('assets/5copenhagen.png')");

        $("h6").html("Copenhagen");
        $("h6").css("display", "block").animate({ top: 0 }, 3000);
        $("h6").css("display", "block").animate({ top: -400 }, 1000);

        $("#dot1world").css("background-image", "url('assets/denmark.png')");

        //$(".orlando2").css("color","#152f3d");

        //$(".copenhagen").css("color","white");

        $("#dot1world").animate({ left: "1775" }, 2000); //365 520 655 805 973 1128 1295 1545 1793

        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/5-nyhavn2.jpg');
            image.fadeIn('slow');
            $("h5").html("Copenhagen");

        });
    }, 270000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/1-tivoli.jpg');
            image.fadeIn('slow');
            $("h5").html("Tivoli");

        });
    }, 280000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/2-oresund2.jpg');
            image.fadeIn('slow');
            $("h5").html("Oresund");

        });
    }, 290000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/4-opera.jpg');
            image.fadeIn('slow');
            $("h5").html("Opera House");

        });
    }, 300000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/6-nyhavn1.jpg');
            image.fadeIn('slow');
            $("h5").html("Nyhavn");

        });
    }, 310000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/7-christiansborg2.jpg');
            image.fadeIn('slow');
            $("h5").html("Frederik VII Statue, Christiansborg Slot");

        });
    }, 320000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/8-Bella-Center-entrance.jpg');
            image.fadeIn('slow');
            $("h5").html("Bella Center");

        });
    }, 330000)
    setTimeout(function() {
        image.fadeOut('fast', function() {
            image.attr('src', '');

            image.attr('src', 'assets/2020-Copenhagen/9-AC-Hotel-Bella-Sky-Copenhagen.jpg');
            image.fadeIn('slow');
            $("h5").html("AC Hotel");



        });
    }, 340000)
}


//Reload at end
setTimeout(function() {
    //$(".copenhagen").css("color","#152f3d");
    $("#dot1world").css("box-shadow", "0px 45px 30px 30px rgba(255, 255, 255, 0.406)");

    window.location.reload(1);
}, 350000);