
export function Button(props) {

    const esOperador = value => {
        return isNaN(value) && (value !== '.') && (value !== '=')
    }

    if(esOperador(props.children)) {
        return (
            <button 
                onClick={ () => props.handleClic(props.children) }
                >
                
                { props.children }
            
            </button>
        )
    } else {
        return (
            <button 
            className='absolute -rotate-45' 
                onClick={ () => props.handleClic(props.children) }>
                { props.children }
            </button>
        )
    } 
    
}

 