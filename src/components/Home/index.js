/* import Footer from '../Footer' */
import {IoIosNotificationsOutline} from 'react-icons/io'
import {HiOutlineSearch} from 'react-icons/hi'
import {GiMedicines} from 'react-icons/gi'
import {FcCellPhone} from 'react-icons/fc'
import {GoBeaker} from 'react-icons/go'
import {AiOutlineRight} from 'react-icons/ai'
import './index.css'

const Home = () => (
  <>
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
        <div className="appointments-card">
          <img
            src="https://res.cloudinary.com/dufbbo7qd/image/upload/v1665860317/alt-5ae892611bf1a-5168-1472832016f2509f3889266323039a33_1x_ar5ifi.jpg"
            className="doctor-image"
            alt="doctor"
          />
        </div>
        <div className="appointments-card">
          <img
            src="https://res.cloudinary.com/dufbbo7qd/image/upload/v1665860185/istockphoto-1327024466-170667a_butkea.jpg"
            className="doctor-image"
            alt="doctor"
          />
        </div>
        <div className="appointments-card">
          <img
            src="https://res.cloudinary.com/dufbbo7qd/image/upload/v1665859183/pleased-young-female-doctor-wearing-medical-robe-stethoscope-around-neck-standing-with-closed-posture_409827-254_doy70m.webp"
            className="doctor-image"
            alt="doctor"
          />
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
    </div>
  </>
)

export default Home
