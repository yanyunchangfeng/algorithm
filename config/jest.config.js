const path = require('path');
const {defaults} = require('jest-config');
module.exports = {
  preset: 'ts-jest',
  rootDir: path.join(process.cwd(), 'src','app'),
};