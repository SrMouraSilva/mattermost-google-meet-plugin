# Google Meet Plugin

> Note: This plugin doesn't work for @gmail.com accounts because they don't have permission to create meet by `https://g.co/meet/` url

The **Google Meet Plugin** add a button in the header bar in all calls:

![Example of Google Meet Plugin button](img/start.png)

When a user press the button, a room with a random name (UUID pattern) is created. A message is automaticaly created with the room:

![The Google Meet Plugin create a message in the channel with the link](img/message.png)

## Usage & Setup Guide

### Commands

No command support. Please, send pull requests :D

### Installation

To generate a version, run `sh make.sh` and add it on Mattermost.

## Development

This plugin contains currently only web app portion.

Start a local sertver - https://docs.mattermost.com/install/docker-local-machine.html
```
docker run --name mattermost-preview -d --publish 8065:8065 --add-host dockerhost:127.0.0.1 mattermost/mattermost-preview
```

Create the first account with `admin` as login and `password` as password.

Run to install
```sh
sh make.sh
```

## Acknowledgment

* gmccullough for the [g.co/meet/ trick](https://stackoverflow.com/a/62313196/1524997);
* @lauraseidler and @hmhealey for the help with breaking changes in the new mattermost version.
