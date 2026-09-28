import { AppRouter } from "./router/AppRouter";
import { MotionConfig } from "motion/react";

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <AppRouter />
    </MotionConfig>
  );
}

export default App;