# Install webpack as a development dependency
npm install webpack webpack-cli -D
# Execute webpack locally in the project (Not being installed globally)
npx webpack
# Webpack mode development
npx webpack --mode development
# Webpack mode production
npx webpack --mode production
# Using a specific config file
npx webpack --mode production --config webpack.config.js
# Install babel (Optimize html for all browsers)
npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
# Install html webpack (Allows to optimize imports when injecting js, css favicons, etc. With this we don't need to include them on every html)
npm install html-webpack-plugin -D
# Install css loader (Allows to optimize imports when injecting css. With this we don't need to include them on every html)
npm install mini-css-extract-plugin css-loader -D
# Install stylus loader (Allows to optimize imports when injecting styl. With this we don't need to include them on every html)
npm install stylus stylus-loader -D
# Install copy webpack plugin (Copy files when preprocessing)
npm install copy-webpack-plugin -D
# Install url and file loader (Not necessary on webpack 5 version)
npm install url-loader file-loader -D
# Install css and js minifiers (Terser not necessary on webpack 5 version)
npm install css-minimizer-webpack-plugin terser-webpack-plugin -D
# Install dot env for webpack
npm install dotenv-webpack -D

# Live server (Plugin for visual code) to create web server for static websites

# Execute webpack on production or development mode
webpack --mode production
webpack --mode development
