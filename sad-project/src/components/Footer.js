import "./Footer.css"
import React from 'react'

const Footer = () => {
  return (
    <div>
          <footer>
        <div class="footer-container">
            <div class="footer-sections">
                <div class="footer-social-media">
                    <h3 class="footer-headings">Social Media</h3>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Instagram</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Tiktok</a></li>
                    </ul>
                </div>
                <div class="footer-partners">
                    <h3 class="footer-headings">Partners</h3>
                    <ul>
                        <li><a href="#">Share-Trip</a></li>
                        <li><a href="#">Deshghuri</a></li>
                        <li><a href="#">Travel360</a></li>
                        <li><a href="#">Royal Tour</a></li>
                    </ul>
                </div>
                <div class="footer-contact">
                    <h3 class="footer-headings">Contact Us</h3>
                    <p>Phone: +8801581044982</p>
                    <p>Email: travelshare@gmail.com</p>
                    <p>Whatsapp: +8801766032333</p>
                    <p>Instagram: @travelshare360</p>
                </div>
            </div>
            <div class="footer-hr"></div>
            <div class="copyright"><small>© copyright to Travel Share company 2024</small></div>
        </div>
    </footer>
    </div>
  )
}

export default Footer
