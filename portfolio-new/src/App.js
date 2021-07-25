import styled from 'styled-components'
import Sidebar from './Components/Sidebar';
import HomePage from './pages/HomePage';
import { Route, Switch as Switching } from "react-router";

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainContentStyled>
        <Switching>
            <Route path="/" exact>
              <HomePage />
            </Route>
          </Switching>
      </MainContentStyled>
    </div>
  );
}
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  
`

export default App;
