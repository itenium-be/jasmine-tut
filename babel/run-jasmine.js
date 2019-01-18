import '@babel/polyfill';
import 'core-js/shim';
import Jasmine from 'jasmine';

const jasmine = new Jasmine();
jasmine.loadConfigFile('./babel/jasmine-babel.json');
jasmine.execute();
