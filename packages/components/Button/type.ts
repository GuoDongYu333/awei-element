import type { Component, Ref } from "vue";

export type ButtonType =
  | "primary"
  | "success"
  | "warning"
  | "danger"
  | "info"
  | "text";

export type NativeType = "button" | "submit" | "reset";

export type ButtonSize = "large" | "default" | "small";

export interface ButtonProps {
  tag?: string | Component;
  type?: ButtonType;
  size?: ButtonSize;
  nativeType?: NativeType;
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  loadingIcon?: string;
  round?: boolean;
  circle?: boolean;
  plain?: boolean;
  autofocus?: boolean;
  useThrottle?: boolean;
  throttleDuration?: number;
}

export interface ButtonGroupProps {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

export interface ButtonGroupContext {
  size?: ButtonSize;
  type?: ButtonType;
  disabled?: boolean;
}

export interface ButtonEmits {
  (e: "click", val: MouseEvent): void;
}

export interface ButtonInStance {
  ref: Ref<HTMLButtonElement | void>;
}
