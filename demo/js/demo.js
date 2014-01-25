(function ($) {

  'use strict';

  $(function () {
        // Initialize greet.js
        $('[data-greet]').greet();

        // Bootstrap timepicker - http://jdewit.github.io/bootstrap-timepicker/
        $('#timepicker').timepicker({
          orientation: {
            x: 'auto',
            y: 'top'
          }
        })
        .on('changeTime.timepicker', function (e) {
          $('[data-greet]').greet({
            'time': e.time.value
          });
        });
      });

}(jQuery));