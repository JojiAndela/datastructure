
const data = require('./data');

data.addData('post', {title: 'my title1'});
data.addData('post', {title: 'my title2'});
data.addData('post', {title: 'my title3'});

data.getAll('post');

data.getOne('post', 2);
data.getOne('post', 1);
data.getOne('post', 5);

data.updateData('post', 1, {title: 'my list'});

data.deleteData('post', 2);

data.find('post', 'title', 'my list');

data.getAll('post');

