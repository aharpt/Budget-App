import Header from './components/Header';
import Body from './components/Body';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        staleTime: Infinity,
      }
    }
  });

  return (
    <QueryClientProvider client={queryClient}>
      <Header />
      <Body />
    </QueryClientProvider>
  )
}

export default App
