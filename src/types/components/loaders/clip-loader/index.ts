import colors from "@/utils/colors";

export default interface SkyLoaderProps {
    loading: boolean,
    color: Colors,
    size: Size,
    radius: string
}

type Colors = typeof colors[number]

type Size =
    | "x-small"
    | "small"
    | "large"
    | "x-large"
    | "normal";