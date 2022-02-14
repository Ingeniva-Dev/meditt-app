import React  from 'react';
import './Ul.css'

const Ul = (props) => {

    const ulStyles = props.style ? props.style : 'ul-container';


    return (
        <ul className={ulStyles}>
            {props.li.map((item, index) => {
            const activeClass = props.active === index && props.activeStyle;
            return (
            <li
                key={index}
                className={`${props.liStyle} ${activeClass}`}
                onClick={() => {
                    props.onClick( {...item,index})
                }}
            >{item.text}
            </li>
            )})}
        </ul>

    );
}

export default Ul
