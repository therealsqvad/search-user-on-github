import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';

class Cards extends Component {
  render() {
    const { projects } = this.props;

    return (
      <div style={{ visibility: projects[0].full_name === '' ? 'hidden' : 'visible' }}>
        { projects.map(item => (
          <Card
            key={item.id + item.full_name}
            style={{
              width: '18rem', color: 'black', display: 'inline-block', margin: '5px'
            }}
          >
            <Card.Body>
              <Card.Title>
                {' '}
                <a href={item.html_url}><span>{item.full_name}</span></a>
              </Card.Title>
              <Card.Text>
                <span>
                  {'   ☆'}
                  {item.stargazers_count}
                </span>
                <span>
   👁
                  {' '}
                  {item.watchers_count}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    );
  }
}

Cards.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  projects: PropTypes.array.isRequired
};

export default Cards;
