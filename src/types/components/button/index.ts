import colors from '@/utils/colors';
export default interface SkyButtonProps {
    type: BtnType, // Ready
    density: BtnDensity, // Ready
    size: BtnSize, // Ready
    rounded: BtnRounded, // Ready
    align: BtnAlign, // Ready
    outlined: boolean, // Ready
    color:  Colors, // Ready
    textColor: Colors, // Ready
    label: string, // Ready
    iconLeft?: string, // Ready
    iconRight?: string, // Ready
    block: boolean // Ready
    icon?: string, // Ready
    loading: boolean, // Ready
    disabled: boolean // Ready
}

// HOVER, FOCUS

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


