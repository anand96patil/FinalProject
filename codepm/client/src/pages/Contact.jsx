import React from 'react'
import './contact.css'

function Contact() {
  return (
    <div><br/><br/>
      <div class="container-fluid margin-top">
        <div class="row">
          <div class="col-6">
      <h1 className='font1'>Contact</h1><br/>
      <p>
        We’d love to help you with an order, for general customer
        service enquiries or product questions.The best time to reach us is
        Mon - Sat 9.00 am - 6:00 pm (Indian Standard Time).
        </p><br/>
        <h4>EMAIL</h4>
        <h5><img src='img/email.svg'/>&nbsp;&nbsp;contact@logoCraft.com</h5>
        <br/><br/>
        <h4>CALLING FROM INDIA</h4>
        <div><img src='img/telephone.svg'/>&nbsp;&nbsp;+91 9321234566</div>
        <div><img src='img/whatsapp.svg'/>&nbsp;&nbsp;+91 9999999999</div><br/><br/>
        <h4>CALLING FROM OUTSIDE INDIA</h4>
        <div><img src='img/telephone.svg'/>&nbsp;&nbsp;+91 34 1234566</div>
        <div><img src='img/whatsapp.svg'/>&nbsp;&nbsp;+91 123 999999</div>
    </div>
    <div class="col-6">
      <div>
        <img src='img/workers2.png'></img>
      </div>
    </div>
    </div>
    </div>
    <div class="container-fluid card background1">
    <div class="container">
      <div class="row cardMargin">
      <div class="col-6">
    <h1 className='font1'><b>Wholesale<br/>
Orders</b></h1><br/><br/>
<p>Store owners, corporate clients, event companies or others interested in wholesale buying, please send us your request with requested information. You will receive a call /email from us within 24 hours to discuss your requirements further.</p>
      </div>
      <div class="col-6">
    <h1 className='font1'><b>For Artisans<br/>
& NGOs</b></h1><br/><br/>
<p>
If you are an artisan, an NGO a social enterprise or an organisation that supports artisans and the creation of handcrafted produce, we would be very happy to hear from you! Please send us details about yourself.
</p>
      </div>
      </div>
    </div>
    </div><br/><br/><br/>
    </div>
  )
}

export default Contact