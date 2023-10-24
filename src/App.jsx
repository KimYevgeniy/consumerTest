import { useState } from "react";
import StartPage from "./components/StartPage.jsx";
import ContentPage from "./components/ContentPage.jsx";
import "./App.css";

function App() {
  const [showContent, setShowContent] = useState(true);

  const handleStartClick = () => {
    setShowContent(true);
  };

  const handleGoBackClick = () => {
    setShowContent(!confirm("Хотите вернуться назад?\nОк или Отмена."));
  };

  return (
    <>
      <div>
        {showContent ? (
          <ContentPage onGoBackClick={handleGoBackClick} />
        ) : (
          <StartPage onStartClick={handleStartClick} />
        )}
      </div>
    </>
  );
}

export default App;
