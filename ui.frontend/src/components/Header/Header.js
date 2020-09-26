import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

require('./Header.css');

export const HeaderEditConfig = {

    emptyLabel: 'Header',

    isEmpty: function(props) {
        return !props || !props.imageSrc || props.imageSrc.trim().length < 1 ;
    }
};

export default class Header extends Component {

    renderIcons(children) {
        if(children === null || children.length < 1 ) {
            return null;
        }
        return (<ul>
                    {children.map(
                        (item,index) => { return this.renderNavItem(item,index)}
                    )}
                </ul>
        );
    }

    renderNavItem(item, index) {
        return (
            <li key={index} className="some-class">
                                icon class: ${item.iconClass}<br/>
                                icon label: ${item.iconLabel}

                        </li>
        );
   }

    render() {
        if(HeaderEditConfig.isEmpty(this.props)) {
            return null;
        }

        return (
            <div class="Header">
                <img src={this.props.imageSrc} class="Header__src"/>
                <div>cat label: ${this.props.ctalabel}</div>
                <div>searchButtonText: ${this.props.searchButtonText}</div>
                <div>searchButtonText: ${this.props.searchButtonText}</div>
                <div>{this.renderIcons(this.props.iconDetails)}</div>
            </div>
        );
    }
}

MapTo('fnp/components/header')(Header, HeaderEditConfig);
