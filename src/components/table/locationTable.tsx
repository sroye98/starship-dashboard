import LocationHead from "./locationHead";
import LocationRow from "./locationRow";

type Props = {
    headerColumns: string[],
    rowValues: string[][]
}

export default function LocationTable({ headerColumns, rowValues } : Props) {
    const rows = rowValues.map(element => {
        return (
            <LocationRow cellValues={element} key={rowValues.indexOf(element)} />
        )
    });

    return (
        <table>
            <LocationHead headerValues={headerColumns}  />
            {rows}
        </table>
    )
}