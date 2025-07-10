import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to DevsSync</h1>
      <p className="text-lg md:text-xl max-w-2xl mb-6">
        Your all-in-one productivity dashboard built for developers. Manage tasks, focus, code, and more — all in one place.
      </p>
      <Button className="text-lg px-6 py-3 rounded-xl" onClick={() => navigate("/dashboard")}>
        🚀 Get Started
      </Button>
    </div>
  );
};

export default Hero;
