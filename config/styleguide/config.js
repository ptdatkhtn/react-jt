const path = require('path');

const root = path.resolve(__dirname, '../../');

const config = {
  webpackConfig: {
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.ts(x?)$/,
          exclude: /node_modules/,
          use: [
            {
              loader: 'awesome-typescript-loader',
              options: {
                configFileName: 'tsconfig-styleguidist.json',
              },
            },
          ],
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                importLoaders: 1,
                modules: true,
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
              },
            },
          ],
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
  },
  sections: [
    {
      name: 'Icons',
      content: path.resolve(root, 'src/components/Icons/Icons.md'),
    },
    {
      name: 'Components',
      components: path.resolve(root, 'src/components/**/*.{ts,tsx}'),
    },
  ],
  ignore: [
    '**/Icons/**',
    '**/types.ts',
    '**/types.tsx',
    '**/index.ts',
    '**/index.tsx',
    '**/*.spec.js',
    '**/*.spec.jsx',
    '**/*.spec.ts',
    '**/*.spec.tsx',
  ],
  styleguideComponents: {
    Wrapper: path.join(root, 'config/styleguide/Wrapper'),
  },
  propsParser: require('react-docgen-typescript').withCustomConfig(
    path.resolve(root, 'tsconfig.json'),
    {
      // propFilter: {
      //   skipPropsWithName: ['about'],
      //   skipPropsWithoutDoc: true,
      // },
      propFilter(prop) {
        if (prop.parent) {
          return !prop.parent.fileName.includes('node_modules');
        }
        return true;
      },
    },
  ).parse,
  getComponentPathLine(componentPath) {
    const name = path.basename(componentPath, '.tsx');
    const dir = path.dirname(componentPath);
    return `import ${name} from '${dir}';`;
  },
};

if (process.env.npm_lifecycle_event === 'test:visual:build') {
  config.showSidebar = false;
}

module.exports = config;
