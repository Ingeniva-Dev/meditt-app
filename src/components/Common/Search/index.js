import React from "react";
import styles from './search.module.css';
import Input from "../../UI/Input";
import searchIcon from "../../../assets/Images/searchIcon.svg";

export default ({main, placeholder, id}) => {


    const imgStyle = main && styles['main-search-icon'];
    const inputStyle = main && styles['main-search-input'];

    return (
        <Input
            className={styles['search-input-container']}
            img={{
                src: searchIcon,
                alt: 'Search Icon',
                className: `${styles['default-search-icon']} ${imgStyle}`,
            }}
            input={{
                type: 'search',
                placeholder: placeholder || 'Search',
                className: `${styles['default-search-input']} ${inputStyle}`,
                id: `${id || 'input-label-id'}`,
            }}
        />
    )
}