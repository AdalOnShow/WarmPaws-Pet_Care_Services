import { useNavigation } from "react-router";
import { RotateLoader } from "react-spinners";


const LoadingSpinner = () => {
  const navigation = useNavigation();

  if (navigation.state === "loading") {
    return (
      <div className="fixed top-20 inset-0 flex items-center justify-center bg-white/70 z-50">
        <RotateLoader />
      </div>
    );
  }

  return null;
};

export default LoadingSpinner;
