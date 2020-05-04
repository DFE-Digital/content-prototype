FROM ruby:2.6.5 AS build

RUN apt-get update -yqq && apt-get install -yqq --no-install-recommends \
  apt-transport-https

RUN curl -sL https://deb.nodesource.com/setup_12.x | bash - && \
  apt-get update -yqq && apt-get install -yqq --no-install-recommends \
      nodejs

RUN mkdir /app
WORKDIR /app

COPY package.json /app/
RUN npm install

ENV BUNDLE_PATH /gems
COPY Gemfile* /app/
RUN bundle

COPY . .
RUN bundle exec nanoc compile

FROM nginx:1.16.1
# Install htpasswd command
RUN apt-get update -yqq && apt-get install -yqq apache2-utils
ENV PORT=80

COPY --from=build /app/output/ /usr/share/nginx/html/

COPY docker-run.sh /

CMD "./docker-run.sh"
