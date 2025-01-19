import {Link, withRouter} from 'react-router-dom'
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="text-container">
      <h1 className="header-text">Find The Job That Fits Your Life</h1>
      <p className="para-text ">
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </p>
      <Link to="/jobs" className="find-button">
        <button type="button">Find Jobs</button>
      </Link>
    </div>
  </div>
)

export default withRouter(Home)

// const handleClickHome = () => {
//   const {history} = props
//   history.replace('/jobs')
// }
