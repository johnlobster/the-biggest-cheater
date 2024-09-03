# WordPress Notes

### Create a site on local machine

Basic tutorial at (https://elementor.com/academy/install-wordpress-xampp/) a bit out of date
Better tutorial at (https://themeisle.com/blog/install-xampp-and-wordpress-locally/)

XAMPP - Apache, MariaDB, PHP, and Perl
Get from [Apache friends](https://www.apachefriends.org/index.html)
9/7/23 Have downloaded version 8.2.4 

xampp installation tutorial at (https://elementor.com/academy/install-wordpress-xampp/)

1. Start services - click on Apache and MySql
2. Click on Apache admin button - opens dashboard window in browser
3. Click on phpMyAdmin button on dashboard window
4. Click on Databases tab, enter DB name (eg wpThemeTestDB), click create
5. Download wordPress from (wordpress.org) and unzip in your local area. Note that it creates a parent directory called wordpress. Copy to xampp/htdocs (or just unzip here anyway)
6. Navigate to http://localhost/<site name>/wp-admin, goes through WordPress startup
7. Enter DB name (eg wpThemeTestDB), user root. Leave password blank. Submit
8. User name and password is for admin access. johnlobster and admin<std> 

### Create a child theme

Documentation (https://developer.wordpress.org/themes/advanced-topics/child-themes/)
Tutorials (https://www.wpbeginner.com/wp-themes/how-to-create-a-wordpress-child-theme-video/)

Create a directory (eg twentytwentythree-child/)

Create a `style.css` file

```
Theme Name:   wp Theme Test
Theme URI:    https://www.wpbeginner.com/
Description:  A Twenty Twenty-three child theme
Author:       John Webster
Author URI:   https://www.wpbeginner.com
Template:     twentytwentythree
Version:      1.0.0
Text Domain:  twentytwentythreechild
```

Create a `functions.php` file

(old version)
```
/* enqueue scripts and style from parent theme */
 
function twentytwentythree_styles() {
wp_enqueue_style( 'child-style', get_stylesheet_uri(),
array( 'twenty-twenty-three-style' ), wp_get_theme()->;get('Version') );
}
add_action( 'wp_enqueue_scripts', 'twentytwentythree_styles');
```

(should work better with block theme). Note that block theme doesn't use style.css, so things will probably work a little differently
```
<?php 
add_action( 'wp_enqueue_scripts', 'my_child_enqueue_styles' );
  function my_child_enqueue_styles() {
    wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
```

