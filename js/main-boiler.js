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
        'libs/bootstrap/js/bootstrap': {
            deps: ['libs/jquery']
        },
        'script-boiler': {
            deps: ['libs/jquery', 'libs/backbone', 'libs/d3', 'libs/bootstrap/js/bootstrap']
        }
    }
});

define(
    ['libs/underscore', 'libs/backbone', 'libs/d3',
        'libs/bootstrap/js/bootstrap', 'script-boiler'],
    function(underscoreLocal, backboneLocal, d3Local,
        bootstrapLocal, scriptBoilerLocal) {
    }
);
