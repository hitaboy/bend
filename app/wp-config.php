<?php
/**
 * The base configurations of the WordPress.
 *
 * This file is a custom version of the wp-config file to help
 * with setting it up for multiple environments. Inspired by
 * Leevi Grahams ExpressionEngine Config Bootstrap
 * (http://ee-garage.com/nsm-config-bootstrap)
 *
 * @package WordPress
 * @author Abban Dunne @abbandunne
 * @link http://abandon.ie/wordpress-configuration-for-multiple-environments
 */


// Define Environments - may be a string or array of options for an environment
$environments = array(
	'local'       => 'local',
	'dev' => 'herraizsoto',
);

// Get Server name
$server_name = $_SERVER['HTTP_HOST'];

foreach($environments AS $key => $env){

	if(is_array($env)){

		foreach ($env as $option){

			if(stristr($server_name, $option)){

				define('ENVIRONMENT', $key);

				break 2;
			}

		}

	} else {

		if(stristr($server_name, $env)){

			define('ENVIRONMENT', $key);

			break;

		}

	}

}

// If no environment is set default to production
if(!defined('ENVIRONMENT')) define('ENVIRONMENT', 'production');

// Define different DB connection details depending on environment
switch(ENVIRONMENT){

	case 'local':

		define( 'DB_NAME', 'project' );
		define( 'DB_USER', 'project' );
		define( 'DB_PASSWORD', 'project' );
		define( 'DB_HOST', 'project-mysql' );
		define( 'DB_CHARSET', 'utf8' );
		define( 'DB_COLLATE', '' );
		define( 'WP_HOME','https://localhost' );
		define( 'WP_SITEURL','https://localhost' );
		define( 'WP_DEBUG', false );
		define( 'SITE_PROTOCOL','https://' );
		define( 'SITE_URL',$_SERVER['HTTP_HOST'] );
	  define( 'SITE_RAW_URL',$_SERVER['HTTP_HOST'] );
		define( 'SITE_TITLE','Website Project' );
	  define( 'SITE_NAME','Website Project' );
		define( 'MULTILINGUAL', true );
		define( 'ANALYTICS_CODE','' );
		define( 'UNDER_CONSTRUCTION','' );
		define( 'PAGE_ENCODING','UTF-8' );

		break;

	case 'dev':

		define( 'DB_NAME', 'hsweb_beta' );
		define( 'DB_USER', 'hsweb_beta' );
		define( 'DB_PASSWORD', 'lmiECx5sldeUZDWF' );
		define( 'DB_HOST', 'hsprod.cukj3fzoatyc.eu-central-1.rds.amazonaws.com' );
		define( 'DB_CHARSET', 'utf8' );
		define( 'DB_COLLATE', '' );
		define( 'WP_HOME','https://web.herraizsoto.com/' );
		define( 'WP_SITEURL','https://web.herraizsoto.com/' );
		define( 'WP_DEBUG', false );
		define( 'SITE_PROTOCOL','https://' );
		define( 'SITE_URL',$_SERVER['HTTP_HOST'] );
		define( 'SITE_RAW_URL',$_SERVER['HTTP_HOST'] );
		define( 'SITE_TITLE','Website Project' );
		define( 'SITE_NAME','Website Project' );
		define( 'MULTILINGUAL', true );
		define( 'ANALYTICS_CODE','' );
		define( 'UNDER_CONSTRUCTION','' );
		define( 'PAGE_ENCODING','UTF-8' );

		break;

}

// If batabase isn't defined then it will be defined here.
// Put the details for your production environment in here.
if(!defined('DB_NAME'))
	define('DB_NAME', 'project');

if(!defined('DB_USER'))
	define('DB_USER', 'project');

if(!defined('DB_PASSWORD'))
	define('DB_PASSWORD', 'project');

if(!defined('DB_HOST'))
	define('DB_HOST', 'localhost');

if(!defined('DB_CHARSET'))
	define('DB_CHARSET', 'utf8');

if(!defined('DB_COLLATE'))
	define('DB_COLLATE', '');

if(!defined('WP_HOME'))
	define('WP_HOME','http://localhost');

if(!defined('WP_SITEURL'))
	define('WP_SITEURL','http://localhost');

if(!defined('WP_DEBUG'))
	define( 'WP_DEBUG', true );

if(!defined('SITE_PROTOCOL'))
	define( 'SITE_PROTOCOL','http://' );

if(!defined('SITE_URL'))
	define( 'SITE_URL',$_SERVER['HTTP_HOST'] );

if(!defined('SITE_RAW_URL'))
	define( 'SITE_RAW_URL',$_SERVER['HTTP_HOST'] );

if(!defined('SITE_TITLE'))
	define( 'SITE_TITLE','Website Project' );

if(!defined('SITE_NAME'))
	define( 'SITE_NAME','Website Project' );

if(!defined('MULTILINGUAL'))
	define( 'MULTILINGUAL', false );

if(!defined('ANALYTICS_CODE'))
	define( 'ANALYTICS_CODE','' );

if(!defined('UNDER_CONSTRUCTION'))
	define( 'UNDER_CONSTRUCTION','' );

if(!defined('PAGE_ENCODING'))
	define( 'PAGE_ENCODING','UTF-8' );


/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */

if(!defined('AUTH_KEY'))
	define('AUTH_KEY', '7Dc/D18QkFwRvlHoqmBgKP4KDgPG6myKq5I+QKUs0RvXSYnEsuq71MhQqcIqjb0nI2+hG1qiRmeFSQ28r/U2Yw==');

if(!defined('SECURE_AUTH_KEY'))
	define('SECURE_AUTH_KEY', '6VtJ2GLI1Fe3dXNWYOdCqFFVtwffRRdyX3WFwozUuGc6zkM/uPtTdDa8C0VUI8UPH47+JCdKOO8UrKiJPaK6ZA==');

if(!defined('LOGGED_IN_KEY'))
	define('LOGGED_IN_KEY', '0ujKLwLhLEJFhjDJK3RHsCJtYUpuddjq9ZsfMicl78cDOsaIvNEoodYGse0yr3qUdvHjp62hXzlTiouQTxJuEA==');

if(!defined('NONCE_KEY'))
	define('NONCE_KEY', 'bhePYIYhbEu+Xi7xYYVaWvtAYvx4Wi30xcmYsR/0ibgkvc7SATYlxYQBYbTOcZE8YmHZol5kOeOo7EM2m2+x6Q==');

if(!defined('AUTH_SALT'))
	define('AUTH_SALT', 'FtQP6cUbhxDIkEGxRKsCsz7yJ/ohtfMcS6sRmXu6UTtnLNspfxoEqIgaJMxDqz0RfDT6XEgcLb7E5/c809j+Lg==');

if(!defined('SECURE_AUTH_SALT'))
	define('SECURE_AUTH_SALT', 'Ay6V4M6k6QdTTGd+zp+qlzf+TOTQ2uAcqBU8NKtHZwAvE49UbbluulY8F0Skf8mf+MpGlA3iuxTynSWfEGSE+A==');

if(!defined('LOGGED_IN_SALT'))
	define('LOGGED_IN_SALT', 'Vref2QiSscQtbxpYmoweEDnjttjxG1qQSEgK2SOdMWaa0+NyOq/sBkQQsbLuLcjZmNTDDOcCJWvd0w/+7SXN8A==');

if(!defined('NONCE_SALT'))
	define('NONCE_SALT', 'NlMmjp0n60DV/DGeBXbfGNBm92tN0kkl6P1ybVdch9dIC7di59Py2stde9zBPgPHi1GG7pEMEviJnSLHpVM/Ww==');

define('WP_REDIS_CLIENT','pecl');
define('WP_REDIS_HOST','project-redis');
define('WP_CACHE_KEY_SALT','wp-project-redis');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
if(!isset($table_prefix)) $table_prefix  = 'wp_';

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
if(!defined('WPLANG'))
	define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
if(!defined('WP_DEBUG'))
	define('WP_DEBUG', false);

/* Inserted by Local by Flywheel. See: http://codex.wordpress.org/Administration_Over_SSL#Using_a_Reverse_Proxy */
if (isset($_SERVER['HTTP_X_FORWARDED_PROTO']) && $_SERVER['HTTP_X_FORWARDED_PROTO'] === 'https') {
	$_SERVER['HTTPS'] = 'on';
}

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
