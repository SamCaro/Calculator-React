import React from 'react'

export const ButtonClear = (props) => (
    <div onClick={ props.handleClear }>
        { props.children }
    </div>
)