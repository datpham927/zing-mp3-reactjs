import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './layouts';
import { publicRouter } from './components/routes/routes';
import './App.css';

function App() {
    return (
        <>
            <BrowserRouter>
                <div className="App">
                    <Routes>
                        {publicRouter.map((routes, index) => {
                            const Page = routes.component;
                            return (
                                <Route
                                    key={index}
                                    path={routes.path}
                                    element={
                                        <DefaultLayout>
                                            <Page />
                                        </DefaultLayout>
                                    }
                                />
                            );
                        })}
                    </Routes>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
