type Props = {
    columnNames: string[]
}

export default function LocationHead({ columnNames } : Props) {
    const columns = columnNames.map((element, index) => {
        return (
            <tr key={index}>{element}</tr>
        )
    });

    return (
        <thead>
            {columns}
        </thead>
    )
}