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
        return (  <div className="trending-cards-div d-flex ">
                    {children.map(
                        (item,index) => { return this.renderImageDetails(item,index)}
                    )}
             </div>
        );
    }

    renderImageDetails(item, index) {
        return (
              <div className="trending-card col-lg-3 col-md-4 col-11 ">
                    <div className="border trending-card-outer">
                        <div className="trending-card-img  px-2 py-2">
                            <img src={item.imagePath} alt={item.imageTitle}/>
                        </div>
                        <div className="trending-card-name pt-1 text-left px-2">{item.imageTitle}</div>
                        <div className="trending-card-price text-left px-2"> {item.price}</div>
                    </div>
                </div>
        );
   }

    render() {
        if(TrendingEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div class="Trending trending-outer container-fluid d-flex flex-column pb-3 border rounded">
              {/* <div>title: ${this.props.title}</div>
              <div>ctaLabel: ${this.props.ctaLabel}</div>
              <div>{this.renderImages(this.props.items)}</div> */}
           
           <div className="trending-title">{this.props.title}</div>
               {this.renderImages(this.props.items)}
            </div>
        );
    }
}

MapTo('fnp/components/trending')(Trending, TrendingEditConfig);
