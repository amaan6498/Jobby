import {AiFillStar} from 'react-icons/ai'
import {GoLocation} from 'react-icons/go'
import {BsBriefcaseFill} from 'react-icons/bs'

import './index.css'

const SimilarCards = props => {
  const {jobDetails} = props
  const {
    id,
    companyLogoUrl,
    employmentType,
    jobDescription,
    location,
    title,
    rating,
  } = jobDetails
  return (
    <li className="similar-job-div" key={id}>
      <div className="first-container">
        <img
          src={companyLogoUrl}
          className="logo-jobs-details"
          alt="similar job company logo"
        />
        <div className="first-inner-container">
          <h3>{title}</h3>
          <div className="second-inner-container">
            <AiFillStar className="aifill" />
            <p>{rating}</p>
          </div>
        </div>
      </div>
      <h2 className="dec-similar">Description</h2>
      <p>{jobDescription}</p>
      <div className="second-container">
        <GoLocation className="inner-icon" />
        <p>{location}</p>
        <BsBriefcaseFill className="inner-icon" />
        <p>{employmentType}</p>
      </div>
    </li>
  )
}
export default SimilarCards
