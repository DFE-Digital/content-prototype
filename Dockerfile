FROM ruby:2.6.5 AS build

RUN apt-get update -yqq && apt-get install -yqq --no-install-recommends \
  apt-transport-https

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
  apt-get update -yqq && apt-get install -yqq --no-install-recommends \
      nodejs

RUN mkdir /app
WORKDIR /app
ENV BUNDLE_PATH /gems

COPY package.json /app/
RUN npm install

COPY Gemfile* /app/
RUN bundle

COPY . .
RUN bundle exec nanoc compile

FROM nginx:stable
# Install htpasswd command
RUN apt-get update -yqq && apt-get install -yqq apache2-utils

COPY default.conf.template /etc/nginx/conf.d/default.conf.template
COPY nginx.conf /etc/nginx/nginx.conf
COPY --from=build /app/output/ /usr/share/nginx/html/
COPY http_basic_auth.sh http_basic_auth.sh

ENTRYPOINT ["./http_basic_auth.sh"]
CMD /bin/bash -c "envsubst '\$PORT' < /etc/nginx/conf.d/default.conf.template > /etc/nginx/conf.d/default.conf" && nginx -g 'daemon off;'
