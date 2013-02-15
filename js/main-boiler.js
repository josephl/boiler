// require
//

requirejs.config({
    shim: {
        'libs/underscore': {
            exports: '_'
        },
        'libs/backbone': {
            deps: ['libs/underscore', 'libs/jquery'],
            exports: 'Backbone'
        },
        'libs/d3': {
            deps: ['libs/jquery'],
            exports: 'd3'
        },
        'bootstrap/js/bootstrap.js': {
            deps: ['libs/jquery']
        },
        'script-boiler': {
            deps: ['libs/jquery', 'libs/backbone', 'libs/d3', 'bootstrap/js/bootstrap.js']
        }
    }
});

define(
    ['libs/underscore', 'libs/backbone', 'libs/d3', 'bootstrap/js/bootstrap.js', 'script-boiler'],
    function(jQueryLocal, underscoreLocal,
        backboneLocal, d3Local) {
    }
);
