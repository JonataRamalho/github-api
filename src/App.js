import { Layout, Profile } from "./components";
import { ResetCSS } from "./global/resetCSS";

const App = () => {
  return (
    <main>
      <ResetCSS />
      <Layout>
        <Profile />
        <div>Repositories</div>
        <div>Starreds</div>
      </Layout>
    </main>
  );
};

export default App;
