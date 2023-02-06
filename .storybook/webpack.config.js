module.exports = async ({ config, mode }) => {
  const rules = config.module.rules.filter(
    (rule) => rule.test && !rule.test.toString().includes('css')
  );
  rules.push({
    test: /\.stories\.tsx?$/,
    loader: require.resolve('@storybook/source-loader'),
    exclude: [/node_modules/],
    enforce: 'pre',
  });
  rules.push({
    test: /\.css$/,
    exclude: [/node_modules/],
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: {
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
          },
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            plugins: [
              [
                'postcss-preset-env',
                {
                  // Options
                },
              ],
            ],
          },
        },
      },
    ],
  });

  config.module.rules = rules;
  console.log(config.module.rules);
  return config;
};
