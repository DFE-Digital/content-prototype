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
COPY --from=build /app/output/ /usr/share/nginx/html/
RUN cat /etc/nginx/conf.d/default.conf | sed 's/listen ${NGINX_PORT}/listen ${PORT}/' | sed 's/#error_page  404/error_page  404/' > /tmp/default.conf && mv /tmp/default.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]
