import utilStyles from '../../styles/utils.module.css';
import Splitter from "./splitter";

const MainSection = () => {
    return (
        <>
            <div className={`invisible flex flex-column items-center justify-center relative lg:visible min-w-[1750px] h-[25rem] mt-[-1.25rem] ${utilStyles.subHeaderBg}`}>
                {/* <img src="/subHeaderMaskImg.svg" className="w-full h-[16.625rem]"/>
                <img src="/ellipse.svg" className="absolute bottom-[0.8125rem]" /> */}
            </div>
            <div className='text-center mt-[0.8125rem] mb-[3.75rem]'>
                <h1 className='h-[3.8125rem] mb-[0.375rem]'>Lorem Ipsum</h1>
                <p className='h-[2.5rem]'>Created by Lorem Ipsum</p>
                <p className='h-[2rem]'>sed ut percpiciates unde omnis uste natus error sit voluptatem</p>
            </div>
            <ul className='flex flex-row justify-center'>
               <li className={`flex flex-row w-[12.78%] h-[3.125rem] ml-[0.625rem] mr-[0.625rem] rounded-[5px] ${utilStyles.caroselBg}`}>
                    <img src='/analyticIcon.svg'/>
                    Lorem Ipsum
               </li>
               <li className={`flex flex-row w-[12.78%] h-[3.125rem] ml-[0.625rem] mr-[0.625rem] rounded-[5px] ${utilStyles.caroselDarkBg}`}>
                    <img src='/fourCirclesIcon.svg'/>
                    Lorem Ipsum
               </li>   
               <li className={`flex flex-row w-[12.78%] h-[3.125rem] ml-[0.625rem] mr-[0.625rem] rounded-[5px] ${utilStyles.caroselBg}`}>
                    <img src='/upArrowIcon.svg'/>
                    Lorem Ipsum
               </li>        
            </ul>
            <Splitter />
        </>
    )
}

export default MainSection;