'use strict';

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./cjs/tailwind-components.production.min.js');
} else {
  module.exports = require('./cjs/tailwind-components.development.js');
}
