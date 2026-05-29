import { toast } from "sonner";

export function useToast() {
  function success(message: string) {
    toast.success(message);
  }

  function error(message: string) {
    toast.error(message);
  }

  function warning(message: string) {
    toast.warning(message);
  }

  function info(message: string) {
    toast.info(message);
  }

  function loading(message: string) {
    return toast.loading(message);
  }

  function dismiss(id?: string | number) {
    toast.dismiss(id);
  }

  return {
    success,
    error,
    warning,
    info,
    loading,
    dismiss,
  };
}