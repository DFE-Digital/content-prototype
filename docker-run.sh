#!/bin/sh

set -e

# If the basic auth environment variables are present update default.conf to
# require basic auth.
if [ $BASIC_AUTH_USERNAME ] && [ $BASIC_AUTH_PASSWORD ]; then
  sed -i 's/location \/ {/location \/ {\
    auth_basic "Restricted";\
    auth_basic_user_file \/etc\/nginx\/.htpasswd;\
/' /etc/nginx/conf.d/default.conf

  htpasswd -bc /etc/nginx/.htpasswd $BASIC_AUTH_USERNAME $BASIC_AUTH_PASSWORD
fi

# Update default.conf to listen on Heroku's dynamic port
sed -i "s/listen       80;/listen $PORT;/" /etc/nginx/conf.d/default.conf

# FIXME remove this it's a temp work around for UR
sed -i 's/location \/ {/rewrite \^\/parents\/\$ https:\/\/dfe-content-prototype.herokuapp.com\/supporting-your-childrens-education-during-coronavirus\/help-secondary-school-children-continue-their-education-during-coronavirus\/index.html redirect;\
  location \/ {/' /etc/nginx/conf.d/default.conf

# FIXME This line seems to be added in on heroku and seems to be the cause of
# the permission error.
sed -i 's/listen  [::]:80;//' /etc/nginx/conf.d/default.conf

cat /etc/nginx/conf.d/default.conf

exec nginx -g 'daemon off;'
