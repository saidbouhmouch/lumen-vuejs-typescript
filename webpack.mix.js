let mix = require('laravel-mix');

// mix.config.webpackConfig.output = {
//     chunkFilename: 'js/[name].bundle.js',
//     publicPath: '/',
// };


mix.webpackConfig({
    module:{
       rules:[
        {
            test: /\.tsx?$/,
            exclude: [
              /node_modules/
            ],
            loader: 'babel-loader',
          }
       ]
    },
    resolve: {
        extensions: ['.ts','.js', '.vue', '.json']    
    }
});


mix.js('resources/assets/main.ts', 'public/js/main.js');
mix.version();




