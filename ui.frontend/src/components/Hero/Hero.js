import React from 'react';

import {withComponentMappingContext, Container, MapTo} from '@adobe/aem-react-editable-components';
import { Carousel} from 'react-bootstrap';

require('./Hero.css');

export const HeroEditConfig = {

    emptyLabel: 'Hero',

    isBlank: function(props) {
        return !props || !props.imageDetails || props.imageDetails.length < 1 ;
    },

    isEmpty: function(props) {
            return !props || !props.cqItemsOrder || props.cqItemsOrder.length === 0;
        }
};


export default class Hero extends Container<M, S> {

    renderImages(children) {
        if(children === null || children.length < 1 ) {
            return null;
        }
        return ( <Carousel>
                    {children.map(
                        (item,index) => { return this.renderImageDetails(item,index)}
                    )}
              </Carousel>
        );
    }

    renderImageDetails(item, index) {
        return (
           
                                <Carousel.Item>
                                <img className="d-block w-100" src={item.imagePath} alt={item.altText}/>
                                </Carousel.Item>
         
        );
   }

    render() {
        if(HeroEditConfig.isBlank(this.props)) {
            return null;
        }
        return (
                <div class="Hero">
                    {this.renderImages(this.props.imageDetails)}
                    { super.childComponents }
                </div>
            
        );
    }
}

MapTo('fnp/components/hero')(withComponentMappingContext(Hero), HeroEditConfig);
