import utilStyles from '../../styles/utils.module.css';
import Accordion from './acordion';
import Article from './article';
import CardsHolder from './card';

const MainSection = () => {
    const caroselList = [
        {ind: 1, src: '/analyticIcon.svg', text: 'Lorem Ipsum'},
        {ind: 2, src: '/fourCirclesIcon.svg', text: 'Lorem Ipsum'},
        {ind: 3, src: '/upArrowIcon.svg', text: 'Lorem Ipsum'},
    ]
    return (
        <>  
            <div className='invisible relative flex flex-column items-center justify-center lg:visible h-[25rem] mt-[-1.25rem]'>
                <div className={`absolute flex flex-column items-center justify-center min-w-[1750px] h-[25rem] ${utilStyles.subHeaderBg}`}>
                    {/* <img src="/subHeaderMaskImg.svg" className="w-full h-[16.625rem]"/> */}
                    <img src="/ellipse.svg" className="absolute bottom-[0.8125rem]" />
                </div>
            </div>
            
            <div className='text-center mt-[0.8125rem] mb-[3.75rem]'>
                <h1 className={`h-[3.8125rem] mb-[0.375rem] ${utilStyles.fontTitle}`}>Lorem Ipsum</h1>
                <p className={`h-[2.5rem] ${utilStyles.font_16_20}`}>Created by Lorem Ipsum</p>
                <p className={`h-[2rem] ${utilStyles.font_16_400}`}>sed ut percpiciates unde omnis uste natus error sit voluptatem</p>
            </div>
            <ul className={`flex flex-row justify-center ${utilStyles.font_15_20} text-[#F7F7F7]`}>
               {
                caroselList.map(carosel => {
                    return <li className={`flex flex-row w-[12.78%] h-[3.125rem] ml-[0.625rem] mr-[0.625rem] rounded-[5px] ${utilStyles.caroselBg}`}>
                        <img src={carosel.src} key={carosel.ind} className='w-[0.9375rem] ml-[2.125rem]' />
                        <p className='flex items-center ml-[0.375rem]'>{carosel.text}</p>
                    </li>
                })
               }     
            </ul>
            <div className='lg:grid grid-cols-2 gap-[1.32%] mt-[4.5625rem]'>
                <div className='w-full md:w-[82.1%] lg:ml-auto lg:mr-0'>
                    <Accordion>
                        <Article />
                    </Accordion>
                </div>
                <div className='w-full md:w-[82.1%]'>
                    <Accordion>
                        <CardsHolder />
                    </Accordion>
                    <Accordion>
                        <CardsHolder />
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default MainSection;