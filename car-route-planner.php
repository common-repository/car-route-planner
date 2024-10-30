<?php
/*
Plugin Name: Car Route Planner 
Description: Route planner for car travelers. Calculator of various values for route, such as length, driving time, fuel amount and cost, customized cost.
Version: 1.7
Author: DriveBestWay.com
Author URI: https://www.drivebestway.com/
License: GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
Text Domain: car-route-planner
Domain Path: /languages
*/

// Make sure we don't expose any info if called directly                                                                                                                    
   if (! function_exists('add_action')) {
       echo "I'm just a plugin, not much I can do when called directly.";
       exit;
   }

   define('CAR_ROUTE_PLANNER_VERSION', '1.7');
   define('CAR_ROUTE_PLANNER_MINIMUM_WP_VERSION', '4.2');
   define('CRP_PLUGIN_DIR', plugin_dir_path(__FILE__));

   require_once(CRP_PLUGIN_DIR . 'class.car-route-planner.php');
   add_action('plugins_loaded', array('CarRoutePlanner', 'init'));
   register_deactivation_hook(__FILE__, array('CarRoutePlanner', 'pluginDeactivation'));

   if (is_admin()) {
      require_once(CRP_PLUGIN_DIR . 'class.car-route-planner-admin.php');
      add_action('admin_init', array('CarRoutePlannerAdmin', 'init'));
      add_action('admin_menu', array('CarRoutePlannerAdmin', 'adminMenu'));
   }

   add_action('upgrader_process_complete', 'car_route_planner_plugin_was_updated');

   function car_route_planner_plugin_was_updated() {
       // force new config to be retrieved from server
       delete_transient(CarRoutePlanner::TRANSIENT_CONFIG_SLUG);
   }

   require_once(CRP_PLUGIN_DIR . 'block/car-route-planner-block.php');



