/*
 * greet.js
 *
 *
 * Copyright (c) 2014 Hello Innovation
 * Licensed under the MIT license.
 */

(function ($) {

  "use strict";

  // Default options.
  var defaultOptions = {
    messages: {
      "12am": [ "It's bed time, {name}" ],
      "5am": [ "Good morning, {name}" ],
      "12pm": [ "Good afternoon, {name}" ],
      "6pm": [ "Good evening, {name}" ],
      "9pm": [ "Good night, {name}", "Have a great night, {name}" ]
    }
  };

  // Generate the messaged based on proper time
  var greet = function(name, options) {
    var messageList,
        now = new Date(),
        re = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):?([0-5][0-9])?(pm|am)?$/i;

    // Find the proper time
    $.each(options.messages, function(time, messages) {
        var bits = re.exec(time),
            h = parseInt(bits[1], 10) || 0,
            m = parseInt(bits[2]) || 0,
            pm = bits[3] === "pm",
            am = bits[3] === "am",
            d = new Date();

      // Generate the datetime of this message
      d.setHours(am && h === 12 ? 0 : (pm && h < 12 ? h + 12 : h));
      d.setMinutes(m);
      d.setSeconds(0);

      if (now >= d) {
        messageList = messages;
      }

    });

    // Get a random message
    var message = messageList[Math.floor(Math.random() * messageList.length)];

    // Replace the tag key with the name
    message = message.replace(/\{name\}/g, name);

    // Returns the parsed message as text
    return message;
  };

  // Collection method.
  $.fn.greet = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, defaultOptions, options);

    return this.each(function () {

      var name = $(this).text(),
          message = greet(name, options);

      $(this).html(message);

    });
  };

}(jQuery));
