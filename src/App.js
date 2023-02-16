import { BrowserRouter } from 'react-router-dom';
import { AppLayout } from './layouts';
import RouterPage from './routes/RouterPage';

function App() {
    return (
        <BrowserRouter>
            <AppLayout>
                <RouterPage />
            </AppLayout>
        </BrowserRouter>
    );
}

export default App;
