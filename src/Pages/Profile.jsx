import React from "react";
import { QrCode, Phone, CurrencyRupee, People, Translate, Bank, PersonBadge, FileText, QrCodeScan } from "react-bootstrap-icons"; 

import Banner from "../Components/Banner";
import ServiceCard from "../Components/common/ServiceCard";
import ProfileCard from "../Components/common/ProfileCard";

export default function Profile() {
 
  const businessServices = [
    { icon: <QrCode />, title: "Smart Speaker" },
    { icon: <Phone />, title: "POS Machine" },
  ];

  const manageBusiness = [
    { icon: <CurrencyRupee />, title: "Payment Settings" },
    { icon: <People />, title: "Manage Staff" },
    { icon: <Translate />, title: "Change Language" },
  ];

  const profileCards = [
    {
      icon: <Bank />,
      title: "Bank Account",
      subtitle: "View or update bank details",
      link: "#",
    },
    {
      icon: <PersonBadge />,
      title: "Business Profile",
      subtitle: "Update your business information",
      link: "#",
    },
    {
      icon: <FileText />,
      title: "KYC Verification",
      subtitle: "Complete KYC for transactions",
      link: "#",
    },
    {
      icon: <QrCodeScan />,
      title: "Order QR Code",
      subtitle: "Get your payment QR code",
      link: "#",
    },
  ];

  return (
    <div>
   
      <Banner />

     
      <div className="container my-4">
        <div className="row g-4">
          {profileCards.map((card, idx) => (
            <ProfileCard
              key={idx}
              icon={card.icon}
              title={card.title}
              subtitle={card.subtitle}
              link={card.link}
            />
          ))}
        </div>
      </div> 
      <div className="container my-4">
        <div className="row g-4">
          
          <div className="col-md-6">
            <div
              className="p-3 rounded shadow-sm"
              style={{ backgroundColor: "#fff" }}
            >
              <h6 className="text-muted fw-bold mb-3">BUSINESS SERVICES</h6>
              <div className="d-flex">
                {businessServices.map((item, idx) => (
                  <ServiceCard key={idx} icon={item.icon} title={item.title} />
                ))}
              </div>
            </div>
          </div>

        
          <div className="col-md-6">
            <div
              className="p-3 rounded shadow-sm"
              style={{ backgroundColor: "#fff" }}
            >
              <h6 className="text-muted fw-bold mb-3">MANAGE BUSINESS</h6>
              <div className="d-flex">
                {manageBusiness.map((item, idx) => (
                  <ServiceCard key={idx} icon={item.icon} title={item.title} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  );
}
