"use client";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import HotelTableList from "./HotelTableList";
import DashPageHeader from "../../component/common/DashPageHeader/DashPageHeader";
import DashPageTitle from "../../component/common/DashPageTitle/DashPageTitle";
import FormModel from "../../component/common/FormModel/FormModel";
import stores from "../../store/stores";
import AddHotel from "./component/AddHotelForm";
import EditHotel from "./component/EditHotelForm";

const Hotel = observer(() => {
  const {
    hotelStore: { setOpenHotelDrawer, getHotels },
  } = stores;
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [openHotel, setOpenHotel] = useState(false);

  return (
    <Box>
      <Box display="none">
        <DashPageHeader
          btnAction={() => setOpenHotelDrawer()}
          breadcrumb={[]}
        />
      </Box>
      <DashPageTitle
        title="Hotel Management"
        subTitle="Manage your hotel listings and accommodations"
      />
      <Box>
        <HotelTableList
          onAdd={() => setOpenHotel(true)}
          onEdit={(hotel: any) => {
            setSelectedHotel(hotel);
            setIsEditing(true);
          }}
          getData={() => getHotels({page : currentPage})}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Box>
      {/* CREATE NEW HOTEL */}
      <FormModel
        open={openHotel}
        close={() => setOpenHotel(false)}
        loading={false}
        title="Add Hotel"
        isCentered={true}
      >
        <AddHotel close={() => setOpenHotel(false)} />
      </FormModel>
      {isEditing && selectedHotel && (
        <FormModel
          open={isEditing}
          close={() => setIsEditing(false)}
          title="Edit Hotel"
          isCentered={true}
        >
          <EditHotel
            hotel={selectedHotel}
            close={() => setIsEditing(false)}
            getData={() => getHotels({page : currentPage})}
          />
        </FormModel>
      )}
    </Box>
  );
});

export default Hotel;