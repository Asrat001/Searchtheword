#!/bin/sh
current_date_time=$(date)
git add .
git commit -m "deploy $current_date_time" 
npm run deploy
