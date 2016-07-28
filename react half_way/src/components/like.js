import React, {Component} from 'react';

class Like extends component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className='heart'>
				<span>
					className={this.props.video.liked? 'active-heart':''}
					onClick={() => this.props.like(this.props.video)}>&hearts;
				</span>
			</div>
			);
	}
}

export default Like;