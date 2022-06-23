import utilStyles from '../../styles/utils.module.css';

const Card = (props) => {
    const { description, title, percent } = props;
    return (
            <div className={`${utilStyles.font_13_23} text-center hover:border-[#FC364C 1px solid]`}>
                <p>{description}</p>
                <h1 className={`${utilStyles.font_16_800}`}>{title}</h1>
                <p>{percent}</p>
            </div>
    )
}

const CardsHolder = () => {
    const cards = [
        {ind: 1, description: 'Accessories & Ears', title: 'Lorem Ipsum', percent: '9%'},
        {ind: 2, description: 'Arms', title: 'Lorem Ipsum', percent: '15%'},
        {ind: 3, description: 'Eye', title: 'Lorem Ipsum', percent: '32%'},
        {ind: 4, description: 'Glasses', title: 'Lorem Ipsum', percent: '3%'},
        {ind: 5, description: 'Head', title: 'Lorem Ipsum', percent: '92%'},
        {ind: 6, description: 'Legs & Clothes', title: 'Lorem Ipsum', percent: '2%'},
        {ind: 7, description: 'Glasses', title: 'Lorem Ipsum', percent: '3%'},
        {ind: 8, description: 'Head', title: 'Lorem Ipsum', percent: '92%'},
        {ind: 9, description: 'Legs & Clothes', title: 'Lorem Ipsum', percent: '2%'},
        {ind: 7, description: 'Glasses', title: 'Lorem Ipsum', percent: '3%'},
        {ind: 8, description: 'Head', title: 'Lorem Ipsum', percent: '92%'},
        {ind: 9, description: 'Legs & Clothes', title: 'Lorem Ipsum', percent: '2%'},
    ]

    return (
        <ul className={`list-none flex flex-wrap mb-[2.375rem] text-[13px] h-[19.8125rem] overflow-y-scroll ${utilStyles.scrolable} ${utilStyles.card}`}>
            {
                cards.map(card => {
                    return <li key={card.ind} className="w-[30.76%] pt-[0.9375rem] pb-[0.9375rem] pl-[1.55rem] pr-[1.55rem] bg-[#0D0D0D] mr-[1.56%] mb-[0.625rem]"><Card
                        description={card.description}
                        title={card.title}
                        percent={card.percent}
                    /></li>
                })
            }
        </ul>
    )
}

export default CardsHolder;