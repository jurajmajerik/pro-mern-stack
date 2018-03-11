const express = require('express');

const app = express();
app.use(express.static('static'));

const issues = [
  {
    id: 1, status: 'Open', owner: 'Juraj', created: new Date('2016-08-15'), effort: 5, completionDate: undefined, title: 'First issue',
  },
  {
    id: 2, status: 'Assigned', owner: 'Kate', created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'), title: 'Second issue',
  },
];

app.get('/api/issues', (req, res) => {
  const metadata = { total_count: issues.length };
  res.json({ _metadata: metadata, records: issues });
});

app.listen(3000, function() {
  console.log('App started on port 3000...');
});
