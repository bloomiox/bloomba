import { useEffect, useState } from "react";
import { Loader } from "lucide-react";

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  // Load Bitrix24 form script
  useEffect(() => {
    const container = document.getElementById("b24-form-container");
    if (container) {
      setIsLoading(true);
      
      const script = document.createElement("script");
      script.src = "https://office.bloom.ba/upload/crm/form/loader_4_dcrd8g.js?" + (Date.now()/180000|0);
      script.async = true;
      script.setAttribute("data-b24-form", "inline/4/dcrd8g");
      script.setAttribute("data-skip-moving", "true");
      
      // Handle script load events
      script.onload = () => {
        setIsLoading(false);
      };
      
      script.onerror = () => {
        setIsLoading(false);
        setHasError(true);
        console.error("Failed to load the contact form script");
      };
      
      container.appendChild(script);

      return () => {
        if (container.contains(script)) {
          container.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-xl">
      <h3 className="text-2xl font-bold text-white mb-6">Please fill out the form</h3>
      
      <div id="b24-form-container" className="w-full min-h-[400px]">
        {isLoading && (
          <div className="flex flex-col items-center justify-center h-[300px]">
            <Loader className="h-8 w-8 text-blue-400 animate-spin mb-4" />
            <p className="text-gray-300">Loading contact form...</p>
          </div>
        )}
        
        {hasError && (
          <div className="bg-red-900/50 text-red-300 p-4 rounded-lg">
            <p className="font-medium">Sorry, we couldn't load the contact form.</p>
            <p className="mt-2">Please try refreshing the page or contact us directly at hello@bloom.ba</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactForm;