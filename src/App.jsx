const contentNode = document.getElementById('contents');

class IssueFilter extends React.Component {
  render() {
    return(
      <div>This is a placeholder for the Issue Filter.</div>
    );
  }
}

class IssueTable extends React.Component {
  render() {
    const issueRows = this.props.issues.map(issue => <IssueRow key={issue.id} issue={issue} />);

    return(
      <table className='bordered-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>Status</th>
            <th>Owner</th>
            <th>Created</th>
            <th>Effort</th>
            <th>Completion Date</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>{issueRows}</tbody>
      </table>
    );
  }
}

class IssueRow extends React.Component {
  render() {
    const issue = this.props.issue;
    return(
      <tr>
        <td>{issue.id}</td>
        <td>{issue.status}</td>
        <td>{issue.owner}</td>
        <td>{issue.created.toDateString()}</td>
        <td>{issue.effort}</td>
        <td>{issue.completionDate ? issue.completionDate.toDateString() : ''}</td>
        <td>{issue.title}</td>
      </tr>
    );
  }
}

class IssueAdd extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    e.preventDefault();
    var form = document.forms.issueAdd;
    this.props.createIssue({
      owner: form.owner.value,
      title: form.title.value,
      status: 'New',
      created: new Date(),
    });
    // Clear the form for the next input
    form.owner.value = ''; form.title.value = '';
  }
  render() {
    return(
      <div>
        <form name='issueAdd' onSubmit={this.handleSubmit}>
          <input type='text' name='owner' placeholder='Owner' />
          <input type='text' name='title' placeholder='Title' />
          <button>Add</button>
        </form>
      </div>
    );
  }
}

const issues = [
  {
    id: 1, status: 'Open', owner: 'Juraj', created: new Date('2016-08-15'), effort: 5, completionDate: undefined, title: 'First issue',
  },
  {
    id: 2, status: 'Assigned', owner: 'Kate', created: new Date('2016-08-16'), effort: 14, completionDate: new Date('2016-08-30'), title: 'Second issue',
  },
];

class IssueList extends React.Component {
  constructor() {
    super();
    this.state = { issues: [] };
    this.createIssue = this.createIssue.bind(this);
  }

  componentDidMount() {
    this.loadData();
  }
  loadData() {
    setTimeout(() => {
      this.setState({issues: issues})
    }, 500);
  }

  createIssue(newIssue) {
    const newIssues = this.state.issues.slice();
    newIssue.id = this.state.issues.length + 1;
    newIssues.push(newIssue);
    this.setState({ issues: newIssues });
  }

  render() {
    return(
      <div>
        <h1>Issue Tracker</h1>
        <IssueFilter />
        <hr />
        <IssueTable issues={this.state.issues} />
        <hr />
        <IssueAdd createIssue={this.createIssue} />
      </div>
    );
  }
}

ReactDOM.render(<IssueList />, contentNode);
