import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { label, icon, color, backgroundColor, type = 'button', className='' } = this.props;
        return (
            <button className={`button-container ${className}`} style={{ backgroundColor }} type={type}>
                <p className="button-label" style={{ color }}>{label}</p>
                <FontAwesomeIcon icon={icon} color={color} />
            </button>
        );
    }
}