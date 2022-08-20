const List = () => {
    const items = [
        {
            id: 1,
            name: 'Inacio'
        },
        {
            id: 2,
            name: 'Raimundo'
        },
        {
            id: 3,
            name: 'Martinho'
        }
    ];

    return(
        <div>
            {items.map( (item) => (
                <p key={item.id}>
                    {item.id} - {item.name}
                </p>
            ))}
        </div>
    );
};

export default List;