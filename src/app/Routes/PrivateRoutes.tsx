import { redirect, usePathname } from "next/navigation";
import { useEffect } from "react";

interface Props {
  [key: string]: any;
}

export const PrivateRoutes = (WrappedComponent: React.ComponentType<Props>) => {
  return function authenticated(props: Props) {
    const token = typeof window !== 'undefined' ? localStorage.getItem("token") : null;
    const publicRoutes = ["/register", "/chat"];
    const pathName = usePathname();

    useEffect(() => {
      if (!token && publicRoutes.includes(pathName)) {
        redirect("/");
      }
    }, [token, pathName]);

    if (!token) {
      return null;
    }

    return <WrappedComponent {...props} />;
  };
};
