import '@babel/polyfill';
import Jasmine from 'jasmine';

const jasmine = new Jasmine();
jasmine.loadConfigFile('./babel/jasmine-babel.json');
jasmine.execute();


// TODO: execute the flat() & flatMap() fns here
