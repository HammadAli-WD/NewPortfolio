import styled from 'styled-components'
import Sidebar from './Components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar/>
      <MainContentStyled>

      </MainContentStyled>

    </div>
  );
}
const MainContentStyled = styled.main`
  position: relative;
  margin-left: 16.3rem;
  min-height: 100vh;
  background-color: red;
`

export default App;
