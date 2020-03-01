import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IIconProps {
    icon: any
}
const Icon = ({icon}: IIconProps) =>{
    return(
        <FontAwesomeIcon icon={icon} />
    )
}

export default Icon;