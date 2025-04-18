import React, { useState } from 'react';
import DropDownBtn from './DropDownBtn';
import DropDownContent from './DropDownContent';

function DropDown({ btnText, content }) {
    const [open, setOpen] = useState(false);

    const toggleDropDown = () => {
        setOpen(open => !open);
    }

    return (
        <div className='dropdown'>
            <DropDownBtn toggle={toggleDropDown} open={open}>
                { btnText }
            </DropDownBtn>
            {
                open ?
                <DropDownContent open={open}>
                { content }
                </DropDownContent>
                :
                <></>
            }
        </div>
    )
}

export default DropDown;