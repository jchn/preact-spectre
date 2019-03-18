 #!/bin/bash
rm ./src/index.js
touch ./src/index.js

for dir in ./src/components/*/
do
    dir=${dir%*/}
    echo "export { default as ${dir##*/} } from './components/${dir##*/}'" >> ./src/index.js
done
