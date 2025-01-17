import { defaultTheme, Provider} from '@adobe/react-spectrum';
import NumeralConverer from './components/NumeralConverter';
import './App.css'

function App() {

  return (
    <Provider theme={defaultTheme}>
      <div className='app-wrapper'>
        <NumeralConverer />
      </div>
    </Provider>
  )
}

export default App
