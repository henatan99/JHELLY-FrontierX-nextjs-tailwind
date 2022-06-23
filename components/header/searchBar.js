import utilStyles from '../../styles/utils.module.css';

const SearchBar = () => {
    return (
        <div className={`flex ${utilStyles.searchBg} w-[80%] ml-[10%] lg:ml-0 lg:w-[45.625%] h-[2rem] md:h-[2.8rem] absolute lg:left-[32.5%] lg:top-[1.625rem] bottom-[1.2rem]`}>
            <div className="flex flex-row items-center relative w-full">
                <div className="flex items-center absolute left-[1.234rem]">
                    <img src="/search.svg" className="w-[1.11rem]" />
                </div>
                <input
                    type="text"
                    placeholder="Lorem Ipsum"
                    className={`block bg-inherit absolute left-[3.56rem] lg:top-[0.9rem] min-w-[15.1875rem] w-[70%] h-[1.012rem] ${utilStyles.font_13_18} focus:outline-none `}
                />
            </div>
        </div>
    )
}

export default SearchBar;
