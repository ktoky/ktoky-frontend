import ProfileSidebar from "@/app/components/Layout/ProfiseSidebar";

export default function layout({ children }) {
  return (
    <div className="md:flex gap-5 px-5">
      <ProfileSidebar />
      <div className="max-w-3xl">{children}</div>
    </div>
  );
}
