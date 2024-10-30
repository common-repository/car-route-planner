=== Car Route Planner Plugin ===
Contributors: iGuk
Tags: route, distance, calculator, direction, travel
Requires at least: 4.2
Tested up to: 6.4.2
Requires PHP: 5.3
Stable tag: trunk
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Route planner for car travelers. Calculator of various values for route, such as length, driving time, fuel amount and cost, customized cost.

== Description ==

The route planner can calculate different values for car routes around the world, such as route length, driving time, fuel amount and cost.

Main use cases:

1. Routing for motorists (recreation or business trips on own or rented car)
1. Calculation of estimated cost of your service depending on route length (transport logistics, shipping, moving companies, truck freight, delivery, intercity taxi, transfer, and etc.)
1. Routing from an arbitrary point to your tourist site (recreation center, camping, hotel) with a simple web form.

Other use cases are also possible. The plugin has many settings and can be adapted to other scenarios.

= Features =

* shortcodes
* customizable design
* automatic adjustment of font size and font family
* mobile friendly
* worldwide routing (can be optionally limited by countries)
* switched on/off blocks in form and in results
* price calculation by your own formula
* async load via HTTPS, HTTP/2 support
* safe degradation if the routing server is not available
* autocomplete for input fields
* start/finish location can be pointed on the map
* geocoder with mistyping correction
* editing the route by drag and drop over map
* route scheme (cities with road types and driving time between them)
* separated speed limits for highway and other roads
* 11 languages: English, French, German, Spanish, Portuguese, Czech, Polish, Italian, Malay, Dutch, Turkish
* 3 measure systems: metric, American, British imperial
* multiple currencies: ARS, AUD, BRL, CAD, CHF, CLP, CNY, COP, CZK, DOP, EUR, GBP, INR, IRR, MXN, MYR, NGN, PEN, PHP, PLN, RUB, SEK, TRY, USD, VEF, ZAR

= Modes =

The plugin has two modes. These modes are switched on the plugin settings page.

By default, the plugin works in minimal mode:

* the results of route calculation are displayed on the plugin developers website.
* there are no additional settings.

Advanced mode:

* the results of route calculation are displayed inside iframe on your website.
* after iframe, the hyperlink to the plugin developer's site is displayed.
* additional settings are available.

https://www.youtube.com/watch?v=m5_Wi4R3obo

= How it Works =

Technically speaking, the plugin is a bridge to web service [www.drivebestway.com](https://www.drivebestway.com/), which uses [OSM](https://www.openstreetmap.org/) data for routing.

Unlike other similar plugins, Google Maps is not used here. The routing is performed with open source routers, such as [OSRM](http://project-osrm.org/) and [Graphhopper](https://www.graphhopper.com/).

See a [full list of credits](https://www.drivebestway.com/credits).

== Installation ==
1. Upload plugin to the "/wp-content/plugins/" directory.
2. Activate the plugin through the "Plugins" menu in WordPress.
3. Insert "car route planner" block in Gutenberg editor or use shortcode

https://www.youtube.com/watch?v=m5_Wi4R3obo

== Documentation ==

The plugin is developed on the basis of HTML-widget, which options are documented on the [developers’ site](https://www.drivebestway.com/widget/v1/doc).

== Frequently Asked Questions ==

= How to create own price formula? =

When composing a formula, you can use the following variables:

* Length - Route length
* DrivingTime - Driving time in minutes
* FuelConsumption - Fuel consumption
* FuelAmount - Amount of fuel required for the entire route
* FuelPrice - Unit price of fuel
* FuelCost - Fuel cost for the entire route

You can also use the mathematical functions: min, max, round.

Example of formula: max(150, FuelCost * 4 + 100)

= How fuel cost is calculated? =

The interface uses abstract term "fuel", so that you or your user can substitute the price of gasoline, diesel or LPG based on your choice.

The gasoline price is used by default.

= How driving time is calculated? =

The speed allowed by traffic rules (according to OSM data) on each specific route point is used for the calculation.

You can setup extra speed limits in the shortcode configurator.

= Can I display multiple shortcodes on one page? =

You can display as many shortcodes as you like on one page.

== Screenshots ==

1. Gutenberg block
2. Shortcode generator
3. The most detailed representation of route planner, intended for tourists
4. Short representation, intended for cost calculation
5. Another use case: the form "how to get to us"

== Changelog ==

= 1.7 =
* Block for Gutenberg page editor.
* Options "Font family" and "Font size" are added.

= 1.6 =
* Options "Hide From field" and "Hide To field" are added.

= 1.5 =
* Italian, Czech, Polish and Malay translations are added.
* Dutch and Turkish translations are added.

= 1.4 =
* Bugfix: minor country-specific settings were not applied properly.

= 1.3 =
* Limiting results by countries

= 1.2 =
* Min/Max functions are supported in formula.
* Bugfix: some shorttag's attributes were erroneously ignored.

= 1.1 =
* French and German translations are added.
* Minor fix in Portuguese translation.

= 1.0 =
* Initial release.
