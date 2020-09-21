import { createBrowserHistory, History } from "history";
declare global {
  interface Window {
    dataLayer: any;
  }
}
const history: History = createBrowserHistory();
export default history;