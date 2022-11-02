#!/bin/bash
echo "Building Angular project...";
ng build --configuration development;

echo "Uploading Angular project...";
rsync --info=progress2 --info=name0 -a ./dist/admin-panel/ root@188.166.39.49:/var/www/adminpanel;