import logo from "@/assets/logo.svg";

export default function GlobalLoader() {
  return (
    <div className="bg-muted flex h-[100vh] w-[100vw] flex-col items-center justify-center">
      <div className="mb-15 flex animate-bounce items-center gap-2">
        <img src={logo} alt="Openbird" className="w-10" />
        <div className="text-2xl font-bold">Openbird</div>
      </div>
    </div>
  );
}
