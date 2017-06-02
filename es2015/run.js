import Jasmine from 'jasmine';

const jasmine = new Jasmine();
jasmine.loadConfigFile('./es2015/jasmine-es2015.json');
jasmine.execute();
