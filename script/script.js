//FIXED-TIMINGS

$(window).bind("load", function() {

    var introgap = 2000; //  between intros-2000
    var initialgap = 500; //gap before first photo
    var timesum = 0;

    var imagepath = [];
    var imagedesc = [];
    var imagecount;
    var cityname = "";
    var cityeach = "";
    imagemap = $(".ball");

    //-------------------JSON------------------







    function getSlide(cityname) {
        //imagepath = [];
        if (cityname === "Beijing") {
            for (var i = 0; i < lengthBeijing; i++) {
                cityeach = obj.Beijing[i];
                imagepath[i] = cityeach.Image;
                imagedesc[i] = cityeach.Label;
            }
            imagecount = lengthBeijing;
        } else if (cityname === "SanDiego") {
            for (var i = 0; i < lengthSanDiego; i++) {
                cityeach = obj.SanDiego[i];
                imagepath[i] = cityeach.Image;
                imagedesc[i] = cityeach.Label;
            }
            imagecount = lengthSanDiego;
        } else if (cityname === "Orlando") {
            for (var i = 0; i < lengthOrlando; i++) {
                cityeach = obj.Orlando[i];
                imagepath[i] = cityeach.Image;
                imagedesc[i] = cityeach.Label;
            }
            imagecount = lengthOrlando;
        } else if (cityname === "LasVegas") {
            for (var i = 0; i < lengthLasVegas; i++) {
                cityeach = obj.LasVegas[i];
                imagepath[i] = cityeach.Image;
                imagedesc[i] = cityeach.Label;
            }
            imagecount = lengthLasVegas;
        } else if (cityname === "Crete") {
            for (var i = 0; i < lengthCrete; i++) {
                cityeach = obj.Crete[i];
                imagepath[i] = cityeach.Image;
                imagedesc[i] = cityeach.Label;
            }
            imagecount = lengthCrete;
        } else if (cityname === "LosAngeles") {
            for (var i = 0; i < lengthLosAngeles; i++) {
                cityeach = obj.LosAngeles[i];
                imagepath[i] = cityeach.Image;
                imagedesc[i] = cityeach.Label;
            }
            imagecount = lengthLosAngeles;
        } else if (cityname === "Toronto") {
            for (var i = 0; i < lengthToronto; i++) {
                cityeach = obj.Toronto[i];
                imagepath[i] = cityeach.Image;
                imagedesc[i] = cityeach.Label;
            }
            imagecount = lengthToronto;
        } else if (cityname === "Vancouver") {
            for (var i = 0; i < lengthVancouver; i++) {
                cityeach = obj.Vancouver[i];
                imagepath[i] = cityeach.Image;
                imagedesc[i] = cityeach.Label;
            }
            imagecount = lengthVancouver;
        } else if (cityname === "Copenhagen") {
            for (var i = 0; i < lengthCopenhagen; i++) {
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
            $("#send").animate({ width: 50, height: 50, left: 1680, top: 580 }, 1800);
            $("#send").animate({ width: 0, height: 0, left: 1670, top: 580 }, 500);
            $("#globe").animate({ right: 20, top: 200 }, 0);

            $(".ball").css("background-image", "url('assets/5beijing.png')");
            $(".ball").css("background-position", "calc(100% - 20px) calc(100% - 10px)");


            $("#dot1world").css("background-image", "url('assets/china.png')").animate({ left: "98" }, introgap + 1000);

        }, 0)
        setTimeout(function() {
            //spin large globe
            $("h6").animate({ fontSize: 40, top: citytop }, 1000);

            $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
            $("#globe").animate({ right: globeright, top: globetop }, 1000);
            $(".ball").animate({ borderRadius: '50%' }, 1000);

            $(".ball").css("animation", "move-map-globe 30s infinite linear")
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



        }, timesum = timesum + parseInt(mapstill))


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

        }, timesum = timesum + gapBeijing)



        setTimeout(function() {

            //change
            imagemap = $(".ball");
            imagemap.fadeOut('fast', function() {
                imagemap.css("background-image", "url('assets/5sandiego.png')"); //*
                imagemap.css("animation", "move-map-globe 30s infinite linear").fadeIn('slow');
            });


            imagesend = $("#send");
            imagesend.css('background-image', 'url(assets/sendflip.png)'); //*
            imagesend.css("animation", "rot 3s infinite linear");

            imagesend.animate({ width: 50, height: 50, left: 1850, top: 440 }, 0); //*
            imagesend.animate({ width: 200, height: 200, left: 1850, top: 440 }, 100); //*
            imagesend.animate({ width: 50, height: 50, left: 610, top: 450 }, 1000); //*
            imagesend.animate({ width: 0, height: 0, left: 630, top: 480 }, 400); //*

            $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "225" }, introgap + 1000); //*

        }, timesum = timesum + introgap)

        setTimeout(function() {
            $("h6").animate({ fontSize: 40, left: 155, top: citytop }, 1000); //*


            $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
            $("#globe").animate({ right: globeright, top: globetop }, 1000);
            $(".ball").animate({ borderRadius: '50%' }, 1000);
            $("#ballshadow").show(500);

            imagesend.css("animation", "");


        }, timesum = timesum + parseInt(mapstill))

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

        }, timesum = timesum + gapSanDiego)



        setTimeout(function() {

            //change
            imagemap = $(".ball");
            imagemap.fadeOut('fast', function() {
                imagemap.css("background-image", "url('assets/5orlando.png')"); //*
                imagemap.css("animation", "move-map-globe 30s infinite linear").fadeIn('slow');
            });


            imagesend = $("#send");
            imagesend.css('background-image', 'url(assets/send.png)'); //*

            imagesend.css("animation", "rot 3s infinite linear");
            imagesend.animate({ width: 50, height: 50, left: 850, top: 500 }, 0); //*
            imagesend.animate({ width: 200, height: 200, left: 850, top: 500 }, 100); //*
            imagesend.animate({ width: 50, height: 50, left: 750, top: 470 }, 1000); //*
            imagesend.animate({ width: 0, height: 0, left: 750, top: 470 }, 400); //*

            $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "345" }, introgap + 1000); //*

        }, timesum = timesum + introgap)

        setTimeout(function() {
            $("h6").animate({ fontSize: 40, left: 295, top: citytop }, 1000); //*


            $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
            $("#globe").animate({ right: globeright, top: globetop }, 1000);
            $(".ball").animate({ borderRadius: '50%' }, 1000);
            $("#ballshadow").show(500);

            imagesend.css("animation", "");

        }, timesum = timesum + parseInt(mapstill))

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

        }, timesum = timesum + gapOrlando)



        setTimeout(function() {

            //change
            imagemap = $(".ball");
            imagemap.fadeOut('fast', function() {
                imagemap.css("background-image", "url('assets/5lasvegas.png')"); //*
                imagemap.css("animation", "move-map-globe 30s infinite linear").fadeIn('slow');
            });


            imagesend = $("#send");
            imagesend.css('background-image', 'url(assets/sendflip.png)'); //*
            imagesend.css("animation", "rot 3s infinite linear");

            imagesend.animate({ width: 50, height: 50, left: 1050, top: 460 }, 0); //*
            imagesend.animate({ width: 200, height: 200, left: 1050, top: 460 }, 100); //*

            imagesend.animate({ width: 50, height: 50, left: 630, top: 500 }, 1000); //*
            imagesend.animate({ width: 0, height: 0, left: 660, top: 420 }, 400); //*

            $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "470" }, introgap + 1000); //*

        }, timesum = timesum + introgap)

        setTimeout(function() {
            $("h6").animate({ fontSize: 40, left: 400, top: citytop }, 1000); //*


            $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
            $("#globe").animate({ right: globeright, top: globetop }, 1000);
            $(".ball").animate({ borderRadius: '50%' }, 1000);
            imagesend.css("animation", "");
            $("#ballshadow").show(500);


        }, timesum = timesum + parseInt(mapstill))



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

        }, timesum = timesum + gapLasVegas)



        setTimeout(function() {

            //change
            imagemap = $(".ball");
            imagemap.fadeOut('fast', function() {
                imagemap.css("background-image", "url('assets/5crete.png')"); //*
                imagemap.css("animation", "move-map-globe 30s infinite linear").fadeIn('slow');
            });


            imagesend = $("#send");
            imagesend.css('background-image', 'url(assets/send.png)'); //*

            imagesend.css("animation", "rot 3s infinite linear");
            imagesend.animate({ width: 50, height: 50, left: 890, top: 430 }, 0); //*
            imagesend.animate({ width: 200, height: 200, left: 890, top: 430 }, 100);
            imagesend.animate({ width: 50, height: 50, left: 1320, top: 440 }, 1000); //*
            imagesend.animate({ width: 0, height: 0, left: 1190, top: 440 }, 400); //*

            $("#dot1world").css("background-image", "url('assets/greece.png')").animate({ left: "594" }, introgap + 1000); //*

        }, timesum = timesum + introgap)

        setTimeout(function() {
            $("h6").animate({ fontSize: 40, left: 560, top: citytop }, 1000); //*


            $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
            $("#globe").animate({ right: globeright, top: globetop }, 1000);
            $(".ball").animate({ borderRadius: '50%' }, 1000);
            imagesend.css("animation", "");

            $("#ballshadow").show(500);

        }, timesum = timesum + parseInt(mapstill))




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

        }, timesum = timesum + gapCrete)



        setTimeout(function() {

            //change
            imagemap = $(".ball");
            imagemap.fadeOut('fast', function() {
                imagemap.css("background-image", "url('assets/5losangeles.png')"); //*
                imagemap.css("animation", "move-map-globe 30s infinite linear").fadeIn('slow');
            });


            imagesend = $("#send");
            imagesend.css('background-image', 'url(assets/sendflip.png)'); //*
            imagesend.css("animation", "rot 3s infinite linear");

            imagesend.animate({ width: 50, height: 50, left: 1450, top: 420 }, 0);
            imagesend.animate({ width: 200, height: 200, left: 1370, top: 420 }, 100); //*
            imagesend.animate({ width: 50, height: 50, left: 500, top: 460 }, 1000); //*
            imagesend.animate({ width: 0, height: 0, left: 620, top: 420 }, 400); //*

            $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "714" }, introgap + 1000); //*

        }, timesum = timesum + introgap)

        setTimeout(function() {
            $("h6").animate({ fontSize: 40, left: 635, top: citytop }, 1000); //*


            $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
            $("#globe").animate({ right: globeright, top: globetop }, 1000);
            $(".ball").animate({ borderRadius: '50%' }, 1000);
            imagesend.css("animation", "");
            $("#ballshadow").show(500);


        }, timesum = timesum + parseInt(mapstill))






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

        }, timesum = timesum + gapLosAngeles)



        setTimeout(function() {

            //change
            imagemap = $(".ball");
            imagemap.fadeOut('fast', function() {
                imagemap.css("background-image", "url('assets/5toronto.png')"); //*
                imagemap.css("animation", "move-map-globe 30s infinite linear").fadeIn('slow');
            });


            imagesend = $("#send");
            imagesend.css('background-image', 'url(assets/send.png)'); //*
            imagesend.css("animation", "rot 3s infinite linear");

            imagesend.animate({ width: 50, height: 50, left: 780, top: 400 }, 0); //*
            imagesend.animate({ width: 200, height: 200, left: 780, top: 400 }, 100);
            imagesend.animate({ width: 50, height: 50, left: 860, top: 380 }, 1000); //*
            imagesend.animate({ width: 0, height: 0, left: 780, top: 380 }, 400); //*

            $("#dot1world").css("background-image", "url('assets/canada.png')").animate({ left: "837" }, introgap + 1000); //*

        }, timesum = timesum + introgap)

        setTimeout(function() {
            $("h6").animate({ fontSize: 40, left: 790, top: citytop }, 1000); //*


            $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
            $("#globe").animate({ right: globeright, top: globetop }, 1000);
            $(".ball").animate({ borderRadius: '50%' }, 1000);
            imagesend.css("animation", "");
            $("#ballshadow").show(500);


        }, timesum = timesum + parseInt(mapstill))





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

        }, timesum = timesum + gapToronto)



        setTimeout(function() {

            //change
            imagemap = $(".ball");
            imagemap.fadeOut('fast', function() {
                imagemap.css("background-image", "url('assets/5vancouver.png')"); //*
                imagemap.css("animation", "move-map-globe 30s infinite linear").fadeIn('slow');
            });


            imagesend = $("#send");
            imagesend.css('background-image', 'url(assets/sendflip.png)'); //*
            imagesend.css("animation", "rot 3s infinite linear");

            imagesend.animate({ width: 50, height: 50, left: 1100, top: 380 }, 0); //*
            imagesend.animate({ width: 200, height: 200, left: 1100, top: 380 }, 100);
            imagesend.animate({ width: 50, height: 50, left: 600, top: 400 }, 1000); //*
            imagesend.animate({ width: 0, height: 0, left: 650, top: 370 }, 400); //*

            $("#dot1world").css("background-image", "url('assets/canada.png')").animate({ left: "957" }, introgap + 1000); //*

        }, timesum = timesum + introgap)

        setTimeout(function() {
            $("h6").animate({ fontSize: 40, left: 890, top: citytop }, 1000); //*


            $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
            $("#globe").animate({ right: globeright, top: globetop }, 1000);
            $(".ball").animate({ borderRadius: '50%' }, 1000);
            imagesend.css("animation", "");
            $("#ballshadow").show(500);


        }, timesum = timesum + parseInt(mapstill))




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

        }, timesum = timesum + gapVancouver)



        setTimeout(function() {

            //change
            imagemap = $(".ball");
            imagemap.fadeOut('fast', function() {
                imagemap.css("background-image", "url('assets/5lasvegas.png')"); //*
                imagemap.css("animation", "move-map-globe 30s infinite linear").fadeIn('slow');
            });


            imagesend = $("#send");
            imagesend.css('background-image', 'url(assets/send.png)'); //*
            imagesend.css("animation", "rot 3s infinite linear");

            imagesend.animate({ width: 50, height: 50, left: 820, top: 350 }, 0); //*
            imagesend.animate({ width: 200, height: 200, left: 820, top: 350 }, 100);
            imagesend.animate({ width: 50, height: 50, left: 700, top: 400 }, 1000); //*
            imagesend.animate({ width: 0, height: 0, left: 640, top: 400 }, 400); //*

            $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "1083" }, introgap + 1000); //*

        }, timesum = timesum + introgap)

        setTimeout(function() {
            $("h6").animate({ fontSize: 40, left: 1020, top: citytop }, 1000); //*


            $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
            $("#globe").animate({ right: globeright, top: globetop }, 1000);
            $(".ball").animate({ borderRadius: '50%' }, 1000);

            imagesend.css("animation", "");
            $("#ballshadow").show(500);

        }, timesum = timesum + parseInt(mapstill))



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

        }, timesum = timesum + gapLasVegas)



        setTimeout(function() {

            //change
            imagemap = $(".ball");
            imagemap.fadeOut('fast', function() {
                imagemap.css("background-image", "url('assets/5orlando.png')"); //*
                imagemap.css("animation", "move-map-globe 30s infinite linear").fadeIn('slow');
            });


            imagesend = $("#send");
            imagesend.css('background-image', 'url(assets/send.png)'); //*
            imagesend.css("animation", "rot 3s infinite linear");

            imagesend.animate({ width: 50, height: 50, left: 830, top: 400 }, 0); //*
            imagesend.animate({ width: 200, height: 200, left: 830, top: 400 }, 100); //*

            imagesend.animate({ width: 50, height: 50, left: 730, top: 470 }, 1000); //*
            imagesend.animate({ width: 0, height: 0, left: 730, top: 470 }, 400); //*

            $("#dot1world").css("background-image", "url('assets/usa.png')").animate({ left: "1307" }, introgap + 1000); //*

        }, timesum = timesum + introgap)

        setTimeout(function() {
            $("h6").animate({ fontSize: 40, left: 1255, top: citytop }, 1000); //*


            $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
            $("#globe").animate({ right: globeright, top: globetop }, 1000);
            $(".ball").animate({ borderRadius: '50%' }, 1000);
            imagesend.css("animation", "");
            $("#ballshadow").show(500);


        }, timesum = timesum + parseInt(mapstill))



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
            imagemap.fadeOut('fast', function() {
                imagemap.css("background-image", "url('assets/5copenhagen.png')"); //*
                imagemap.css("animation", "move-map-globe 30s infinite linear").fadeIn('slow');
            });


            imagesend = $("#send");
            imagesend.css('background-image', 'url(assets/send.png)'); //*
            imagesend.css("animation", "rot 3s infinite linear");

            imagesend.animate({ width: 50, height: 50, left: 900, top: 430 }, 0); //*
            imagesend.animate({ width: 200, height: 200, left: 900, top: 430 }, 100); //*

            imagesend.animate({ width: 50, height: 50, left: 1120, top: 320 }, 1000); //*
            imagesend.animate({ width: 0, height: 0, left: 1130, top: 320 }, 400); //*

            $("#dot1world").css("background-image", "url('assets/denmark.png')").animate({ left: "1432" }, introgap + 1000); //*

        }, timesum = timesum + introgap)

        setTimeout(function() {
            $("h6").animate({ fontSize: 40, left: 1349, top: citytop }, 1500); //*


            $(".stage").animate({ width: 260, height: 250, borderRadius: '50%' }, 1000);
            $("#globe").animate({ right: globeright, top: globetop }, 1000);
            $(".ball").animate({ borderRadius: '50%' }, 1000);
            imagesend.css("animation", "");
            $("#ballshadow").show(500);


        }, timesum = timesum + parseInt(mapstill))




        setTimeout(function() {
            showFutureImages();
            $("#send").css("animation", "");



        }, timesum = timesum + initialgap)




        //Reload at end
        setTimeout(function() {
            //$(".copenhagen").css("color","#152f3d");
            //$("#dot1world").css("box-shadow", "0px 45px 30px 30px rgba(255, 255, 255, 0.406)");

            window.location.reload(1);
        }, timesum = timesum + (futuregap * lengthCopenhagen))
    }


});