import React, { Component, Fragment } from 'react';
import { render } from 'react-dom';

import Nav from './Components/Header';
import Post from './Components/Post';

import './style.scss';

class App extends Component {
  state = {
    posts: [],
  };

  componentDidMount() {
    const posts = [
      {
        id: 1,
        avatar:
          'https://instagram.fyyc3-1.fna.fbcdn.net/vp/0a6b5207c3663815f7de470f8dc0b2ea/5BCE6D72/t51.2885-19/s150x150/29715700_157119024955184_6197898160455548928_n.jpg',
        name: 'Diego Schell Fernandes',
        hora: '3',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 2,
        avatar:
          'https://instagram.fyyc3-1.fna.fbcdn.net/vp/0a6b5207c3663815f7de470f8dc0b2ea/5BCE6D72/t51.2885-19/s150x150/29715700_157119024955184_6197898160455548928_n.jpg',
        name: 'Rubia Savolksi',
        hora: '10',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 3,
        avatar:
          'https://instagram.fyyc3-1.fna.fbcdn.net/vp/0a6b5207c3663815f7de470f8dc0b2ea/5BCE6D72/t51.2885-19/s150x150/29715700_157119024955184_6197898160455548928_n.jpg',
        name: 'Diego Schell Fernandes',
        hora: '20',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
      {
        id: 4,
        avatar:
          'https://instagram.fyyc3-1.fna.fbcdn.net/vp/0a6b5207c3663815f7de470f8dc0b2ea/5BCE6D72/t51.2885-19/s150x150/29715700_157119024955184_6197898160455548928_n.jpg',
        name: 'Diego Schell Fernandes',
        hora: '30',
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.",
      },
    ];

    this.setState({ posts });
  }

  handleClick = () => {
    this.setState(prevState => ({ counter: prevState.counter + 1 }));
  };

  render() {
    return (
      <Fragment>
        <Nav>
RocketBook
        </Nav>
        <article>
          <br />
          <ul className="posts">
            {this.state.posts.map(p => <Post post={p} key={p.id} />)}
          </ul>
        </article>
      </Fragment>
    );
  }
}

render(<App />, document.getElementById('app'));
