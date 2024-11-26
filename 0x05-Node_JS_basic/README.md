![](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/82692897e15d9f03256f.jpeg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20241126%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20241126T195351Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b588146a158976615cecfbcc5d3b716cdcea503d7783a19f4bb10851ddcc59ca)

Resources
---------

**Read or watch**:

*   [Node JS getting started](/rltoken/hROgW3QO9jqFnFP-Nzwh8A "Node JS getting started")
*   [Process API doc](/rltoken/Wt69QV2xygB4GEqob26AjQ "Process API doc")
*   [Child process](/rltoken/IS4y9rRCblX71W_oeXpymw "Child process")
*   [Express getting started](/rltoken/XsfrhG9NRLuuaTpVZlZv_g "Express getting started")
*   [Mocha documentation](/rltoken/EBGDj1FwLrK_y4kgxp8hfg "Mocha documentation")
*   [Nodemon documentation](/rltoken/vnDSbLsicMDdxcf5YUSXIg "Nodemon documentation")

Learning Objectives
-------------------

At the end of this project, you are expected to be able to [explain to anyone](/rltoken/vXmxtc5JH_CeIWReMTNhDA "explain to anyone"), **without the help of Google**:

*   run javascript using NodeJS
*   use NodeJS modules
*   use specific Node JS module to read files
*   use `process` to access command line arguments and the environment
*   create a small HTTP server using Node JS
*   create a small HTTP server using Express JS
*   create advanced routes with Express JS
*   use ES6 with Node JS with Babel-node
*   use Nodemon to develop faster

Requirements
------------

*   Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
*   All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `node` (version 12.x.x)
*   All your files should end with a new line
*   A `README.md` file, at the root of the folder of the project, is mandatory
*   Your code should use the `js` extension
*   Your code will be tested using `Jest` and the command `npm run test`
*   Your code will be verified against lint using ESLint
*   Your code needs to pass all the tests and lint. You can verify the entire project running `npm run full-test`
*   All of your functions/classes must be exported by using this format: `module.exports = myFunction;`

Provided files
--------------

### `database.csv`

    firstname,lastname,age,field
    Johann,Kerbrou,30,CS
    Guillaume,Salou,30,SWE
    Arielle,Salou,20,CS
    Jonathan,Benou,30,CS
    Emmanuel,Turlou,40,CS
    Guillaume,Plessous,35,CS
    Joseph,Crisou,34,SWE
    Paul,Schneider,60,SWE
    Tommy,Schoul,32,SWE
    Katie,Shirou,21,CS
    

### `package.json`

Click to show/hide file contents

    
    {
      "name": "node_js_basics",
      "version": "1.0.0",
      "description": "",
      "main": "index.js",
      "scripts": {
        "lint": "./node_modules/.bin/eslint",
        "check-lint": "lint [0-9]*.js",
        "test": "./node_modules/mocha/bin/mocha --require babel-register --exit",
        "dev": "nodemon --exec babel-node --presets babel-preset-env ./server.js ./database.csv"
      },
      "author": "",
      "license": "ISC",
      "dependencies": {
        "chai-http": "^4.3.0",
        "express": "^4.17.1"
      },
      "devDependencies": {
        "babel-cli": "^6.26.0",
        "babel-preset-env": "^1.7.0",
        "nodemon": "^2.0.2",
        "eslint": "^6.4.0",
        "eslint-config-airbnb-base": "^14.0.0",
        "eslint-plugin-import": "^2.18.2",
        "eslint-plugin-jest": "^22.17.0",
        "chai": "^4.2.0",
        "mocha": "^6.2.2",
        "request": "^2.88.0",
        "sinon": "^7.5.0"
      }
    }

### `babel.config.js`

Click to show/hide file contents

    
    module.exports = {
      presets: [
        [
          '@babel/preset-env',
          {
            targets: {
              node: 'current',
            },
          },
        ],
      ],
    };

### `.eslintrc.js`

Click to show/hide file contents

    
    module.exports = {
      env: {
        browser: false,
        es6: true,
        jest: true,
      },
      extends: [
        'airbnb-base',
        'plugin:jest/all',
      ],
      globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
      },
      parserOptions: {
        ecmaVersion: 2018,
        sourceType: 'module',
      },
      plugins: ['jest'],
      rules: {
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-console': 'off',
        'no-shadow': 'off',
        'no-restricted-syntax': [
          'error',
          'LabeledStatement',
          'WithStatement',
        ],
      },
      overrides:[
        {
          files: ['*.js'],
          excludedFiles: 'babel.config.js',
        }
      ]
    };

### and…

Don’t forget to run `$ npm install` when you have the `package.json`