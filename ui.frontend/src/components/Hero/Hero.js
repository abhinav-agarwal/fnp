import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';
import { Carousel} from 'react-bootstrap';

require('./Hero.css');

export const HeroEditConfig = {

    emptyLabel: 'Hero',

    isEmpty: function(props) {
        console.log('Hero - isEmpty');
        return !props || !props.imageDetails || props.imageDetails.length < 1 ;
    }
};

export default class Hero extends Component {

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
                                <Carousel.Item>
                                <img className="d-block w-100" src="${item.imagePath}" alt="${item.altText}"/>
                                </Carousel.Item>
            </li>
        );
   }

    render() {
        console.log('Hero - render');
        if(HeroEditConfig.isEmpty(this.props)) {
            return null;
        }
        return (
                <div class="Hero">
                    <Carousel>
                    {this.renderImages(this.props.imageDetails)}
                    </Carousel>
                </div>
            
        );
    }
}

MapTo('fnp/components/hero')(Hero, HeroEditConfig);
