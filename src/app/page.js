import GeminiBody from "@/components/GeminiBody";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  return (
    <div className="flex contain">
      <Sidebar />
      <GeminiBody />
    </div>
  );
}
