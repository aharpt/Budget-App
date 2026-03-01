import Header from './components/Header';
import Body from './components/Body';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Body />
    </QueryClientProvider>
  )
}

export default App
