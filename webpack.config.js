module.exports = {
    entry: "./entry.js",
    output: {
        path: __dirname,
        filename: "bundle.js"
    },
    module: {
      loaders: [
          { test: /\.css$/, loader: "style!css" }
      ],
      use: {
         loader: 'babel-loader',
         options: {
           presets: ['env'],
           plugins: [require('babel-plugin-transform-object-rest-spread')]
         }
       }
    }
};
