import '../sheetstyle/Button.css'

export function Button(props) {

    const esOperador = value => {
        return isNaN(value) && (value !== '.') && (value !== '=')
    }

    if(esOperador(props.children)) {
        return (
            <button 
            className='button-container operator' 
                onClick={ () => props.handleClic(props.children) }>
                { props.children }
            </button>
        )
    } else {
        return (
            <button 
            className='button-container' 
                onClick={ () => props.handleClic(props.children) }>
                { props.children }
            </button>
        )
    }

  
    
}

 