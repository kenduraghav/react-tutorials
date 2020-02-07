import React from 'react';

class ApprovalCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLike: false, likeCount: 0 };
  }

  render() {
    return (
      <div className='ui card'>
        <div className='content'>{this.props.children}</div>
        <div className='extra content'>
          <span className='left floated like'>
            <i className='heart outline like icon'></i>
            {this.state.likeCount} Likes
          </span>
          <span className='right floated star'>
            <i className='outline star icon'></i>
            Favorite
          </span>
        </div>
      </div>
    );
  }
}

export default ApprovalCard;
