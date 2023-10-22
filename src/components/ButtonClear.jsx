import React from 'react'
import '../sheetstyle/ButtonClear.css'

export const ButtonClear = (props) => (
    <div className='button-clear' onClick={ props.handleClear }>
        { props.children }
    </div>
)