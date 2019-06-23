# Serve from 0.0.0.0 instead of localhost for docker
sed -i -e 's+next+next -H 0.0.0.0+g' package.json
