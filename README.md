# TopBlockbusterApp
This application allows one to view the top blockbuster movies.  The application is built using the MEIN Stack.

MongoDB - noSQL database hosted on MongoDB atlas

Express - node.js web application framework

Ionic - frontend application framework with cordova

Node - javascript powered language

Reference the docker at https://hub.docker.com/r/rdates/blockbuster/  for the image

Instructions for running the application.

Once this github repo is cloned downloaded you will need to run these two commands

-- ./scripts/docker_build.sh

-- ./scripts/docker_run.sh

After this peform these steps your docker container is now ready to be used.  Attach the the container then run the following command

-- cd blockbuster

-- nohup node server/server.js > /dev/null 2>&1 &

This line will start the node.js server and run it in a background task allowing you do start run the application locally to the docker.

-- ionic serve

This will run the application through a web explorer. In order to use ionic-cordova to compile the android appication you will want to run.

-- ionic cordova run android      -or-     ionic cordova emulate android     (using the emulator)

These steps may fail and there will  be a prompt that asks you to run a line of code to build the project for your environment. Follow that instruction exact and try the last step again.


