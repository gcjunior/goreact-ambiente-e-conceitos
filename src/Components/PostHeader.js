import React from 'react';
import PropTypes from 'prop-types';

const PostHeader = props => (
  <div>
    <img src={props.post.avatar} alt={props.post.name} className="avatar" />
    <div className="avatar-text">
      <p className="name">
        {props.post.name}
      </p>
      <p className="hora">
        ha&nbsp;
        {props.post.hora}
        {' '}
min
      </p>
    </div>
  </div>
);

PostHeader.defaultProps = { post: null };

PostHeader.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ),
};

export default PostHeader;
