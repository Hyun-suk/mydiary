import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import moment from 'moment';
import CircularProgress from 'material-ui/CircularProgress';
import Divider from 'material-ui/Divider';
import { List, ListItem } from 'material-ui/List';

class PostList extends Component {

  render() {

    return (
      <div>
        <List key={index}>
          <Link
            to={`/posts/${id}/${slug}`}
            style={{ textDecoration: 'none' }}
          >
            <ListItem>
              <article style={{ lineHeight: 1.35 }}>
                <h2>
                  <strong>{title}</strong>
                </h2>
                <p>{truncate(summary, TRUNCATION_LIMIT)}&hellip;</p>
                <div style={{ textAlign: 'right' }}>
                  <time dateTime={date}>{moment(date).fromNow()}</time>
                </div>
              </article>
            </ListItem>
          </Link>
          <Divider />
        </List>
        
        <div style={{ textAlign: 'center' }}>
          <CircularProgress size={80} thickness={6} />
        </div>
        <br />
      </div>
    );
  }
}
