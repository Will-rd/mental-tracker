import logo from './logo.svg';
import './App.css';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Testy from './components/Testy';
import SignUp from './components/SignUpForm'

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache()
})

function App() {
  return (
    <ApolloProvider client={client}>
       <div className="App">
        Hello!
        <Testy />
        <SignUp />
      </div>
    </ApolloProvider>
   
  );
}

export default App;
