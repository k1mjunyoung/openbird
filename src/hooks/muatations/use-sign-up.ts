import { signUp } from "@/api/auth";
import type { useMutationCallbacks } from "@/types";
import { useMutation } from "@tanstack/react-query";

export function useSignUp(callbacks?: useMutationCallbacks) {
  return useMutation({
    mutationFn: signUp,
    onError: (error) => {
      if (callbacks?.onError) callbacks.onError(error);
    },
  });
}
