import React, { useEffect, useState } from 'react'
import { GridLoader } from 'react-spinners'
    
const Loading = (loading)  => {

    return (
        <GridLoader size={15} color={'#1f4a70'} loading={loading} backgroundColor={'#306D7C'} zIndex={100} className='loading'/>
    )
}

export default Loading