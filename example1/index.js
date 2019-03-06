

const data = require('./data');

data.addData('post', {title: 'my title1'});
data.addData('post', {title: 'my title2'});
data.addData('post', {title: 'my title3'});

data.getAll('post');

data.getOne('post', 'id', 2);
data.getOne('post', 'id', 1);
data.getOne('post', 'title', 'my title');
data.getOne('post', 'title', 'my list');

data.updateData('post', 1, {title: 'my list'});

data.deleteData('post', 2);

data.find('post', 'title', 'my list');

data.getAll('post');

