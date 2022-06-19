import Head from "next/head";
import utilStyles from '../../styles/utils.module.css';
import SearchBar from "./searchBar";

const Header = () => {
    const list = [{ind: 1, text: 'Lorem'}, {ind: 2, text: 'Lorem'}, {ind: 3, text: 'Lorem'}]
    return (
        <div className={`relative ${utilStyles.blackBg} h-[4rem] md:h-[5rem] lg:h-[6rem]`}>
            <div className="p-0 w-[13.54%] min-w-[6rem] absolute  left-[2.78%] top-[0.75rem] lg:top-[2.375rem] ">
               <img src="/logo.svg" /> 
            </div>
            <SearchBar />
            <ul className={`flex flex-row justify-between absolute right-[2.9%] left-[50%] md:left-[60%] lg:left-[81%] top-[0.5rem] lg:top-[2.375rem] ${utilStyles.psText}`}>
                {list && list.map((item) => {
                    return <li className={`${utilStyles.whity}`} key={item.ind}>{item.text}</li>
                })}
            </ul>
            <span className={`block w-full h-[6px] absolute bottom-[-3px] ${utilStyles.headerBar}`} />
        </div>
    )
}

export default Header;