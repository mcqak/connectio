import MainNav from './components/MainNav'
import PageHeader from './components/PageHeader'
import RangeBlock from './components/RangeBlock'

import './assets/scss/main.scss'


const App = () => {
  return (
    <div className="App">
      <MainNav />
      <PageHeader />
      <RangeBlock />
    </div>
  );
}

export default App;
