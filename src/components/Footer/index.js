import {
  VscHome,
  VscCalendar,
  VscMailRead,
  VscBeaker,
  VscAccount,
} from 'react-icons/vsc'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <div>
      <VscHome size={30} className="footer-icon" />
      <VscCalendar size={30} className="footer-icon" />
      <VscMailRead size={30} className="footer-icon" />
      <VscBeaker size={30} className="footer-icon" />
      <VscAccount size={30} className="footer-icon" />
    </div>
  </div>
)
export default Footer
