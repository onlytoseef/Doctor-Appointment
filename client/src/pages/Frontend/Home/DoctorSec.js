import React from 'react'
import DoctorCard from '../../../components/Card/DoctorCard'
import { DocImg } from '../../../assets/images/doctorCard'
import { useParams } from 'react-router-dom'
export default function DoctorSec() {
  const {doctorid} = useParams()
  
  
  return (
    <div className="doctorSection">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 text-center">
            <h4 >Meet Our Excellent Doctor</h4>
            <p className='w-75 '>Meet our dedicated team at Doc's Valley—a collective of experienced healthcare professionals driven by a passion for delivering exceptional care and expertise. With diverse backgrounds and a commitment to excellence, our team stands ready to guide and support you on your health and wellness journey.</p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <DoctorCard Image={DocImg.docter1} name="Dr.Javed Iqbal" category="Oncologist" bookUrl={`/${doctorid}`}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <DoctorCard Image={DocImg.docter2} name="Dr Farah Mohsin" category="Cardiologist" bookUrl={`/${doctorid}`}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <DoctorCard Image={DocImg.docter3} name="Dr Rukhsana" category="Cardiologist" bookUrl={`/${doctorid}`}/>
          </div>
        </div>
      </div>
    </div>

  )
}
