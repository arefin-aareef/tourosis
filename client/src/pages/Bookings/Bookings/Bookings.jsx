import bookingCover from "../../../assets/cover/cover6.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useTours from "../../../hooks/useTours";
import BookingsTab from "../BookingsTab/BookingsTab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Bookings = () => {
    const categories = ['adventure', 'beach', 'nature', 'culture', 'history']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category)
    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [tour] = useTours();

    const adventure = tour.filter(item => item.category === "adventure")
    const beach = tour.filter(item => item.category === "beach")
    const nature = tour.filter(item => item.category === "nature")
    const culture = tour.filter(item => item.category === "culture")
    const history = tour.filter(item => item.category === "history")

  return (
    <div>
      <Helmet>
        <title>Tourosis | Bookings</title>
      </Helmet>
      <Cover
        img={bookingCover}
        title="Book Your Tour"
        description="Elevate your travel planning with our seamless online tour booking services."
      ></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Adventure</Tab>
          <Tab>Beach</Tab>
          <Tab>Nature</Tab>
          <Tab>Culture</Tab>
          <Tab>History</Tab>
        </TabList>
        <TabPanel>
            <BookingsTab items={adventure}></BookingsTab>
        </TabPanel>
        <TabPanel>
            <BookingsTab items={beach}></BookingsTab>
        </TabPanel>
        <TabPanel>
            <BookingsTab items={nature}></BookingsTab>
        </TabPanel>
        <TabPanel>
            <BookingsTab items={culture}></BookingsTab>
        </TabPanel>
        <TabPanel>
            <BookingsTab items={history}></BookingsTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Bookings;
