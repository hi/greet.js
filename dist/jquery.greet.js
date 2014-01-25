/*! greet - v1.0.0 - 2014-01-25
* https://github.com/hi/greet
* Copyright (c) 2014 Hello Innovation; Licensed MIT */
(function ($) {

  "use strict";

  /**
   * Default options
   * @type {Object}
   */
  var defaultOptions = {
    time: "now",
    messages: {
      "12 AM": [
        "It's bed time, {name}"
      ],
      "05 AM": [
        "Good morning, {name}"
      ],
      "12 PM": [
        "Good afternoon, {name}"
      ],
      "06 PM": [
        "Good evening, {name}"
      ],
      "09 PM": [
        "Good night, {name}",
        "Have a great night, {name}"
      ]
    }
  };

  /**
   * Generate the messaged based on proper time
   * @param  {String} name     The person name to greet
   * @param  {Object} options
   * @return {String}          The greeting message
   */
  var greet = function(name, options) {

    var messageList,
        basetime = options.time !== "now" ? parseTimeString(options.time) : new Date();

    // Find the proper time
    $.each(options.messages, function(time, messages) {

      if (basetime >= parseTimeString(time)) {
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

  /**
   * Parse the time string format to datetime
   * @param  {String} time  The time Ex: 2:30PM, 15AM, 9:35
   * @return {Datetime}     The parsed time with the date of today
   */
  var parseTimeString = function(time) {

    var re = /^([0-9]|0[0-9]|1[0-9]|2[0-3]):?([0-5][0-9])? ?(pm|am)?$/i,
        bits = re.exec(time),
        h = parseInt(bits[1], 10) || 0,
        m = parseInt(bits[2]) || 0,
        pm = bits[3].toLowerCase() === "pm",
        am = bits[3].toLowerCase() === "am",
        d = new Date();

    // Generate the datetime of this message
    d.setHours(am && h === 12 ? 0 : (pm && h < 12 ? h + 12 : h));
    d.setMinutes(m);
    d.setSeconds(0);

    return d;
  };

  /**
   * greet jQuery plugin - public method
   * @param  {Object} options   Passed options extending defaultOptions
   * @return {Selector}         The array of elements
   */
  $.fn.greet = function (options) {

    // Override default options with passed-in options.
    options = $.extend({}, defaultOptions, options);

    return this.each(function () {

      // preventing against multiple instantiations
      var name = $(this).data('name') || $(this).text(),
          message = greet(name, options);

      $(this).data('name', name).html(message);

    });
  };

}(jQuery));
