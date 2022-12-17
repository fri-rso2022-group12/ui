#
#	Build image
#
FROM node:16-alpine as build

WORKDIR /root

COPY . ./

RUN npm install && \
	./node_modules/.bin/ng build --configuration=production

#
#	Production image
# @see https://hub.docker.com/_/nginx
#
FROM nginx:1.21.5-alpine

#
#	Arguments
#
ARG ARCH='amd64'
ARG BUILD_DATE
ARG VCS_REF
ARG VCS_SRC
ARG VERSION

#
#	Environment variables
#
ENV APP_VERSION=${VERSION} \
  ARCH="${ARCH}" \
	CONTAINER_GROUP="nginx" \
	CONTAINER_USER="nginx" \
	DOCKER_CONTAINER=true \
	HOME="/root" \
	PS1="\[\e]0;\u@\h: \w\a\]\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\$ " \
	TERM="xterm" \
	VISUAL="nano"

#
#	Install framework
#
ADD https://raw.githubusercontent.com/SloCompTech/s6-overlay-framework/master/setup.sh /tmp/setup.sh
RUN chmod +x  /tmp/setup.sh && \
  /tmp/setup.sh && \
	rm /tmp/setup.sh

# Project files
COPY root /
RUN chmod o+w /tmp && \
  usermod -a -G tty ${CONTAINER_USER} && \ 
	touch /var/run/nginx.pid && \
	chown -R ${CONTAINER_USER}:${CONTAINER_GROUP} /app /var/cache/nginx /var/log/nginx /var/run/nginx.pid && \
	sed -ri 's/user\s+.*;//' /etc/nginx/nginx.conf && \
	rm -r /usr/share/nginx/html/*
COPY --from=build /root/dist/rso /app

ENTRYPOINT ["/init"]