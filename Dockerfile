FROM jenkinsci/jenkins

RUN npm install gulp
RUN npm install -g gulp
RUN npm install -g gulp-cli



RUN ln -s /usr/local/bin/gulp /usr/bin/gulp
RUN ln -s /usr/local/bin/node /usr/bin/node

# Define working directory.
RUN mkdir -p "/data/emsapp"
WORKDIR /data/emsapp/

# Define default command.
CMD ["bash"]

ADD html html
ADD models models
ADD routes routes
ADD node_modules node_modules
ADD lib lib
ADD nightwatch.json nightwatch.json


ADD tests tests
ADD gatling gatling
ADD selenium-server-standalone-2.47.1.jar server.js nightwatch.js package.json gulpfile.js ./
#ENV $HOME=/

EXPOSE 3033
