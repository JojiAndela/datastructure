
const database = {};

module.exports = {
  addData: (model, data) => {
    if(!database[model]){
      database[model] = [];
    }
    data.id = database[model].length + 1;
    database[model].push(data);
    console.log(`new data added to ${model}:`, data);
  },

  getAll: (model) => {
    const dataModel = database[model];
    if(!dataModel){
      return console.log(`no data in ${model}`);
    }

    console.log({[model]: dataModel});
  },

  getOne: (model, item, value) => {
    const dataModel = database[model];
    if(!dataModel){
      return console.log(`no data in ${model}`);
    }

    const filtered = dataModel.filter((data) => data[item] === value);

    if(!filtered.length){
      return console.log(`no such data in ${model}`);
    }

    console.log({[model]: filtered[0]});
  },


  updateData: (model,id, data) => {
    const dataModel = database[model];
    if(!dataModel){
      return console.log(`no data in ${model}`);
    }
    const filtered = dataModel.filter((data) => data.id === id);

    if(!filtered.length){
      return console.log(`no such data in ${model}`);
    }
    const tobeUpdated = filtered[0];
    data.id = tobeUpdated.id;
    const index = dataModel.indexOf(tobeUpdated);
    database[model].splice(index,1);
    database[model].push(data);
    console.log(`data updated in ${model}:`, data);
  },

deleteData: (model, id) => {
  const dataModel = database[model];
    if(!dataModel){
      return console.log(`no data in ${model}`);
    }
    const filtered = dataModel.filter((data) => data.id === id);

    if(!filtered.length){
      return console.log(`no such data in ${model}`);
    }
    const tobeDeleted = filtered[0];
    const index = dataModel.indexOf(tobeDeleted);
    database[model].splice(index,1);
    console.log(`data deleted from ${model}:`, tobeDeleted);
},
  find: (model, item, value) => {
    const dataModel = database[model];
    if(!dataModel){
      return console.log(`no data in ${model}`);
    }

    const filtered = dataModel.filter((data) => data[item] === value);

    if(!filtered.length){
      return console.log(`no such data in ${model}`);
    }

    console.log({[model]: filtered});
  }
};

