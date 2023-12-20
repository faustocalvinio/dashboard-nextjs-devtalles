import { WidgetsGrid } from "@/app/components";

export const metadata = {
  title: "Dashboard Main Page",
  description: "Pagina de inicio",
};

export default function MainPage() {
  return (
    <div className="text-black p-2">
      <h1 className="mt-2 text-3xl">Hello Page Main</h1>
      <span className="text-xl">Informacion General</span>

      <div className="flex flex-wrap p-2">
        <WidgetsGrid />
      </div>
    </div>
  );
}
