import Header from "./components/header";
import StoriesManager from "./components/stories-manager";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="bg-gray-100 min-h-screen">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex">
          <div className="w-full lg:w-8/12">
            <StoriesManager />
          </div>
          <div className="hidden lg:block lg:w-4/12">{/* <Sidebar /> */}</div>
        </div>
      </main>
    </div>
  );
}
