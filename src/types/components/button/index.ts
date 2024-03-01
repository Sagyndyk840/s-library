export interface SkyButtonProps {
    type: BtnType,
    density: BtnDensity,
    size: BtnSize,
    rounded: BtnRounded,
    outlined?: string,
    color?: string,
    textColor?: string,
    label?: string,
    icon?: string,
    iconLeft?: string,
    iconRight?: string,
    align?: string,
    padding?: string,
    loading?: boolean
}


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


