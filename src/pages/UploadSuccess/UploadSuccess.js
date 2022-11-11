import "./UploadSuccess.scss";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UploadSuccess = () => {
  // Navingating to the main page after 2.5 seconds
  const navigate = useNavigate();

  // We need a useEffect here because we only wanna run the setTimeout once on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2500);
    // We need to clear timeout so prevent memory leaks
    // https://felixgerschau.com/react-hooks-settimeout/
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="success-page__wrapper">
      <h1 className="success-page__title">Congratulations!</h1>
      <h3 className="success-page__sub-title">
        You've successfully uploaded a video.
      </h3>
      <h4>Please wait to be redirected.</h4>
    </div>
  );
};

export default UploadSuccess;
