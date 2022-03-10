#Begin set up FROM a base docker image
FROM ruby:2.5
#FROM node:12-alpine #lightweight baseline linux image

# Adding build tools to make yarn install work on Apple silicon / arm64 machines
#RUN apk add --no-cache python2 g++ make

#Install any prequisites, like Ruby
#RUN yarn install --production #
RUN apt-get update -qq && apt-get install -y nodejs postgresql-client

#Set working directory and copy in files from local directory
WORKDIR /myapp
COPY . .
COPY Gemfile /myapp/Gemfile
COPY Gemfile.lock /myapp/Gemfile.lock

RUN bundle install


#Script to run at start
COPY entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
entrypoint ["entrypoint.sh"]
EXPOSE 3000

#Configure main rails pdrocess
#CMD["rails", "server", "-b", "0.0.0.0"]