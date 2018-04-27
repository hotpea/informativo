$(document).ready(function() {
    $('#fullpage').fullpage({
        ////Navigation
        //lockAnchors: true,
        anchors:[
            'section_one',
            'section_two',
            'section_three',
            'section_four'
        ],
        //menu: '#menu',
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['one', 'two', 'three', 'four'],
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        //
        ////Scrolling
        //css3: true,
        //scrollingSpeed: 700,
        //autoScrolling: true,
        //fitToSection: true,
        //fitToSectionDelay: 1000,
        scrollBar: true,
        //easing: 'easeInOutCubic',
        //easingcss3: 'ease',
        //loopBottom: false,
        //loopTop: false,
        //loopHorizontal: true,
        //continuousVertical: false,
        //continuousHorizontal: false,
        //scrollHorizontally: false,
        //interlockedSlides: false,
        //dragAndMove: false,
        //offsetSections: false,
        //resetSliders: false,
        //fadingEffect: false,
        //normalScrollElements: '#element1, .element2',
        //scrollOverflow: false,
        //scrollOverflowReset: false,
        //scrollOverflowOptions: null,
        //touchSensitivity: 15,
        //normalScrollElementTouchThreshold: 5,
        //bigSectionsDestination: null,
        ////Accessibility
        //keyboardScrolling: true,
        //animateAnchor: true,
        //recordHistory: true,
        ////Design
        //controlArrows: true,
        //verticalCentered: true,
        //sectionsColor : ['#ccc', '#fff'],
        //paddingTop: '3em',
        //paddingBottom: '10px',
        //fixedElements: '#header, .footer',
        //responsiveWidth: 0,
        //responsiveHeight: 0,
        //responsiveSlides: false,
        //parallax: true,
        //parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},
        ////Custom selectors
        //sectionSelector: '.section',
        //slideSelector: '.slide',
        //lazyLoading: true,
        ////events
        //onLeave: function(index, nextIndex, direction){},
        //afterLoad: function(anchorLink, index){},
        //afterRender: function(){},
        //afterResize: function(){},
        //afterResponsive: function(isResponsive){},
        //afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        //onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
    });

    $('body').css('background-color', $('.section_one').attr('color'));

    $(window).scroll(function() {
        for (var i = 0; $('.section').length > i; ++i) {
            var div = $($('.section')[i]);

            var top_of_element = div.offset().top;
            var bottom_of_element = div.offset().top + div.outerHeight();

            var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
            var top_of_screen = $(window).scrollTop();

            if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){
                $('body').css('background-color', div.attr('color'));
            }
        }
    });
});