import colors from "../../../utils/colors";

export default interface SkyCheckboxProps {
    color: Colors,
    label: string,
    disabled: boolean,
    icon?: string,
    value: string,
    density: CheckboxDensity,
    indeterminate: boolean,
    indeterminateIcon: string
}

type Colors = typeof colors[number]

type CheckboxDensity =
    | "default"
    | "comfortable"
    | "compact";