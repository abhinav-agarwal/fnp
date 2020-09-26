import { MapTo } from '@adobe/aem-react-editable-components';
import React, { Component } from 'react';
import {Link} from "react-router-dom";

require('./Title.css');

const TextEditConfig = {
  emptyLabel: 'Title',

  isEmpty: function(props) {
    return !props || !props.text || props.text.trim().length < 1;
  }
};

class Title extends Component {

  
  get textContent() {
    const CustomTag = `${this.props.type}`;
    if(this.props.linkURL) {
      return (<div>
        <Link to={this.props.linkURL} title={this.props.text} className="Title__action-link">
          <CustomTag>
            {this.props.text}
          </CustomTag>
        </Link>
      </div>);
    }
    return (<div>
      <CustomTag>
        {this.props.text}
      </CustomTag>
    </div>);
  }

  render() {
    return this.textContent;
  }
}

export default MapTo('fnp/components/title')(
  Title,
  TextEditConfig
);
