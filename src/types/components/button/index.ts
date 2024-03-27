import colors from '@/utils/colors';
export interface SkyButtonProps {
    type: BtnType, //
    density: BtnDensity,
    size: BtnSize, //
    rounded: BtnRounded, //
    align: BtnAlign, //
    outlined: boolean, //
    loading: boolean,
    color:  Colors, //
    textColor: Colors, //
    label: string, //
    icon?: string,
    iconLeft?: string,
    iconRight?: string,
    disabled?: boolean
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
    | "normal";

type BtnRounded =
    | "0"
    | "sm"
    | "normal"
    | "lg"
    | "xl"
    | "pill"
    | "circle";

type BtnAlign =
    | "center"
    | "left"
    | "right";


