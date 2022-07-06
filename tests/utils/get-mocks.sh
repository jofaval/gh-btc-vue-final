if [ ! -d ./src/services/__mocks__ ]; then
    echo Creating mocks folder...
    mkdir ./src/services/__mocks__
    echo Mocks folder created!
    echo
fi

echo Generating posts mock...
curl -kLSs https://jsonplaceholder.typicode.com/posts -o ./src/services/__mocks__/posts_2.json
echo Posts mock generated!

echo 

echo Generating users mock...
curl -kLSs https://jsonplaceholder.typicode.com/users -o ./src/services/__mocks__/users_2.json
echo Users mock generated!