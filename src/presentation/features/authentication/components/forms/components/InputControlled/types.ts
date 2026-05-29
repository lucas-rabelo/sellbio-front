import type { LucideProps } from "lucide-react";
import type { ComponentProps, ForwardRefExoticComponent, ReactNode, RefAttributes } from "react";
import { type Control, type FieldValues, type Path } from "react-hook-form";

export type InputControlledProps<T extends FieldValues> = ComponentProps<"input"> & {
  control?: Control<T>;
  name: Path<T>;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  buttonInput?: ReactNode;
}