type Props = {
    cellValue: string
}

export default function LocationCell({ cellValue } : Props) {
    return (
        <td>{cellValue}</td>
    )
}