import Sidebar from "./components/Sidebar";

export default function layout({ children }) {
  return (
    <div className="md:flex gap-5 px-5">
      <Sidebar />
      <div className="max-w-3xl">{children}</div>
    </div>
  );
}
