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
      <div className="footer-component py-2 d-flex justify-content-center align-items-center border">
        <div className="pr-3"><img src={this.props.logoSrc}/></div>
        <div>{this.props.disclaimer}</div>
      </div>
    );
  }
}

export default MapTo('fnp/components/footer')(
  Footer,
  FooterEditConfig
);
