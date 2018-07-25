# ACF image crop and renditions field Add-on

ACF Image Crop with renditions field Add-on for picture srcset

## Getting Started

ACF Image Crop with renditions field Add-on is an extended version of ACF image crop that at the same time is an extended version of the the native Image-field in ACF.
The field gives the developer/administrator the option to predefine a size for the image and the renditions (widths with relative heights), which the user is prompted to crop on the various edit screens.

The plugin is meant to be used with custom size option, enabling the developer to specify the dimensions from within the field edit screen.

### Prerequisites

This add-on will work with:
* WP and ACF 4 and up

### Installation

This add-on can be treated as both a WP plugin and a theme include.

* Plugin

```
1. Copy the 'acf-image_crop' folder into your plugins folder
2. Activate the plugin via the Plugins admin page
```

* Include

```
1. Copy the 'acf-image_crop' folder into your theme folder (can use sub folders). You can place the folder anywhere inside the 'wp-content' directory
2. Edit your functions.php file and add the code below (Make sure the path is correct to include the acf-image_crop.php file)

add_action('acf/register_fields', 'my_register_fields');

function my_register_fields()
{
	include_once('acf-image-crop/acf-image-crop.php');
}
```

## Changelog

= 0.1 =
* Initial release. Compatible with ACF Pro 5.6.0


## Credits

- Based on: [ACF-Image-Crop](https://github.com/andersthorborg/ACF-Image-Crop)
- Contributors: hitaboy
- License: GPLv2 or later
- License URI: http://www.gnu.org/licenses/gpl-2.0.html
