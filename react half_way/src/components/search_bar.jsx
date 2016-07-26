import React, {Component} from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {req: ''};
  }
  
  render() {
    return (
      <div className="search-bar">
        <input 
          value={this.state.req}
          onChange={e => this.setState({req: e.target.value})}
          onBlur={() => {this.props.search(this.state.req)}}
          type="text" /> 
      </div>
    );
  }
}

export default SearchBar;