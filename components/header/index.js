import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import utilStyles from '../../styles/utils.module.css';
import SearchBar from "./searchBar";

const Header = () => {
    const list = [{ind: 1, text: 'Lorem'}, {ind: 2, text: 'Lorem'}, {ind: 3, text: 'Lorem'}]
    return (
        <div className={`relative bg-[#0D0D0D] h-[8rem] lg:h-[6rem]`}>
            <div className="p-0 w-[13.54%] h-[1.4375rem] min-w-[6rem] absolute  left-[2.78%] top-[1.75rem] lg:top-[2.375rem] ">
               <Image src="/logo.svg" layout="fill" /> 
            </div>
            <SearchBar />
            <ul className={`flex flex-row justify-between absolute right-[2.9%] left-[70%] lg:left-[81%] top-[1.75rem] lg:top-[2.375rem] ${utilStyles.psText}`}>
                {list && list.map((item) => {
                    return <li className={`${utilStyles.font_15_20} text-[#FFFFFF]`} key={item.ind}><Link href="/"><a>{item.text}</a></Link></li>
                })}
            </ul>
            <span className={`block w-full h-[0.375rem] absolute bottom-[-0.1875rem] ${utilStyles.headerBar}`} />
        </div>
    )
}

export default Header;