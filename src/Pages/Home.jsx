import React from "react";
import Banner from "../Components/Banner";
import Card from "../Components/common/Card";
import posImg from "../assets/img/img1.png";
import posImg1 from "../assets/img/QR1.png";

export default function Home() {
  
  const cardData = [
    {
      title: "PROFILE",
      image: posImg,
      description: "Setup payment methods",
      listItems: ["Bank Details", "UPI Setup", "Settlement Info"],
      buttonText: "Setup",
      buttonClass: "btn-success",
    },
    {
      title: "QR",
      image: posImg1,
      description: "Order QR",
      listItems: ["Receive Payment", "Order new QRs", "Download QR"],
      buttonText: "View more",
      buttonClass: "btn-success",
    },
    {
      title: "Settlement",
      amount: "₹1,23,816.19",
      transactions: [
        { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
        { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
        { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
      ],
      buttonText: "Settle Now",
      buttonClass: "btn-success",
    },
    {
      title: "Total Transactions",
      amount: "₹1,23,816.19",
      transactions: [
        { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
        { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
        { name: "Ibrahim", date: "23 Oct, 09:15 AM", amount: "+₹90" },
      ],
      buttonText: "View All",
      buttonClass: "btn-success",
    },
  ];

  return (
    <div className="container">
     
      <Banner/>

      
      <div className="row g-3 mt-3">
        {cardData.map((card, index) => (
          <div className="col-md-6" key={index}>
            <Card {...card} />
          </div>
        ))}
      </div>
    </div>
  );
}
