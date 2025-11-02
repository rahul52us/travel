"use client";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import ItineraryTableList from "./ItineraryTableList";
import DashPageHeader from "../../component/common/DashPageHeader/DashPageHeader";
import DashPageTitle from "../../component/common/DashPageTitle/DashPageTitle";
import FormModel from "../../component/common/FormModel/FormModel";
import stores from "../../store/stores";
import EditItinerary from "./components/EditItineraryForm";
import AddItinerary from "./components/AddItineraryForm";


const Itinerary = observer(() => {
  const {
    itineraryStore: { setOpenItineraryDrawer, getItineraries },
  } = stores;
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedItinerary, setSelectedItinerary] = useState(null);
  const [openItinerary, setOpenItinerary] = useState(false);

  return (
    <Box>
      <Box display="none">
        <DashPageHeader
          btnAction={() => setOpenItineraryDrawer()}
          breadcrumb={[]}
        />
      </Box>
      <DashPageTitle
        title="Travel Itineraries"
        subTitle="Manage your travel plans and itinerary schedules"
      />
      <Box>
        <ItineraryTableList
          onAdd={() => setOpenItinerary(true)}
          onEdit={(itinerary: any) => {
            setSelectedItinerary(itinerary);
            setIsEditing(true);
          }}
          getData={() => getItineraries({page : currentPage})}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Box>
      {/* CREATE NEW ITINERARY */}
      <FormModel
        open={openItinerary}
        close={() => setOpenItinerary(false)}
        loading={false}
        title="Add Itinerary"
        isCentered={true}
      >
        <AddItinerary close={() => setOpenItinerary(false)} />
      </FormModel>
      {isEditing && selectedItinerary && (
        <FormModel
          open={isEditing}
          close={() => setIsEditing(false)}
          title="Edit Itinerary"
          isCentered={true}
        >
          <EditItinerary
            itinerary={selectedItinerary}
            close={() => setIsEditing(false)}
            getData={() => getItineraries({page : currentPage})}
          />
        </FormModel>
      )}
    </Box>
  );
});

export default Itinerary;