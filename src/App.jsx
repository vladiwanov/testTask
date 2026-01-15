// import { useState } from 'react'
import { Routes, Route } from 'react-router';
import GameModule from './views/GameModule';
import MainPageView from './views/MainPageView/MainPageView';
import EndPageView from './views/EndPageView/EndPageView';
import routes from './routes';
import NotFoundPage from './views/NotFoundPage';
import ResultModule from './components/ResultModule';
import Layout from './views/Layout/Layout';
import GameLayout from './views/GameLayout';

function App() {
  // const [count, setCount] = useState(0)
  const { main, game, rez, end } = routes;

  return (
    <>
      <Routes>
        <Route path={main} element={<Layout />}>
          <Route index element={<MainPageView />} />
          <Route path={game} element={<GameLayout />}>
            <Route index element={<GameModule />} />
            <Route path={rez} element={<ResultModule />} />
          </Route>
          <Route path={end} element={<EndPageView />} />
          <Route path={'*'} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
