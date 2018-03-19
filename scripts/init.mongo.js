db = new Mongo().getDB('issuetracker');

db.issues.remove({});

db.issues.insert([
  {
    id: 1, status: 'Open', owner: 'Juraj',
    created: new Date('2017-08-15'), effort: 5, completionDate: undefined,
    title: 'First issue',
  },
  {
    id: 2, status: 'Assigned', owner: 'Kate',
    created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2017-08-30'),
    title: 'Second Issue',
  },
]);

db.issues.createIndex({ status: 1 });
db.issues.createIndex({ owner: 1 });
db.issues.createIndex({ created: 1 });
