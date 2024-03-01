export interface SkyButtonProps {
    type: BtnType ,
    outlined?: Outlined,
    color?: string,
    textColor?: string,
    label?: string,
    icon?: string,
    iconLeft?: string,
    iconRight?: string,
    align?: string,
    size?: string,
    padding?: string,
    rounded?: boolean,
    loading?: boolean
}


export type BtnType =
    | "button"
    | "submit"
    | "reset";

enum Outlined {
    true,
    false,
}

