import { useState } from 'react';
import utilStyles from '../../styles/utils.module.css';

const Accordion = (props) => {
    const { children } = props;
    const [show, setShow] = useState(false);
    return (
        <div className={`w-full h-fit-content max-h-[27.375rem] rounded-[4px] overflow-y-scroll pl-[1.838rem] pr-[1.577rem] mb-[1.5rem] ${utilStyles.accordionBg}`}>
            <div className={`flex flex-row h-[4.75rem]`}>
                <img src='/fourCirclesIcon.svg' className='w-[0.9375rem]' />
                <h2>Lorem Ipsum</h2>
                <button className='w-[0.449rem] ml-auto mr-0' onClick={() => setShow(!show)}>
                    <img src='/expandArrowIcon.svg' ></img>
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
