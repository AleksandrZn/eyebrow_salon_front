import axios from "axios";
export const handlePay = (description, setData) => {
  try {
    axios.post(process.env.REACT_APP_PAY_URL, description).then((resp) => {
      const data = resp.data;
      setData(data);
    });
  } catch (error) {
    console.log(error);
    setData(null);
  }
};
export const handleCheckPayStatus = (description, setData) => {
    try {
      axios.post(process.env.REACT_APP_PAY_URL, description).then((resp) => {
        const data = resp.data;
        setData(data);
      });
    } catch (error) {
      console.log(error);
      setData(null);
    }
  };