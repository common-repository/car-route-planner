<?php
/**
 * Plugin Name:       Car Route Planner
 * Description:       Route planner for car travelers. Calculator of various values for route, such as length, driving time, fuel amount and cost, customized cost.
 * Requires at least: 4.2
 * Requires PHP:      5.3
 * Version:           0.1.0
 * Author: DriveBestWay.com
 * Author URI: https://www.drivebestway.com/
 * License: GPL2
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: car-route-planner
 */

function CarRoutePlanner_block_init() {
    if (function_exists('register_block_type')) {
        register_block_type(__DIR__ . '/build');
        wp_set_script_translations( 'car-route-planner-block-editor-script', 'car-route-planner', plugin_dir_path( __DIR__ ) . 'languages' );
    }
}
add_action( 'init', 'CarRoutePlanner_block_init' );
