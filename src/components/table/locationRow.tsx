import LocationCell from "./locationCell";

type Props = {
    cellValues: string[]
}

export default function LocationRow({ cellValues }: Props) {
    const cells = cellValues.map((element, index) => {
        return (
            <LocationCell cellValue={element} key={index} />
        )
    });

    return (
        <tr>
            {cells}
        </tr>
    )
}