import type { LucideProps } from "lucide-react";
import type {
  ComponentProps,
  ForwardRefExoticComponent,
  ReactNode,
  RefAttributes
} from "react";
import type { Control, FieldValues, Path } from "react-hook-form";

export type DatePickerControlledProps<T extends FieldValues> = ComponentProps<"input"> & {
  control?: Control<T>;
  name: Path<T>;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  buttonInput?: ReactNode;
}
