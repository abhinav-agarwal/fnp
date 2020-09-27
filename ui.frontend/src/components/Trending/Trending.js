import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

require('./Trending.css');

export const TrendingEditConfig = {

    emptyLabel: 'Trending',

    isEmpty: function(props) {
        return !props || !props.items || props.items.length < 1 ;
    }
};

export default class Trending extends Component {

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
                                imageTitle: ${item.imageTitle}<br/>
                                price: ${item.price}

                        </li>
        );
   }

    render() {
        if(TrendingEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div class="Trending">
              <div>title: ${this.props.title}</div>
              <div>ctaLabel: ${this.props.ctaLabel}</div>
              <div>{this.renderImages(this.props.items)}</div>
            </div>
        );
    }
}

MapTo('fnp/components/trending')(Trending, TrendingEditConfig);
