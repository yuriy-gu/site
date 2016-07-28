const ws = new WebSocket('ws://192.168.1.56:3000');
ws.onopen = () => {
  class Comment extends React.Component {
    render() {
      return (
        <div className="comment">
          <h2 className="commentAuthor">
            {this.props.author}
          </h2>
          {this.props.children}
        </div>
      );
    }
  }

  class CommentBox extends React.Component {
    constructor(props) {
      super(props);
      this.state = {data: []};
    }
    loadCommentsFromServer() {
      $.ajax({
        url: "/api/comments",
        dataType: 'json',
        cache: false,
        success: data => {
          this.setState({data});
        }
      });
    }
    handleCommentSubmit(comment) {
      comment.id = Date.now();
      ws.send(JSON.stringify(comment));
    }
    componentDidMount() {
      this.loadCommentsFromServer();
      ws.onmessage = (mess) => {
        this.setState({data: JSON.parse(mess.data)});
      };
    }
    render() {
      return (
        <div className="commentBox">
          <h1>Comments</h1>
          <CommentList data={this.state.data} />
          <CommentForm onCommentSubmit={this.handleCommentSubmit} />
        </div>
      );
    }
  }

  class CommentList extends React.Component {
    render() {
      let commentNodes = this.props.data.map(comment => {
        return (
          <Comment author={comment.author} key={comment.id}>
            {comment.text}
          </Comment>
        );
      });
      return (
        <div className="commentList">
          {commentNodes}
        </div>
      );
    }
  }

  class CommentForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {author: '', text: ''};
    }
    handleAuthorChange(e) {
      this.setState({author: e.target.value});
    }
    handleTextChange(e) {
      this.setState({text: e.target.value});
    }
    handleSubmit(e) {
      e.preventDefault();
      let author = this.state.author.trim();
      let text = this.state.text.trim();
      if (!text || !author) {
        return;
      }
      this.props.onCommentSubmit({author: author, text: text});
      this.setState({author: '', text: ''});
    }
    render() {
      return (
        <form className="commentForm" onSubmit={this.handleSubmit.bind(this)}>
          <input
            type="text"
            placeholder="Your name"
            value={this.state.author}
            onChange={this.handleAuthorChange.bind(this)}
          />
          <input
            type="text"
            placeholder="Say something..."
            value={this.state.text}
            onChange={this.handleTextChange.bind(this)}
          />
          <input type="submit" value="Post" />
        </form>
      );
    }
  };

  ReactDOM.render(
    <CommentBox />,
    document.getElementById('content')
  );
}

  