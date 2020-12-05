import React, {useEffect, useRef} from 'react'

function FocusInput() {

    const inputRef = useRef(null)

    useEffect(() => {
    
     inputRef.current.focus()        
      // focus the input element        
    }, [])
    return (
        <div>
            <input ref = {inputRef} type= 'text'></input>
            
        </div>
    )
}

export default FocusInput
