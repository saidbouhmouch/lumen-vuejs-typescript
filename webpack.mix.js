let mix = require('laravel-mix');

mix.config.webpackConfig.output = {
    chunkFilename: 'js/[name].bundle.js',
    publicPath: '/',
};


mix.webpackConfig({
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
        options: {
            minimize: true
        }
    }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.vue', '.json','.html'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    }
  },
});


mix.js('resources/assets/main.ts', 'public/js/main.js');
mix.version();




