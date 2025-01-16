import React from 'react';

const CustomButton = ({onPress, number}) => {
    return (
        <>
            <td onClick={onPress}> 
                {number}
            </td>
        </>
    );
}

export default CustomButton;
