import { MapTo,Container } from '@adobe/aem-react-editable-components';
import React from 'react';
import {Link} from "react-router-dom";

require('./Title.css');

const TextEditConfig = {
  emptyLabel: 'Title',

  isEmpty: function(props) {
    return !props || !props.text || props.text.trim().length < 1;
  }
};

class Title extends Container<P, S> {

  get containerProps() {
  console.log('abcd');
    let attrs = super.containerProps;
    attrs.className =
      (attrs.className || '') + ' page ' + (this.props.cssClassNames || '');
    return attrs;
  }
  
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
