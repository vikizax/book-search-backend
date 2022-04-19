#!/bin/bash

#give permission for everything in the book-search directory
sudo chmod -R 777 /home/ec2-user/book-search

#navigate into our working directory where we have all our github files
cd /home/ec2-user/book-search

#add npm and node to path
export NVM_DIR="$HOME/.nvm"	
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # loads nvm	
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # loads nvm bash_completion (node is in path now)

#install pm2 globally
npm install pm2 -g

#install node modules
cd /home/ec2-user/book-search
echo "Installing backend node modules...."
npm install

#run build script
cd /home/ec2-user/book-search
echo "Running build script...."
npm run build

#run server with pm2
echo "Starting server with pm2...."
pm2 start /home/ec2-user/book-search/build