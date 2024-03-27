import colors from "@/utils/colors";

export default interface SkyIconProps {
    icon: string, //
    size: Size,
    color: Colors,
    variant: Icon
}

type Colors = typeof colors[number]

type Size =
    | "x-small"
    | "small"
    | "large"
    | "x-large"
    | "normal";

type Icon =
    | 'material-icons'
    | 'material-icons-outlined'
    | 'material-icons-sharp'
    | 'material-icons-two-tone';