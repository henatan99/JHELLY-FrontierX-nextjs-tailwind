import utilStyles from '../../styles/utils.module.css';

// const SearchBar = () => {
//     return (
//         <div className={`flex ${utilStyles.searchBg} w-full lg:w-[45.625%] h-[2rem] md:h-[2.8rem] absolute lg:left-[32.5%] lg:top-[1.625rem] bottom-0`}>
//             <div className="relative w-full">
//                 <div className="flex absolute left-[1.234rem] top-[0.859rem]">
//                     <img src="/search.svg" className="w-[1.11rem]" />
//                 </div>
//                 <input
//                     type="text"
//                     placeholder="Lorem Ipsum"
//                     className={`block bg-inherit absolute left-[3.56rem] top-[0.9rem] w-[15.1875rem] h-[1.012rem] ${utilStyles.searchTextColor}`}
//                 />
//             </div>
//         </div>
//     )
// }

const SearchBar = () => {
    return (
        <div className={`flex ${utilStyles.searchBg} w-full lg:w-[45.625%] h-[2rem] md:h-[2.8rem] absolute lg:left-[32.5%] lg:top-[1.625rem] bottom-0`}>
            <div className="flex flex-row items-center relative w-full">
                <div className="flex items-center absolute left-[1.234rem]">
                    <img src="/search.svg" className="w-[1.11rem]" />
                </div>
                <input
                    type="text"
                    placeholder="Lorem Ipsum"
                    className={`block bg-inherit absolute left-[3.56rem] lg:top-[0.9rem] w-[15.1875rem] h-[1.012rem] ${utilStyles.searchTextColor} focus:outline-none `}
                />
            </div>
        </div>
    )
}

export default SearchBar;
