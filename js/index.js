        $(document).ready(function () {
            $('.parallax').parallax();
            $('.carousel').carousel();


            var a = 0;

            $('.button-collapse').sideNav({
                menuWidth: 250, // Default is 300
                edge: 'left', // Choose the horizontal origin
                closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
                draggable: true, // Choose whether you can drag to open on touch screens,
                onOpen: function (el) {
                    a = 1;
                },
                onClose: function (el) {
                    a = 0;
                },
            });




            // listen to events...
            $(document.body).hammer().on(" panright ", function (ev) {
                if ($(window).width() < 980) {
                    if (a == 0) {
                        if (ev.gesture.distance > 60)
                            $('.button-collapse').sideNav('show');
                    }
                }

            });


            // smooth scroll
            $('.scrollspy').scrollSpy({
                scrollOffset: 50
            });




            /***************** like and share **********************/

            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s);
                js.id = id;
                js.src = 'https://connect.facebook.net/fr_FR/sdk.js#xfbml=1&version=v2.11&appId=164496334039829';
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));


            /***************** Messenger **********************/

            window.fbAsyncInit = function () {
                FB.init({
                    appId: '2100661420166443',
                    xfbml: true,
                    version: 'v2.11'
                });
            };

            (function (d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement(s);
                js.id = id;
                js.src = "//connect.facebook.net/en_US/sdk.js";
                fjs.parentNode.insertBefore(js, fjs);
            }(document, 'script', 'facebook-jssdk'));
            
            
              $(document).ready(function() {
            var t = {
                delay: 125,
                overlay: $(".fb-overlay"),
                widget: $(".fb-widget"),
                button: $(".fb-button")
            };
            setTimeout(function() {
                $("div.fb-livechat").fadeIn()
            }, 8 * t.delay), $(".ctrlq").on("click", function(e) {
                e.preventDefault(), t.overlay.is(":visible") ? (t.overlay.fadeOut(t.delay), t.widget.stop().animate({
                    bottom: 0,
                    opacity: 0
                }, 2 * t.delay, function() {
                    $(this).hide("slow"), t.button.show()
                })) : t.button.fadeOut("medium", function() {
                    t.widget.stop().show().animate({
                        bottom: "30px",
                        opacity: 1
                    }, 2 * t.delay), t.overlay.fadeIn(t.delay)
                })
            })
        });
        });



        // toast message
        function toast() {
            Materialize.toast('cette fonctionnalité n\'est pas disponible maintenant.', 4000);
        }