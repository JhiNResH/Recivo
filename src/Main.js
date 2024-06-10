// open page
import { DynamicWidget } from "@dynamic-labs/sdk-react-core";

const Main = () => {

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black flex flex-col items-center justify-center text-white">
      <div className="flex flex-col items-center justify-center text-center">
        <div className="mb-6">
          <div className="inline-flex items-center justify-center">
            <img className="w-40" src="/recivonobg.png" alt="logo"/>
          </div>
        </div>
        <h1 className="text-4xl font-bold mb-4"><a href="https://x.com/Recivo_Tru">Recivo</a></h1>
        <DynamicWidget />
        <text className="text-sm mt-4">Powered by <a className="underline text-indigo-300" href="https://www.trucritic.xyz/">TruCritic</a></text>
      </div>
    </div>
  );
}


export default Main;
