import {ApolloClient, ApolloProvider, gql, InMemoryCache} from '@apollo/client';
import {CreateUser, UserInfo} from './Dashboard';
import {Route, Router, Routes} from "react-router-dom";
import Cookies from 'js-cookie';

const client = new ApolloClient({
    uri: 'http://localhost:8000/graphql/',
    cache: new InMemoryCache(),
    credentials: 'same-origin',
    headers: {
        'X-CSRFToken': Cookies.get('csrftoken')
    }
})


export default function App() {
  return (
      <ApolloProvider client={client}>
        <div style={{
          backgroundColor: '#00000008',
          display: 'flex',
          justifyContent: 'center',
          alignItems:'center',
          height: '100vh',
          flexDirection: 'column'
        }}>
          <h2>My first Apollo app <span role="img" aria-label="rocket">🚀</span></h2>
            <Routes>
                <Route path={'/add/user'} element={<CreateUser/>}/>
                <Route path={'/users-info'} element={<UserInfo/>} />
            </Routes>
        </div>
      </ApolloProvider>
  );
}

