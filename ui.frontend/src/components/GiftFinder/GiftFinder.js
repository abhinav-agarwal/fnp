import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

require('./GiftFinder.css');

export const GiftFinderEditConfig = {

    emptyLabel: 'Gift Finder',

    isEmpty: function(props) {
        return !props || !props.title || props.title.trim().length < 1;
    }
};

export default class GiftFinder extends Component {


    render() {
        if(GiftFinderEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div class="Gift-Finder">
              <div>title:{this.props.title}</div>
              <div>placeholder1:{this.props.placeholderOne}</div>
              <div>placeholder2:{this.props.placeholderTwo}</div>
              <div>cta label:{this.props.ctaLabel}</div>
            </div>
        );
    }
}

MapTo('fnp/components/giftFinder')(GiftFinder, GiftFinderEditConfig);
