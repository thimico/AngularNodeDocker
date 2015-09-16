FROM www.cybage-docker-registry.com:9080/jenkins_node_slave:1.3

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
ADD lib lib

ADD examples examples
ADD gatling gatling
ADD selenium-server-standalone-2.47.1.jar server.js nightwatch.js package.json gulpfile.js ./
#ENV $HOME=/

EXPOSE 3003
