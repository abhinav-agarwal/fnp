import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

require('./GiftFinder.css');

export const GiftFinderEditConfig = {

    emptyLabel: 'Gift Finder',

    isEmpty: function(props) {
        return !props || !props.title || props.title.trim().length < 1;
    }
};

export default class GiftFinder extends Component {


    render() {
        if(GiftFinderEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            // <div class="Gift-Finder">
            //   <div>title:{this.props.title}</div>
            //   <div>placeholder1:{this.props.placeholderOne}</div>
            //   <div>placeholder2:{this.props.placeholderTwo}</div>
            //   <div>cta label:{this.props.ctaLabel}</div>
            // </div>
            <div className="Gift-Finder">

            <div className="container finder-container">
                <form>
                <div className="row justify-content-center">
                    <div className="col-lg-1 col-12 px-2 mb-2 finder-label d-flex align-items-center justify-content-center">
                    {this.props.title}
                    </div>
                    <div className="col-lg-3 col-6 px-2 d-flex align-items-center justify-content-center mb-2">
                    <input className="w-100 py-lg-2 py-0 " placeholder={this.props.placeholderOne}/>
                    </div>
                    <div className="col-lg-3 col-6 px-2 d-flex align-items-center justify-content-center mb-2">
                    <input className="w-100 py-lg-2 py-0 " placeholder={this.props.placeholderTwo}/>
                    </div>
                    <div className="col-lg-3 col-12 px-2 d-flex align-items-center justify-content-center mb-2">
                    <input className="w-100 py-lg-2 py-0 btn-success border-0 rounded" type="submit" value={this.props.ctaLabel} />
                    </div>
                </div>
                </form>
            </div>
        </div>
        );
    }
}

MapTo('fnp/components/giftFinder')(GiftFinder, GiftFinderEditConfig);
