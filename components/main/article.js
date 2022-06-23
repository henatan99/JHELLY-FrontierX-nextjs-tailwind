import utilStyles from '../../styles/utils.module.css';

const Article = () => {
    const links = [
        {ind: 1, url: '/diagArrowIcon.svg', text: 'Lorem ipsum.com'},
        {ind: 2, url: '/joyStickIcon.svg', text: '@Lorem ipsum', extra: {url: '/joyStickEye.svg'}},
        {ind: 3, url: '/instagramIcon.svg', text: '@Lorem ipsum'},
        {ind: 4, url: '/twitterIcon.svg', text: '@Lorem ipsum', extra: {color: '#FFFFFF'}}
    ]
    return (
        <div className="text-[#8E8B8F] w-[87.8%] pb-[2.06rem]">
            <p className={`mb-[2.625rem] ${utilStyles.font_14_19} text-[#FFFFFF]`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
            laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
            in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <ul className={`text-sm flex flex-wrap ${utilStyles.font_14_19} text-[#FC364C]`}>
                {
                    links.map(link => {
                        return<li key={link.ind} className="flex flex-row h-[1.5rem] mb-[1.25rem]">
                            <div className="relative w-[1.4625rem]">
                                <img src={link.url}/>
                                {
                                    link.extra?.url && 
                                    <>
                                        <img src={link.extra.url} className="absolute top-[0.48rem] left-[0.365rem] w-[0.24375rem]" />
                                        <img src={link.extra.url} className="absolute top-[0.48rem] right-[0.365rem] w-[0.24375rem]" />
                                    </>
                                }
                            </div>
                            <p className={`w-[10.25rem] ml-[0.975rem] ${link.extra?.color && `text-[${link.extra.color}]`}`}>{link.text}</p>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Article;