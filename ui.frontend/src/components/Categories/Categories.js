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
        return (<div className="categories-inner-div d-flex flex-nowrap justify-content-between w-100 overflow-lg-hidden overflow-auto pt-4 pb-2">
                    {children.map(
                        (item,index) => { return this.renderImageDetails(item,index)}
                    )}
                </div>
        );
    }

    renderImageDetails(item, index) {
            return (
                <div key={index} className="d-flex flex-column justify-content-center align-items-center">
                    <div className="category d-flex flex-column px-3">
                          <div className="category-img"> <img src={item.imagePath} alt="category-img" /></div>
                          <div className="category-name text-center">{item.label}</div>
                    </div>
                </div>
            );
       }

    render() {
        if(CategoriesEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div class="Categories">
            <div className="container-fluid categories-outer d-flex flex-column">

                          {this.renderCategories(this.props.categoryDetails)}

<<<<<<< HEAD
            </div>
            <div className="category-component-title d-lg-block d-none text-center">
                  Fresh Flowers & Perfect Gifts for all Occasions
                  </div>
                  <div className="category-component-subtitle d-lg-block d-none text-center">
                  3 Hour Delivery & Free Shipping in India. 38,394 Gift Ideas for your Beloved
                  </div>
=======
>>>>>>> 5a76a1103e6b00a5e546d505ccd4d053ced725c6
            </div>
            </div>
        );
    }
}

MapTo('fnp/components/categories')(Categories, CategoriesEditConfig);
