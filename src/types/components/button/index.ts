import colors from '@/utils/colors';
export interface SkyButtonProps {
    type: BtnType,
    density: BtnDensity,
    size: BtnSize,
    rounded: BtnRounded,
    align: BtnAlign,
    outlined: boolean,
    loading: boolean,
    color:  Colors,
    textColor?: string,
    label: string,
    icon?: string,
    iconLeft?: string,
    iconRight?: string,
}

type Colors = typeof colors[number]

type BtnType =
    | "button"
    | "submit"
    | "reset";

type BtnDensity =
    | "default"
    | "compact"
    | "comfortable";

type BtnSize =
    | "x-small"
    | "small"
    | "large"
    | "x-large"
    | "regular";

type BtnRounded =
    | "0"
    | "xs"
    | "sm"
    | "x-large"
    | "lg"
    | "xl";

type BtnAlign =
    | "center"
    | "left"
    | "right";


