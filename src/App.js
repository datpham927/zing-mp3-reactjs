import { BrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts';
import RouterPage from './routes/RouterPage';

function App() {
    return (
        <div>
            <BrowserRouter>
                <div className="App">
                    <AppLayout>
                        <RouterPage />
                    </AppLayout>
                </div>
            </BrowserRouter>
        </div>
    );
}

export default App;
