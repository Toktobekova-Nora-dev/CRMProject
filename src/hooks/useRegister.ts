import { useRegisterMutation } from "@/store/api/auth/authApi";

export const useRegister = () => {
  const [postRegister, { data, isLoading, error }] = useRegisterMutation();

  const registerUser = async (formData: any) => {
    try {
      const result = await postRegister(formData);
      return { result };
    } catch (error: any) {
      console.error(
        "Registration failed:",
        error?.data || error?.message || error
      );
    }
  };

  return {
    registerUser,
    data,
    isLoading,
    error,
  };
};
