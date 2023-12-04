import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import store, { persistor } from "./services/myStoreRedux";
import App from "./App";
import { Toaster } from "react-hot-toast";
import { PersistGate } from "redux-persist/integration/react";

const queryClient = new QueryClient({
  defaultOptions: { queries: { staleTime: 60 * 1000 } },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          <App />
          <Toaster
            toastOptions={{
              success: { duration: 3000 },
              error: { duration: 4000 },
            }}
          />
        </QueryClientProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
