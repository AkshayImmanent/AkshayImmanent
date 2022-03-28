import { useEffect } from "react";

export const useScript = (url: string) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = url;
        script.async = true;
        script.id = url;
        document.body.appendChild(script);

        return () => {
            // const scriptElement = document.getElementById(url) as HTMLScriptElement;
            document.body.removeChild(script);
        }
    }, [url])
}