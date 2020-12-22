import React, { useState } from 'react';

import MainNav from './MainNav'
import PageHeader from './PageHeader'
import RangeBlock from './RangeBlock'
import AdsetList from './AdsetList'
import PageFooter from './PageFooter'

const AdsetsPage = () => {

    const [rangeValue, setRangeValue] = useState(5)

    return (
        <div>
            <MainNav />
            <PageHeader />
            <RangeBlock rangeValue={rangeValue} setRangeValue={setRangeValue}/>
            <AdsetList rangeValue={rangeValue} />
            <PageFooter />
        </div>
    )
}



export default AdsetsPage
