import "./App.css";
import { Button } from "./components/ui/Button";
import { Card } from "./components/ui/Card";
import { PlusIcon } from "./icons/PlusIcon";
import { ShareIcon } from "./icons/ShareIcon";

function App() {
  return (
    <>
      <Button
        startIcon={<PlusIcon size={"md"} />}
        variant="primary"
        text="Share Brain"
        size="sm"
      />
      <Button
        startIcon={<ShareIcon size={"md"} />}
        variant="secondary"
        text="Add Content"
        size="sm"
      />
      <Card
        type={"youtube"}
        link={"https://www.youtube.com/embed/PtPPWEgaWLg?si=m5zGfUjblD6ehRvD"}
        title={"Youtube Video"}
      />
    </>
  );
}

export default App;
