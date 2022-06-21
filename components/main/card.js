const Card = (props) => {
    const { description, title, percent } = props;
    return (
            <div className="text-[#8E8B8F] text-center">
                <p>{description}</p>
                <h1>{title}</h1>
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
        {ind: 9, description: 'Legs & Clothes', title: 'Lorem Ipsum', percent: '2%'}
    ]

    return (
        <ul className="list-none flex flex-wrap">
            {
                cards.map(card => {
                    return <li key={card.ind} className="w-[30.76%] p-[0.9375rem 1.625rem] bg-[#0D0D0D] mr-[1.56%] mb-[0.625rem]"><Card
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