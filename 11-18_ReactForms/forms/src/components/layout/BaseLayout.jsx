
import React from 'react'
import Header from './Header';

function BaseLayout(props) {
    return (
        <>
            <Header /> <br /><br />
            {props.children}
            <br /><br />
            Footer Info
        </>
    )
}

export default BaseLayout
