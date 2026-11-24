import React from 'react'

function Button() {
    return (
        <div>
            <button type='button' onClick={() => alert('Button clicked!')}
                className="border-style: solid;border-blue-500 border-2 rounded-md px-4 py-2 bg-blue-500 text-white hover:bg-blue-600">
                Submit</button>
           
        </div>
    )
}

export default Button