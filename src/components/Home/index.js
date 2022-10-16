import {IoIosNotificationsOutline} from 'react-icons/io'
import {HiOutlineSearch} from 'react-icons/hi'
import {GiMedicines} from 'react-icons/gi'
import {FcCellPhone} from 'react-icons/fc'
import {GoBeaker} from 'react-icons/go'
import {AiOutlineRight} from 'react-icons/ai'

import Footer from '../Footer'

import './index.css'

const Home = () => (
  <div className="home-container">
    <div className="header-container">
      <h1 className="name">Hey, Jullia</h1>
      <IoIosNotificationsOutline size={35} className="notification-icon" />
    </div>
    <div className="reports-container">
      <h1 className="reports">Your Blood Test is ready! </h1>
      <AiOutlineRight size={20} className="reports-icon" />
    </div>
    <div className="search-element">
      <input
        type="search"
        placeholder="Search for doctors, labs etc.."
        className="input-element-container"
      />
      <button type="button" className="search-button">
        <HiOutlineSearch size={25} color="#000000" />
      </button>
    </div>
    <h1 className="heading">Services</h1>
    <div className="services-container">
      <div className="service-card">
        <FcCellPhone size={35} className="services-icon" />
        <p className="service-heading">Consultations</p>
      </div>
      <div className="service-card">
        <GiMedicines size={35} className="services-icon" />
        <p className="service-heading">Medicines</p>
      </div>
      <div className="service-card">
        <GoBeaker size={35} className="services-icon" />
        <p className="service-heading">Laboratories</p>
      </div>
    </div>
    <h1 className="heading">Upcoming Appointments</h1>

    <div className="appointments-container">
      <div className="card col-12 d-flex">
        <div>
          <img
            src="https://res.cloudinary.com/dufbbo7qd/image/upload/v1665860185/istockphoto-1327024466-170667a_butkea.jpg"
            className="img"
            alt="doctor"
          />
        </div>
        <div>
          <h6 className="heading col-8">Dr.Albert Flores</h6>
          <p className="doc-para col-8">Cardiologist</p>
          <div className="col buttons">
            <button className="col-3 buttons" type="button">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
              </span>
              17 Aug
            </button>
            <button className="col-3" type="button">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                </svg>
              </span>
              14:40
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="appointments-container">
      <div className="card col-12 d-flex">
        <div>
          <img
            src="https://res.cloudinary.com/dufbbo7qd/image/upload/v1665860185/istockphoto-1327024466-170667a_butkea.jpg"
            className="img"
            alt="doctor"
          />
        </div>
        <div>
          <h6 className="heading col-8">Dr.Albert Flores</h6>
          <p className="doc-para col-8">Cardiologist</p>
          <div className="col buttons">
            <button className="col-3 buttons" type="button">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
              </span>
              24 Aug
            </button>
            <button className="col-3" type="button">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                </svg>
              </span>
              11:30
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="appointments-container">
      <div className="card col-12 d-flex">
        <div>
          <img
            src="https://res.cloudinary.com/dufbbo7qd/image/upload/v1665860185/istockphoto-1327024466-170667a_butkea.jpg"
            className="img"
            alt="doctor"
          />
        </div>
        <div>
          <h6 className="heading col-8">Dr.Albert Flores</h6>
          <p className="doc-para col-8">Cardiologist</p>
          <div className="col buttons">
            <button className="col-3 buttons" type="button">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-calendar"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                </svg>
              </span>
              28 Aug
            </button>
            <button className="col-3" type="button">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-clock-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                </svg>
              </span>
              12:00
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="discounts-container">
      <h1 className="heading">Discounts</h1>
      <div className="discounts-sub-container">
        <div className="discounts-card">
          <p className="discounts-heading">
            Comprehensive Cardiological examination
          </p>
          <p className="discounts"> -20% </p>
        </div>
        <div className="discounts-card">
          <p className="discounts-heading">
            Free Regular medical health checkups
          </p>
          <p className="discounts"> -90% </p>
        </div>
        <div className="discounts-card">
          <p className="discounts-heading">
            Oral glucose tolerance test & regular diabetic checkup
          </p>
          <p className="discounts"> -40% </p>
        </div>
      </div>
    </div>
    <Footer />
  </div>
)

export default Home
