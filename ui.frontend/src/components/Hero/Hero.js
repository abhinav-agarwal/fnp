import React from 'react';
import {MapTo, Container} from '@adobe/aem-react-editable-components';
import { Carousel} from 'react-bootstrap';

require('./Hero.css');

export const HeroEditConfig = {

    emptyLabel: 'Hero',

    isEmpty: function(props) {
        return !props || !props.imageDetails || props.imageDetails.length < 1 ;
    }
};

export default class Hero extends Container<P, S> {

get containerProps() {
  console.log('abcd');
    let attrs = super.containerProps;
    attrs.className =
      (attrs.className || '') + ' page ' + (this.props.cssClassNames || '');
    return attrs;
  }

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
        if(HeroEditConfig.isEmpty(this.props)) {
            return null;
        }
        return (
                <div class="Hero">
                   
                    {this.renderImages(this.props.imageDetails)}
                    
                </div>
            
        );
    }
}

MapTo('fnp/components/hero')(Hero, HeroEditConfig);
