# Hillsborough County Hackathon #

## About ##

  For the first time ever, Hillsborough County is opening up data from numerous departments to Tampa Bay's technology community.  This is the website for that initiative.

## Requirements ##

  * Ruby, ruby gems
  * Jekyll
  * Sass
  * Compass
  * Bourbon
  * foreman
  * susy-grid
  * sassy-noise

## Installation ##
   ```

   git clone git@github.com:createch/hillathon.git
   cd hillathon
   compass create .
   vi Procfile.dev

   paste into Procfile.dev:
      jekyll:  jekyll --server
      comapss: compass watch

   vi config.rb

   paste into config.rb:
      http_path = "/"
      css_dir = "assets/css"
      sass_dir = "assets/scss"
      images_dir = "assets/images"
      javascripts_dir = "assets/javascripts"
      require "sassy_noise"
      require "susy"
      require "bourbon"
      line_comments = false

   foreman start -f Procfile.dev
   ```

## Authors ##

  * [@radicalcakes](https://github.com/radicalcakes)
  * [@luqmaan](https://github.com/luqmaan)
