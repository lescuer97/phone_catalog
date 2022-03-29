import { useState } from "react";

import { Phone } from "@phone_catalog/common_tooling";
import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";
import "./PhoneData.scss";

type PhoneDataProps = {
  phone: Phone;
};

const PhoneData = ({ phone }: PhoneDataProps) => {
  const [showDetail, setShowDetail] = useState(false);
  return (
    <div
      className="phone"
      style={{
        backgroundColor: showDetail ? "transparent" : "",
      }}
    >
      <div className="phoneTitle" onClick={() => setShowDetail(!showDetail)}>
        <h3>{phone.name}</h3>{" "}
        <motion.div animate={{ rotate: showDetail ? 180 : 0 }}>
          {" "}
          <IoIosArrowDown />
        </motion.div>
      </div>
      {showDetail && (
        <motion.div animate={{ x: "10%" }} className="details">
          <div className="detail">
            <h6>Description</h6>
            <p>{phone.description}</p>
          </div>
          <div className="minorDetails">
            <div className="detail">
              <h6>Manufacturer</h6>
              <p>{phone.manufacturer}</p>
            </div>
            <div className="detail">
              <h6>Color</h6>
              <p>{phone.color}</p>
            </div>
            <div className="detail">
              <h6>Price</h6>
              <p>{phone.price}€</p>
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default PhoneData;
