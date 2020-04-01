#!/bin/sh

set -e

# If the basic auth environment variables are present update default.conf to
# require basic auth.
if [ $BASIC_AUTH_USERNAME ] && [ $BASIC_AUTH_PASSWORD ]; then
  sed -i 's/location \/ {/location \/ {\
    auth_basic "Restricted";\
    auth_basic_user_file \/etc\/nginx\/.htpasswd;\
/' /etc/nginx/conf.d/default.conf.template

  htpasswd -bc /etc/nginx/.htpasswd $BASIC_AUTH_USERNAME $BASIC_AUTH_PASSWORD
fi

exec "$@"
