// eslint-disable-next-line no-undef
const MODULE = process.env.MODULE || false;

module.exports = {
  presets: [
    [
      '@babel/env',
      {
        modules: MODULE,
      },
    ],
    '@babel/preset-typescript',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
  ],
};
