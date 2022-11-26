import React from 'react'
import './loading.css'

const Loading = () => {

    return (
        <div className='centered'>
            <div class="lds-ring">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Loading
