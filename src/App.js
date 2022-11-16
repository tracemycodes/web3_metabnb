import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/home/Home';
import Placetostay from './pages/pts/Placetostay';
import { AppProvider } from './components/context/AppContext';

function App() {
	return (
		<AppProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='placetostay' element={<Placetostay />} />
				</Route>
			</Routes>
		</AppProvider>
	);
}

export default App;
