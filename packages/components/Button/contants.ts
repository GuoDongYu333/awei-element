import type { InjectionKey } from "vue";
import type { ButtonGroupContext } from "./type";

export const buttonGroupContextKey: InjectionKey<ButtonGroupContext> = Symbol(
  "buttonGroupContextKey"
);
