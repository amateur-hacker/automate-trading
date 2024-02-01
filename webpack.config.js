module.exports = {
  // other webpack configuration options

  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',  // Adds CSS to the DOM by injecting a <style> tag
          'css-loader',    // Interprets @import and url() like import/require() and will resolve them
          'less-loader'    // Compiles Less to CSS
        ],
      },
    ],
  },
};
