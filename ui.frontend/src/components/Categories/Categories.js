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
                    <div className="category d-flex flex-column px-3">
                          <div className="category-img"> <img src={item.imagePath} alt="category-img" /></div>
                          <div className="category-name">{item.label}</div>
                    </div>
                </li>
            );
       }

    render() {
        if(CategoriesEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div class="Categories">
            <div className="container-fluid categories-outer d-flex flex-column">
            <div className="categories-inner-div d-flex flex-nowrap justify-content-between w-100 overflow-lg-hidden overflow-auto pt-4 pb-2">
                          {this.renderCategories(this.props.categoryDetails)}
            </div>
            </div>
            </div>
        );
    }
}

MapTo('fnp/components/categories')(Categories, CategoriesEditConfig);
