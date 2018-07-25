#!/bin/sh

mainOptions () {
  # reset

  echo "                      ___           ___          _____    "
  echo "       _____         /  /\         /__/\        /  /::\   "
  echo "      /  /::\       /  /:/_        \  \:\      /  /:/\:\  "
  echo "     /  /:/\:\     /  /:/ /\        \  \:\    /  /:/  \:\ "
  echo "    /  /:/~/::\   /  /:/ /:/_   _____\__\:\  /__/:/ \__\:|"
  echo "   /__/:/ /:/\:| /__/:/ /:/ /\ /__/::::::::\ \  \:\ /  /:/"
  echo "   \  \:\/:/~/:/ \  \:\/:/ /:/ \  \:\~~\~~\/  \  \:\  /:/ "
  echo "    \  \::/ /:/   \  \::/ /:/   \  \:\  ~~~    \  \:\/:/  "
  echo "     \  \:\/:/     \  \:\/:/     \  \:\         \  \::/   "
  echo "      \  \::/       \  \::/       \  \:\         \__\/    "
  echo "       \__\/         \__\/         \__\/                  "
  echo " "
  echo " "
  if [ "$1" = "modules" ]
  then
    echo "List of modules"
    echo "_______________________"
    echo "1. header"
    echo "2. grid"
    echo "3. slideshow"
    exit 0
  else
    echo " "
    echo "You need to have gnu-sed (brew install gnu-sed)"
    echo " "
    if [ "$1" = "header" ] || [ "$1" = "grid" ]  || [ "$1" = "slideshow" ]
    then
      echo "-> $1 options"
    else
      echo "This module doesn't exist"
      exit 0
    fi
  fi

  c="@import '../base/scss/$1/$1';"
  j="import $1 from './modules/$1.js'"
  j2="global.main.$1 = new $1()"

        PS3='Please enter your choice: '
        headerOptions=("Install" "Uninstall" "Back")
        select optH in "${headerOptions[@]}"
        do
          case $optH in
            "Install")
              echo "Installing $1 module"
              echo "Copying files"
              grep -q -F "$c" src/scss/base.scss || echo "$c" >> src/scss/base.scss
              grep -q -F "$j" src/js/web_app.js || gsed "s#var global#$j\n&#g" src/js/web_app.js > src/js/web_app.js_temp
              mv src/js/web_app.js_temp src/js/web_app.js
              grep -q -F "$j2" src/js/web_app.js || gsed "s#global.main.resetModules()#$j2\n  &#g" src/js/web_app.js > src/js/web_app.js_temp
              mv src/js/web_app.js_temp src/js/web_app.js
              mkdir templates/blocks/$1/
              cp src/base/templates/header/back_custom.php templates/blocks/header/back.php
              ;;
            "Uninstall")
              echo "Uninstalling $1 module"
              echo "Deleting files"
              grep -vwE "$c" src/scss/base.scss > src/scss/base.scss_temp
              mv src/scss/base.scss_temp src/scss/base.scss
              echo "$j"
              grep -vwE "$j" src/js/web_app.js > src/js/web_app.js_temp
              mv src/js/web_app.js_temp src/js/web_app.js
              grep -vwE "  $j2" src/js/web_app.js > src/js/web_app.js_temp
              mv src/js/web_app.js_temp src/js/web_app.js
              ;;
            "Back")
              exit 0
              ;;
            *) echo invalid headerOptions;;
          esac
        done

}

mainOptions $1
