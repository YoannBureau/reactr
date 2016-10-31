# Reactr - A React boilerplate as simple as 1-2-3.
This _ready-and-simple-to-use_ boilerplate includes react, react-router, sass, bootstrap, font awesome and a few common dev packages.

# Clone it
Clone this repository, run `npm install` then start coding.

# Getting started

## Want to add a new view?
As simple as _1-2-3_:

1. Create your view in /src/views directory
2. Add you route in /src/views/application.jsx
3. Add a link in the navbar in /src/views/common/layout.jsx

## Include third party easily
Import third party css or js files in src/main.js, like we already did for Bootstrap and Font Awesome. Yep, that's all.

## Everything is packed and dev-ready
Webpack does the job, both JS and CSS. To start the webserver, simply type `npm start` and navigate to **localhost:4444**.

## But also ready to deploy!
Job done, want to build? Type `gulp dist`, then browse **/dist** directory and get your packed files.

## What next?
Don't know dude, it's **your** app now. Be creative.

# Deeper: What's in?

## Dependencies
* react
* react-dom
* react-router
* bootstrap
* font-awesome

## Dev-Dependencies
* babel:
    * babel-core
    * babel-preset-es2015
    * babel-preset-react
* webpack:
    * webpack
    * webpack-dev-server
    * webpack-stream
    * loaders:
        * babel-loader
        * css-loader
        * file-loader
        * sass-loader
        * style-loader
        * url-loader
* gulp
* gulp kits:
    * del
    * gulp-rename
    * run-sequence
* node-sass