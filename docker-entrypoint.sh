#!/bin/sh

cat /default.tmpl | envsubst > /etc/nginx/conf.d/default.conf

cat /etc/nginx/conf.d/default.conf
