import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

require('./Categories.css');

export const CategoriesEditConfig = {

    emptyLabel: 'Categories',

    isEmpty: function(props) {
        return !props || !props.categoryDetails || props.categoryDetails.length < 1 ;
    }
};

export default class Categories extends Component {

    renderCategories(children) {
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
                                    label: ${item.label}

                            </li>
            );
       }

    render() {
        if(CategoriesEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div class="Categories">
              <div>{this.renderCategories(this.props.categoryDetails)}</div>
            </div>
        );
    }
}

MapTo('fnp/components/categories')(Categories, CategoriesEditConfig);
