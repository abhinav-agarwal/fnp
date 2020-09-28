import { MapTo } from '@adobe/aem-react-editable-components';
import React, { Component } from 'react';

require('./Footer.css');

const FooterEditConfig = {
  emptyLabel: 'Footer',

  isEmpty: function(props) {
    return !props || !props.logoSrc || props.logoSrc.trim().length < 1;
  }
};

class Footer extends Component {
  render() {
    if(FooterEditConfig.isEmpty(this.props)) {
        return null;
    }
    return(
      <div className="footer-component py-4 d-flex justify-content-center align-items-center">
        <div className="pl-3">{this.props.logoSrc}</div>
        <div>{this.props.disclaimer}</div>
      </div>
    );
  }
}

export default MapTo('fnp/components/footer')(
  Footer,
  FooterEditConfig
);
