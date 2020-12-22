import MainNav from './components/MainNav'
import PageHeader from './components/PageHeader'
import RangeBlock from './components/RangeBlock'
import AdsetList from './components/AdsetList'
import PageFooter from './components/PageFooter'

import './assets/scss/main.scss'


const App = () => {
  return (
    <div className="App">
      <MainNav />
      <PageHeader />
      <RangeBlock />
      <AdsetList />
      <PageFooter />
    </div>
  );
}

export default App;
