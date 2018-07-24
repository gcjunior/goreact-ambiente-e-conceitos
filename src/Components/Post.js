import React from 'react';
import PropTypes from 'prop-types';
import PostHeader from './PostHeader';

const Post = props => (
  <li className="post">
    <div>
      <PostHeader post={props.post} />
      <hr />
      <p className="content">
        {props.post.content}
      </p>
    </div>
  </li>
);

Post.defaultProps = { post: null };

Post.propTypes = {
  post: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      avatar: PropTypes.string,
    }),
  ),
};

export default Post;
