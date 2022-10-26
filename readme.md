./node_modules/.bin/cypress open

npx cypress open

//comando pruebas por consola
"cypress:run:regresion": "npx cypress run -e baseUrl= -s cypress/integration/*.spec.js",