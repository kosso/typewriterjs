import { resolve } from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config = {
  entry: {
    core: resolve('src', 'core', 'index.js'),
  },

  output: {
    filename: '[name].js',
    path: resolve('dist'),
    library: 'Typewriter',
    libraryTarget: 'umd',
    libraryExport: 'default',
    globalObject: 'typeof self !== \'undefined\' ? self : this',
    umdNamedDefine: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  useBuiltIns: 'entry',
                  corejs: 3,
                  targets: {
                    browsers: [
                      'last 2 versions',
                      'ie >= 11',
                    ],
                  },
                },
              ],
            ],
            plugins: [
              '@babel/plugin-proposal-class-properties',
            ]
          }
        }
      },
    ]
  },

  plugins: [
    // new BundleAnalyzerPlugin()
  ]
};

export default config;