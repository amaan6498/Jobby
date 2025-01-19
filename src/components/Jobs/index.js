import {Component} from 'react'
import {BsSearch} from 'react-icons/bs'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import Header from '../Header'
import Profile from '../Profile'
import JobCard from '../JobCard'

import './index.css'

const employmentTypesList = [
  {
    label: 'Full Time',
    employmentTypeId: 'FULLTIME',
  },
  {
    label: 'Part Time',
    employmentTypeId: 'PARTTIME',
  },
  {
    label: 'Freelance',
    employmentTypeId: 'FREELANCE',
  },
  {
    label: 'Internship',
    employmentTypeId: 'INTERNSHIP',
  },
]

const salaryRangesList = [
  {
    salaryRangeId: '1000000',
    label: '10 LPA and above',
  },
  {
    salaryRangeId: '2000000',
    label: '20 LPA and above',
  },
  {
    salaryRangeId: '3000000',
    label: '30 LPA and above',
  },
  {
    salaryRangeId: '4000000',
    label: '40 LPA and above',
  },
]

const apiStatusConstants = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Jobs extends Component {
  state = {
    typeOfEmp: [],
    salary: [],
    search: '',
    listOfJobs: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.handleUrl()
  }

  handleUrl = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const token = Cookies.get('jwt_token')
    const {typeOfEmp, salary, search} = this.state
    const url = `https://apis.ccbp.in/jobs?employment_type=${typeOfEmp.join(
      ',',
    )}&minimum_package=${salary}&search=${search}`
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok === true) {
      const data = await response.json()
      const updatedData = data.jobs.map(eachJob => ({
        companyLogoUrl: eachJob.company_logo_url,
        employmentType: eachJob.employment_type,
        id: eachJob.id,
        jobDescription: eachJob.job_description,
        location: eachJob.location,
        packagePerAnnum: eachJob.package_per_annum,
        rating: eachJob.rating,
        title: eachJob.title,
      }))
      this.setState({
        listOfJobs: updatedData,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  handleCheckChange = event => {
    const {value} = event.target
    this.setState(prevState => {
      const {typeOfEmp} = prevState

      if (typeOfEmp.includes(value)) {
        return {typeOfEmp: typeOfEmp.filter(item => item !== value)}
      }
      return {typeOfEmp: [...typeOfEmp, value]}
    }, this.handleUrl)
  }

  handleRadioChange = event => {
    this.setState({salary: event.target.value}, this.handleUrl)
  }

  handleSearchChange = event => {
    this.setState({search: event.target.value})
  }

  handleKeyDown = event => {
    if (event.key === 'Enter') {
      this.handleUrl()
    }
  }

  handleSeachClick = () => {
    const {search} = this.state
    if (search !== '') {
      this.handleUrl()
    }
  }

  renderTypeOfEmployement = () => (
    <>
      <hr className="horizontal-row" />
      <h4 className="sidebar-head">Type of Employment</h4>
      <ul>
        {employmentTypesList.map(eachItem => (
          <li key={eachItem.employmentTypeId}>
            <input
              type="checkbox"
              id={eachItem.employmentTypeId}
              name={eachItem.employmentTypeId}
              value={eachItem.employmentTypeId}
              onChange={this.handleCheckChange}
            />
            <label className="emp-label" htmlFor={eachItem.employmentTypeId}>
              {eachItem.label}
            </label>
          </li>
        ))}
      </ul>
    </>
  )

  renderSalaryRange = () => (
    <>
      <hr className="horizontal-row" />
      <h4 className="sidebar-head">Salary Range</h4>
      <ul>
        {salaryRangesList.map(eachItem => (
          <li key={eachItem.salaryRangeId}>
            <input
              type="radio"
              id={eachItem.salaryRangeId}
              name="salaryRange"
              value={eachItem.salaryRangeId}
              onChange={this.handleRadioChange}
            />
            <label className="emp-label" htmlFor={eachItem.salaryRangeId}>
              {eachItem.label}
            </label>
          </li>
        ))}
      </ul>
    </>
  )

  renderJobsList = () => {
    const {listOfJobs} = this.state
    const jobsDisplay = listOfJobs.length > 0
    return jobsDisplay ? (
      <>
        <ul className="job-details-item-container">
          {listOfJobs.map(eachData => (
            <JobCard key={eachData.id} jobDetails={eachData} />
          ))}
        </ul>
      </>
    ) : (
      <div className="no-jobs-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
          alt="no jobs"
          className="no-jobs"
        />
        <h1 className="no-jobs-heading">No Jobs Found</h1>
        <p className="no-jobs-desc">
          We could not find any jobs. Try other filters.
        </p>
      </div>
    )
  }

  renderLoadingView = () => (
    <>
      <div className="loader-container" data-testid="loader">
        <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
      </div>
    </>
  )

  renderPrimeDealsFailureView = () => (
    <>
      <div className="failure-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
          alt="failure view"
          className="failure-view"
        />
        <h1 className="failure-heading">Oops! Something Went Wrong</h1>
        <p className="failure-desc">
          We cannot seem to find the page you are looking for
        </p>
        <button
          type="button"
          data-testid="button"
          className="jobs-failure-button"
          onClick={this.handleUrl}
        >
          Retry
        </button>
      </div>
    </>
  )

  renderBasedOnApi = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobsList()
      case apiStatusConstants.failure:
        return this.renderPrimeDealsFailureView()
      case apiStatusConstants.inProgress:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  renderSearchBar = () => (
    <>
      <div className="search-container">
        <input
          type="search"
          placeholder="Search"
          className="search-input"
          onChange={this.handleSearchChange}
          onKeyDown={this.handleKeyDown}
        />
        <button
          type="button"
          data-testid="searchButton"
          onClick={this.handleSeachClick}
        >
          <BsSearch className="search-icon" />
        </button>
      </div>
      <div>{this.renderBasedOnApi()}</div>
    </>
  )

  render() {
    return (
      <div className="job-container">
        <Header />
        <div className="jobs-page">
          <div className="side-bar">
            <Profile />
            {this.renderTypeOfEmployement()}
            {this.renderSalaryRange()}
          </div>
          <div className="jobs-home-page">{this.renderSearchBar()}</div>
        </div>
      </div>
    )
  }
}
export default Jobs
