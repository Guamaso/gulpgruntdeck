'use strict';
Handlebars.registerHelper('step', function (data) {
    var ret = '';
    for (var key in data) {
        ret = ret + ' data-' + key + '="' + data[key] + '"';
    }
    return ret;
});

var appendSlides = function (data, cb) {

    var steps = data;
    var htmltemplate = $('#step-template').html();
    var htmltempl = Handlebars.compile(htmltemplate);
    var total_steps = steps.length;
    console.log("Steps to load: " + total_steps );
    steps.forEach(function (step, index) {
        var templ = htmltempl;

        $.ajax({
            url: 'steps/' + step.uri,
            success: function (data) {
                $('.steps').append(templ({file: data, data: step.data,
                                          class: step.class, id: step.id}));

                if (total_steps <= index + 1)
                {
                  console.log("Done loading steps.");
                  if (cb) cb();
                }
            },
            async: false
        });
    });
};

