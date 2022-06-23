import { useState } from 'react';
import Image from 'next/image';
import utilStyles from '../../styles/utils.module.css';

const Accordion = (props) => {
    const { children, spacings, info } = props;
    const [show, setShow] = useState(false);
    return (
        <div className={`w-full h-fit-content max-h-[27.375rem] rounded-[4px] pl-[1.838rem] pr-[1.5rem] mb-[1.5rem] ${show && spacings} bg-[rgba(13,13,13,0.5)]`}>
            <div className={`flex flex-row items-center h-[4.75rem]`}>
                <div className='relative flex items-center w-[0.863125rem] h-[0.84125rem]'><Image src='/fourCirclesIcon.svg' layout='fill' alt='fourCirclesIcon' /></div>
                <h2 className={`flex items-center ml-[0.61rem] ${utilStyles.font_16_800}`}>Lorem Ipsum</h2>
                { info && <button className='relative w-[0.78125rem] h-[0.78125rem] ml-[0.3906rem]'><Image src='/questionIcon.svg' layout="fill" alt='questionIcon' /></button> }
                <button className='relative w-[0.449rem] h-[0.449rem] ml-auto mr-0' onClick={() => setShow(!show)}>
                    <Image src='/expandArrowIcon.svg' layout='fill' alt='expandArrowIcon' />
                </button>
            </div>
            {
                show && 
                <div>
                    {children}
                </div>
            }
        </div>
    )
}

export default Accordion;
