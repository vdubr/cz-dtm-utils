#!/bin/bash
export NVM_DIR="$HOME/.nvm"
source "$NVM_DIR/nvm.sh"
nvm use 22
cd /Users/vojtadubrovsky/_WORK/home/jvf_viewer
exec node node_modules/.bin/vite --port 5174
