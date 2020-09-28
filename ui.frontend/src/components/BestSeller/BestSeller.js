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
        return (<div className="bestseller-cards-div d-flex ">
                    {children.map(
                        (item,index) => { return this.renderImageDetails(item,index)}
                    )}
                </div>
        );
    }

    renderImageDetails(item, index) {
        return (
            <div className="bestseller-card col-lg-3 col-md-4 col-11 ">
              <div className="border bestseller-card-outer">
                <div className="bestseller-card-img  px-2 py-2">
                    <img src={item.imagePath} alt={item.imageTitle}/>
                </div>
                <div className="bestseller-card-name pt-1 text-left px-2">{item.imageTitle}</div>
              </div>
            </div>
        );
   }

    render() {
        if(BestSellerEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div class="BestSeller bestseller-outer container-fluid d-flex flex-column pb-3 border rounded">
                <div className="bestseller-title">
                    {this.props.title}
                </div>
                {this.renderImages(this.props.items)}
            </div>
        );
    }
}

MapTo('fnp/components/bestSeller')(BestSeller, BestSellerEditConfig);
