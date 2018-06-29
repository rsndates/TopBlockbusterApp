# TopBlockbusterApp
This application allows one to view the top blockbuster movies.  The application is built using the MEIN Stack.

MongoDB - noSQL database hosted on MongoDB atlas

Express - node.js web application framework

Ionic - frontend application framework with cordova

Node - javascript powered language

Reference the docker at https://hub.docker.com/r/rdates/blockbuster/  for the image

Instructions for running the application.

Run App on Docker


Git Clone Repo: 

— git clone https://github.com/rsndates/TopBlockbusterApp.git

Pull Docker image: 

 —  docker pull rates/blockbuster:latest

Start Docker container:

— ./scripts/docker_run.sh

Start server in the background:

— nohup node server/server.js > /dev/null 2>&1 &

Run application:

— cd blockbuster
— ionic serve

View in web browser at URL:

http://localhost:8100

Stop application and exit Container: 

— Ctrl-C
— exit

Future Task: Get the andoird emulator working shown below:

-- ionic cordova run android      -or-     ionic cordova emulate android     (using the emulator)

These steps may fail and there will  be a prompt that asks you to run a line of code to build the project for your environment. The line should looke like the following command.

-- npm rebuild node-sass --force


