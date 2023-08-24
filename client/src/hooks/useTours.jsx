import { useEffect, useState } from "react";

const useTours = () => {
  const [tour, setTour] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:5000/tour")
      .then((res) => res.json())
      .then((data) => {
        setTour(data);
        setLoading(false)
      });
  }, [])
  return [tour, loading]
};

export default useTours;
