import {
  DynamicContextProvider,
} from "@dynamic-labs/sdk-react-core";

import { SolanaWalletConnectors } from "@dynamic-labs/solana";
import Main from "./Main";


const App = () => {

  return (
    <div className="App">
      <DynamicContextProvider
        settings={{
          events: {
            onAuthSuccess: (args) => {
              console.log('onAuthSuccess was called', args);
            },
          },
          environmentId: "98572501-7d80-4214-93f3-f98748d82f13",
          walletConnectors: [SolanaWalletConnectors],
        }}
      >
        <Main />
        </DynamicContextProvider>
    </div>
    );
}

export default App;
