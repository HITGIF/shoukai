function getStyleUse(bundleFilename) {
  return [
    {
      loader: 'file-loader',
      options: {
        name: bundleFilename,
      },
    },
    { loader: 'extract-loader' },
    { loader: 'css-loader' },
    {
      loader: 'sass-loader',
      options: {
        includePaths: ['./node_modules'],
        implementation: require('dart-sass'),
        fiber: require('fibers'),
  }
    },
  ];
}

module.exports = [
  {
    entry: './scss/answer.scss',
    output: {
      // This is necessary for webpack to compile, but we never reference this js file.
      filename: 'style-bundle-answer.js',
    },
    module: {
      rules: [{
        test: /answer.scss$/,
        use: getStyleUse('bundle-answer.css')
      }]
    },
  },
  {
    entry: "./js/answer.js",
    output: {
      filename: "bundle-answer.js"
    },
    module: {
      loaders: [{
        test: /answer.js$/,
        loader: 'babel-loader',
        query: {presets: ['env']}
      }]
    },
  }
];
