import React from 'react';

const CardDetail = props => {
  return (
    <div className='comment'>
      <div className='content'>
        <div className='ui dividing header'>{props.question}</div>
        <div className='description'>
          <p>{props.answer}</p>
        </div>
      </div>
    </div>
  );
};

class CueCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      liked: true,
      likeCount: 1,
      className: 'heart blue like icon',
      favorite: true,
      favoriteStyle: 'yellow star icon'
    };
  }

  onClickLikeIcon = () => {
    this.setState({
      liked: !this.state.liked,
      likeCount: this.state.liked ? 1 : 0,
      className: this.state.liked
        ? 'heart blue like icon'
        : 'heart outline like icon'
    });
  };

  onClickFavorite = () => {
    this.setState({
      favorite: !this.state.favorite,
      favoriteStyle:
        this.state.favorite === true ? 'yellow star icon' : 'outline star icon'
    });
  };

  render() {
    return (
      <div className='ui card'>
        <div className='content'>
          <CardDetail
            question='What is ReactJS?'
            answer='ReactJS is a JavaScript library that helps to build user interface components elegantly'
          />
        </div>
        <div className='extra content'>
          <span className='left floated like' onClick={this.onClickLikeIcon}>
            <i
              className={this.state.className}
              onClick={this.onClickLikeIcon}
            ></i>
            {this.state.likeCount} Likes
          </span>
          <span className='right floated star' onClick={this.onClickFavorite}>
            <i
              className={this.state.favoriteStyle}
              onClick={this.onClickFavorite}
            ></i>
            Favorite
          </span>
        </div>
      </div>
    );
  }
}

export default CueCard;
