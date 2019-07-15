//FIXED-TIMINGS
var introgap = 2000; //  between intros-2000
var initialgap = 500; //gap before first photo
var timesum = 0;

var imagepath = [];
var imagedesc = [];
var imagecount;
var cityname = "";
var cityeach = "";


//-------------------JSON------------------


var obj;
var lengthBeijing;
var lengthSanDiego;
var lengthOrlando;
var lengthLosAngeles;
var lengthCrete;
var lengthToronto;
var lengthVancouver;
var lengthLasVegas;
var lengthCopenhagen;

$.getJSON("./images.json", function(json) {
    obj = json; // = new Array();
    //obj = JSON.parse(json);
    lengthBeijing = obj.Beijing.length;
    lengthSanDiego = obj.SanDiego.length;
    lengthOrlando = obj.Orlando.length;
    lengthLosAngeles = obj.LosAngeles.length;
    lengthCrete = obj.Crete.length;
    lengthToronto = obj.Toronto.length;
    lengthVancouver = obj.Vancouver.length;
    lengthLasVegas = obj.LasVegas.length;
    lengthCopenhagen = obj.Copenhagen.length;
    console.log(lengthCopenhagen);
});






function getSlide(cityname) {
    //imagepath = [];
    if (cityname === "Beijing") {
        for (var i = 0; i < obj.Beijing.length; i++) {
            cityeach = obj.Beijing[i];
            imagepath[i] = cityeach.Image;
            imagedesc[i] = cityeach.Label;
        }
        imagecount = lengthBeijing;
    } else if (cityname === "SanDiego") {
        for (var i = 0; i < obj.SanDiego.length; i++) {
            cityeach = obj.SanDiego[i];
            imagepath[i] = cityeach.Image;
            imagedesc[i] = cityeach.Label;
        }
        imagecount = lengthSanDiego;
    } else if (cityname === "Orlando") {
        for (var i = 0; i < obj.Orlando.length; i++) {
            cityeach = obj.Orlando[i];
            imagepath[i] = cityeach.Image;
            imagedesc[i] = cityeach.Label;
        }
        imagecount = lengthOrlando;
    } else if (cityname === "LasVegas") {
        for (var i = 0; i < obj.LasVegas.length; i++) {
            cityeach = obj.LasVegas[i];
            imagepath[i] = cityeach.Image;
            imagedesc[i] = cityeach.Label;
        }
        imagecount = lengthLasVegas;
    } else if (cityname === "Crete") {
        for (var i = 0; i < obj.Crete.length; i++) {
            cityeach = obj.Crete[i];
            imagepath[i] = cityeach.Image;
            imagedesc[i] = cityeach.Label;
        }
        imagecount = lengthCrete;
    } else if (cityname === "LosAngeles") {
        for (var i = 0; i < obj.LosAngeles.length; i++) {
            cityeach = obj.LosAngeles[i];
            imagepath[i] = cityeach.Image;
            imagedesc[i] = cityeach.Label;
        }
        imagecount = lengthLosAngeles;
    } else if (cityname === "Toronto") {
        for (var i = 0; i < obj.Toronto.length; i++) {
            cityeach = obj.Toronto[i];
            imagepath[i] = cityeach.Image;
            imagedesc[i] = cityeach.Label;
        }
        imagecount = lengthToronto;
    } else if (cityname === "Vancouver") {
        for (var i = 0; i < obj.Vancouver.length; i++) {
            cityeach = obj.Vancouver[i];
            imagepath[i] = cityeach.Image;
            imagedesc[i] = cityeach.Label;
        }
        imagecount = lengthVancouver;
    } else if (cityname === "Copenhagen") {
        for (var i = 0; i < obj.Copenhagen.length; i++) {
            cityeach = obj.Copenhagen[i];
            imagepath[i] = cityeach.Image;
            imagedesc[i] = cityeach.Label;
        }
        imagecount = lengthCopenhagen;
    }


}

function showImages() {
    image = $("#mainimg");
    desc = $("h5");
    for (var j = 0; j < imagecount; j++) {
        (function(ind) {
            setTimeout(function() {

                image.fadeOut('fast', function() {
                    image.attr('src', '');
                    image.attr('src', imagepath[ind]).fadeIn('slow');


                });
                desc.fadeOut('fast', function() {
                    desc.html(imagedesc[ind]).fadeIn('slow');
                });
            }, (gap * ind));
        })(j);
    }
}

function showFutureImages() {
    image = $("#mainimg");
    desc = $("h5");

    for (var j = 0; j < imagecount; j++) {
        (function(ind) {
            setTimeout(function() {

                image.fadeOut('fast', function() {
                    image.attr('src', '');
                    image.attr('src', imagepath[ind]).fadeIn('slow');
                    $("h5").html(imagedesc[ind]).fadeIn('slow');

                });
                desc.fadeOut('fast', function() {
                    desc.html(imagedesc[ind]).fadeIn('slow');
                });

            }, (futuregap * ind));
        })(j);
    }
}


//-------------------PRELOADING------------------

var imageSrcs = ["assets/2007-Beijing/1-beijing-skyline1.jpg", 'assets/2007-Beijing/2-beijing-templeofheaven.jpg', 'assets/2007-Beijing/4-beijing-tienanmen_night.jpg', 'assets/2007-Beijing/3-beijing-greatwall2.jpg',
    'assets/2007-Beijing/7-beijing-birdsnest.jpg', 'assets/2007-Beijing/5-beijing-greatwall1.jpg',
    'assets/2009-San Diego/3-skyline_night2.jpg', 'assets/2009-San Diego/5-marina.jpg', 'assets/2009-San Diego/1-sandiego-balboa.jpg', 'assets/2009-San Diego/2-sandiego-ship.jpg', 'assets/2009-San Diego/3-sandiego-hotel-del-coronado.jpg', 'assets/2009-San Diego/6-harbour.jpg', 'assets/2011,2019-Orlando/1-swandolphin.jpg', 'assets/2011,2019-Orlando/2-kennedyspacecenter-RocketGardenandengine.jpg', 'assets/2011,2019-Orlando/3-kennedyspacecenter-SpaceXCRS62.jpg',
    'assets/2013,2018-Las Vegas/1-skyline_night.jpg', 'assets/2013,2018-Las Vegas/2-signs.jpg', 'assets/2013,2018-Las Vegas/3-road.jpg', 'assets/2013,2018-Las Vegas/7-city_night.jpg', 'assets/2013,2018-Las Vegas/8-bellagio.jpg', 'assets/2014-Crete/1-spinalonga.jpg', 'assets/2014-Crete/4-knossos.jpg', 'assets/2014-Crete/7-chania2.jpg', 'assets/2014-Crete/9-balos.jpg',
    'assets/2014-Crete/11-agiosnikolaos.jpg', 'assets/2014-Crete/1-hollywood.jpg', 'assets/2015-Los Angeles/3-the-westin-bonaventure-hotel-and-suites-los-angeles-griffith.jpg', 'assets/2015-Los Angeles/4-the-westin-bonaventure-hotel-and-suites-los-angeles-exterior.jpg', 'assets/2015-Los Angeles/5-waltdisney.jpg', 'assets/2015-Los Angeles/9-santamonica.jpg', 'assets/2015-Los Angeles/10-observatory.png', 'assets/2016-Toronto/1-toronto-niagara.jpg', 'assets/2016-Toronto/1-torontosign2.jpg',
    'assets/2016-Toronto/4-skyline_night.jpg', 'assets/2016-Toronto/5-harbour.jpg', 'assets/2016-Toronto/6-gooderham_building.jpg', 'assets/2016-Toronto/7-westinharbourcastle.jpg', 'assets/2017-Vancouver/1-vancouver-digitalorca.jpg', 'assets/2017-Vancouver/1-vancouver-harbour.jpg', 'assets/2017-Vancouver/2-downtown-vancouver.jpg', 'assets/2017-Vancouver/3-vancouver-convcenter.jpg', 'assets/2017-Vancouver/4-vancouver-harbour2.jpg',
    'assets/2017-Vancouver/5-vancouver-harbour1.jpg', 'assets/2017-Vancouver/8-harbour.jpg', 'assets/2017-Vancouver/9-bay_night.jpg', 'assets/2020-Copenhagen/1-tivoli.jpg', 'assets/2020-Copenhagen/2-oresund2.jpg', 'assets/2020-Copenhagen/4-opera.jpg', 'assets/2020-Copenhagen/5-nyhavn2.jpg', '6-nyhavn1.jpg', 'assets/2020-Copenhagen/7-christiansborg2.jpg',
    'assets/2020-Copenhagen/8-Bella-Center-entrance.jpg', 'assets/2020-Copenhagen/9-AC-Hotel-Bella-Sky-Copenhagen.jpg'

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
        //console.log("okdd");
    }
}
//preloadImages(imageSrcs);


//-------------------MAIN------------------

setTimeout(mainfunc, 0);


function mainfunc() {
    //document.getElementById("dot1").style.border="7px solid #254F50";

    var desc;
    var image;
    var imagemap;
    var imagesend;
    var timelineglobe;
    var title;







    //-------------------------BEIJING-2007-------------------------





    setTimeout(function() {
        getSlide('Beijing');
        //City name show & hide
        $("h6").css("display", "block");
        $("h6").animate({ left: 60 }, 1000);

        //+easein
        $("#send").css("animation", "rot 3s infinite linear");
        $("#send").animate({ width: 50, height: 50, left: 1710, top: 550 }, 1800);
        $("#send").animate({ width: 0, height: 0, left: 1700, top: 550 }, 500);

        $(".ball").css("background-image", "url('assets/5beijing.png')");
        $(".ball").css("background-position", "calc(100% - 20px) calc(100% - 10px)");


        $("#dot1world").css("background-image", "url('assets/china.png')").animate({ left: "105" }, introgap + 1000);

    }, 100)
    setTimeout(function() {
        //spin large globe
        $("h6").animate({ fontSize: 40, top: 30 }, 1000);

        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);

        $(".ball").css("animation", "move-map-globe 50s infinite linear")
        $("#ballshadow").show(500);
        // $("#ballshadow").animate({ display: "block" }, 1000);



        //showImages();
        image = $("#mainimg");
        /* image = $("#mainimg");
          image.fadeOut('fast', function() {
              image.attr('src', '');
              image.attr('src', imagepath[0]).fadeIn('slow');
              $("h5").html(imagedesc[0]);

          });*/



    }, timesum = timesum + introgap)


    setTimeout(function() {


        showImages();
        $("#send").css("animation", "");


    }, timesum = timesum + initialgap)











    //-------------------------SAN DIEGO-2009-------------------------




    setTimeout(function() {
        getSlide('SanDiego');

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
        $("#ballshadow").hide(500);

        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + (gap * lengthBeijing))



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5sandiego.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 50s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/sendflip.png)'); //*
        imagesend.css("animation", "rot 3s infinite linear");
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
        $("#ballshadow").show(500);

        imagesend.css("animation", "");


    }, timesum = timesum + introgap)

    setTimeout(function() {
        showImages();
        $("#send").css("animation", "");

    }, timesum = timesum + initialgap)







    //-------------------------ORLANDO-2011-------------------------





    setTimeout(function() {
        getSlide('Orlando');

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

        $("#ballshadow").hide(500);

        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + (gap * lengthBeijing))



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5orlando.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 50s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*

        imagesend.css("animation", "rot 3s infinite linear");
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
        $("#ballshadow").show(500);

        imagesend.css("animation", "");

    }, timesum = timesum + introgap)

    setTimeout(function() {
        showImages();
        $("#send").css("animation", "");



    }, timesum = timesum + initialgap)


    //-------------------------VEGAS-2013-------------------------




    setTimeout(function() {
        getSlide('LasVegas');

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

        $("#ballshadow").hide(500);

        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + (gap * lengthOrlando))



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5lasvegas.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 50s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/sendflip.png)'); //*
        imagesend.css("animation", "rot 3s infinite linear");

        imagesend.animate({ width: 200, height: 200, left: 1000, top: 350 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 600, top: 380 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 680, top: 380 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "477" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 410, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);
        imagesend.css("animation", "");
        $("#ballshadow").show(500);


    }, timesum = timesum + introgap)



    setTimeout(function() {

        showImages();
        $("#send").css("animation", "");

    }, timesum = timesum + initialgap)







    //-------------------------CRETE-2014-------------------------





    setTimeout(function() {
        getSlide('Crete');

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

        $("#ballshadow").hide(500);

        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + (gap * lengthLasVegas))



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5crete.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 50s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*

        imagesend.css("animation", "rot 3s infinite linear");
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
        imagesend.css("animation", "");

        $("#ballshadow").show(500);

    }, timesum = timesum + introgap)




    setTimeout(function() {

        showImages();
        $("#send").css("animation", "");
    }, timesum = timesum + initialgap)






    //-------------------------LOS ANGELES-2015-------------------------




    setTimeout(function() {
        getSlide('LosAngeles');

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

        $("#ballshadow").hide(500);

        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + (gap * lengthCrete))



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5losangeles.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 50s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/sendflip.png)'); //*
        imagesend.css("animation", "rot 3s infinite linear");

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
        imagesend.css("animation", "");
        $("#ballshadow").show(500);


    }, timesum = timesum + introgap)






    setTimeout(function() {
        showImages();
        $("#send").css("animation", "");



    }, timesum = timesum + initialgap)



    //-------------------------TORONTO-2016-------------------------





    setTimeout(function() {
        getSlide('Toronto');

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

        $("#ballshadow").hide(500);

        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + (gap * lengthLosAngeles))



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5toronto.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 50s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*
        imagesend.css("animation", "rot 3s infinite linear");

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
        imagesend.css("animation", "");
        $("#ballshadow").show(500);


    }, timesum = timesum + introgap)





    setTimeout(function() {
        showImages();
        $("#send").css("animation", "");



    }, timesum = timesum + initialgap)

    //-------------------------VANCOUVER-2017-------------------------






    setTimeout(function() {
        getSlide('Vancouver');

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

        $("#ballshadow").hide(500);

        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + (gap * lengthToronto))



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5vancouver.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 50s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/sendflip.png)'); //*
        imagesend.css("animation", "rot 3s infinite linear");

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
        imagesend.css("animation", "");
        $("#ballshadow").show(500);


    }, timesum = timesum + introgap)




    setTimeout(function() {
        showImages();
        $("#send").css("animation", "");



    }, timesum = timesum + initialgap)



    //-------------------------VEGAS-2018-------------------------




    setTimeout(function() {
        getSlide('LasVegas');

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

        $("#ballshadow").hide(500);

        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + (gap * lengthVancouver))



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5lasvegas.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 50s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*
        imagesend.css("animation", "rot 3s infinite linear");

        imagesend.animate({ width: 200, height: 200, left: 800, top: 350 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 670, top: 390 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 670, top: 390 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "1095" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 1026, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);

        imagesend.css("animation", "");
        $("#ballshadow").show(500);

    }, timesum = timesum + introgap)



    setTimeout(function() {

        showImages();
        $("#send").css("animation", "");



    }, timesum = timesum + initialgap)








    //-------------------------ORLANDO-2019-------------------------




    setTimeout(function() {
        getSlide('Orlando');

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

        $("#ballshadow").hide(500);

        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + (gap * lengthLasVegas))



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5orlando.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 50s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*
        imagesend.css("animation", "rot 3s infinite linear");

        imagesend.animate({ width: 200, height: 200, left: 740, top: 400 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 740, top: 410 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 740, top: 410 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "1368" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 1310, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);
        imagesend.css("animation", "");
        $("#ballshadow").show(500);


    }, timesum = timesum + introgap)



    setTimeout(function() {

        showFutureImages();
        $("#send").css("animation", "");




    }, timesum = timesum + initialgap)






    //-------------------------COPENHAGEN-2020-------------------------






    setTimeout(function() {
        getSlide('Copenhagen');

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

        $("#ballshadow").hide(500);

        //map-globe bring to centre
        $(".stage").animate({ width: 1200, height: 700, borderRadius: '0%' }, 500);
        $("#globe").animate({ right: 20, top: 200 }, 500);
        $(".ball").animate({ borderRadius: '0%' }, 500);
        $(".ball").animate({ "animation": "" }, 500)

    }, timesum = timesum + (futuregap * lengthOrlando))



    setTimeout(function() {

        //change
        imagemap = $(".ball");
        imagemap.fadeOut('slow', function() {
            imagemap.css("background-image", "url('assets/5copenhagen.png')").fadeIn('fast'); //*
            imagemap.css("animation", "move-map-globe 50s infinite linear").fadeIn('slow');
        });


        imagesend = $("#send");
        imagesend.css('background-image', 'url(assets/send.png)'); //*
        imagesend.css("animation", "rot 3s infinite linear");

        imagesend.animate({ width: 200, height: 200, left: 800, top: 430 }, 0); //*
        imagesend.animate({ width: 50, height: 50, left: 1120, top: 280 }, 1000); //*
        imagesend.animate({ width: 0, height: 0, left: 1130, top: 280 }, 400); //*

        $("#dot1world").css("background-image", "url('assets/denmark.png')").animate({ left: "1497" }, introgap + 1000); //*

    }, timesum = timesum + introgap)

    setTimeout(function() {
        $("h6").animate({ fontSize: 40, left: 1395, top: 30 }, 1000); //*


        $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
        $("#globe").animate({ right: 0, top: 10 }, 1000);
        $(".ball").animate({ borderRadius: '50%' }, 1000);
        imagesend.css("animation", "");
        $("#ballshadow").show(500);


    }, timesum = timesum + introgap)




    setTimeout(function() {
        showFutureImages();
        $("#send").css("animation", "");



    }, timesum = timesum + initialgap)




    //Reload at end
    setTimeout(function() {
        //$(".copenhagen").css("color","#152f3d");
        $("#dot1world").css("box-shadow", "0px 45px 30px 30px rgba(255, 255, 255, 0.406)");

        window.location.reload(1);
    }, timesum = timesum + (futuregap * lengthCopenhagen) + 1000)
}