import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

require('./BestSeller.css');

export const BestSellerEditConfig = {

    emptyLabel: 'BestSeller',

    isEmpty: function(props) {
        return !props || !props.items || props.items.length < 1 ;
    }
};

export default class BestSeller extends Component {

    renderImages(children) {
        if(children === null || children.length < 1 ) {
            return null;
        }
        return (<ul>
                    {children.map(
                        (item,index) => { return this.renderImageDetails(item,index)}
                    )}
                </ul>
        );
    }

    renderImageDetails(item, index) {
        return (
            <li key={index} className="some-class">
                                imagePath: ${item.imagePath}<br/>
                                imageTitle: ${item.imageTitle}

                        </li>
        );
   }

    render() {
        if(BestSellerEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div class="BestSeller">
              <div>title: ${this.props.title}</div>
              <div>ctaLabel: ${this.props.ctaLabel}</div>
              <div>{this.renderImages(this.props.items)}</div>
            </div>
        );
    }
}

MapTo('fnp/components/bestSeller')(BestSeller, BestSellerEditConfig);
