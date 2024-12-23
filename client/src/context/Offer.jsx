import axios from "axios";
import { createContext, useState } from "react";
import api from "../utils/axiosInstance";

const OfferContext = createContext();

export const OfferContextProvider = ({ children }) => {
  const [discount30to40, setDiscount30to40] = useState([]);
  const [discount40to50, setDiscount40to50] = useState([]);
  const [specialOffer, setSpecialOffer] = useState([]);

  const fetchDiscountedProducts = async () => {
    try {
      const response = await api.get(`/api/v1/offer/products`);

      setDiscount30to40(response.data.discount30to40);
      setDiscount40to50(response.data.discount40to50);
      setSpecialOffer(response.data.specialOffer);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <OfferContext.Provider
      value={{
        fetchDiscountedProducts,
        discount30to40,
        discount40to50,
        specialOffer,
      }}
    >
      {children}
    </OfferContext.Provider>
  );
};

export default OfferContext;
