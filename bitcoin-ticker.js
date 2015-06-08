/**
 * Bitcoin Ticker v1.0
 *
 * A simple jQuery plugin created by Nikhil Vimal (nik.techvoltz.com)
 *
 * Licence: MIT License http://opensource.org/licenses/mit-license.php
 */

(function($) {

    // Let's get the function started!
    $.fn.bc_value = function( options ) {

        // traverse all nodes
        this.each(function() {

            // Gotta have some options right?
            var settings = $.extend({
                currency: "USD",
            }, options );

            // express a single node as a jQuery object
            var $this = $(this);

            // Use jQuery's AJAX methods to revtrieve the data from the Coindesk API
            $.ajax({
                url: "http://api.coindesk.com/v1/bpi/currentprice.json",
                dataType: 'json',
                success: function(results){

                    // U.S. Dollar
                    if ( settings.currency == "USD") {
                        var status = results.bpi.USD.rate;
                        $($this).append('USD: $' + status);

                    }

                    // British Pound
                    if ( settings.currency == "GBP") {
                        var status = results.bpi.GBP.rate;
                        $($this).append('GBP: £' + status);

                    }

                    // Euro currency
                    if ( settings.currency == "EUR") {
                        var status = results.bpi.EUR.rate;
                        $($this).append('EUR: €' + status);

                    }



                }
            });


        });

        // allow jQuery chaining
        return this;


    };

})(jQuery);

/**
 * An example of how this plugin can be used!

jQuery(document).ready( function() {
    jQuery(".entry-title").bc_value({
        currency: "USD",
    });
});

 */

