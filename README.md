# Google Meet Plugin

> Note: This plugin doesn't work for @gmail.com accounts because they don't have permission to create meetings by the `https://g.co/meet/` url.

The **Google Meet Plugin** adds a button in the header bar in all channels:
![Example of Google Meet Plugin button](img/start.png)

When a user press the button, a message with the meeting link is automatically sent for the channel:
![The Google Meet Plugin create a message in the channel with the link](img/message.png)

The meeting room link is based on the team and the channel names.

## Usage & Setup Guide

### Installation

Download the latest version:
https://github.com/SrMouraSilva/mattermost-google-meet-plugin/releases/

### Commands

No command support. Please, send pull requests :D

## Contribute

We are accepting pull requests. Check some cool ideias.

* [ ] Internationalization (web only). Check [#1](https://github.com/SrMouraSilva/mattermost-google-meet-plugin/pull/1) and [#4](https://github.com/SrMouraSilva/mattermost-google-meet-plugin/pull/4) for example how to add a new language
  * [x] ~~English~~;
  * [x] ~~Brazilian Portuguese~~;
  * [x] ~~French~~;
  * [x] ~~German~~;
  * [x] ~~Polish~~;
  * [ ] _add your language_;
* [ ] Parametrization;
  * [ ] Meeting room: Random UUID based (a new meeting room for every request) or channel based (the same meeting room for each channel);
  * [ ] Automatically open a new tab;
* [ ] `/meet` command;
* [ ] Your awesome ideia.

### Development

> **Note:** This plugin contains currently only web app portion.

Start a local server
```sh
# https://docs.mattermost.com/install/docker-local-machine.html
docker run --name mattermost-preview -d --publish 8065:8065 --add-host dockerhost:127.0.0.1 mattermost/mattermost-preview
```

Create the first account with `admin` as login and `password` as password.

Run to install:
```sh
sh make.sh
```

## Acknowledgment

* [gmccullough](https://stackoverflow.com/users/2281071/gmccullough) for the ["g.co/meet/" trick](https://stackoverflow.com/a/62313196/1524997);
* [@lauraseidler](https://github.com/lauraseidler) and [@hmhealey](https://github.com/hmhealey) for the help with breaking changes in the version 5.35+;
* [@lauraseidler](https://github.com/lauraseidler) and [@hmhealey](https://github.com/hmhealey) for the help with breaking changes in the version 5.35+;
* [@yodapotatofly](https://github.com/yodapotatofly) and [@oneWaveAdrian](https://github.com/oneWaveAdrian) for translations.