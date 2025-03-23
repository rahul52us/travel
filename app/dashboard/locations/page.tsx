"use client";
import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { observer } from "mobx-react-lite";
import TestimonialTableList from "./TestimonialTableList";
import DashPageTitle from "../../component/common/DashPageTitle/DashPageTitle";
import FormModel from "../../component/common/FormModel/FormModel";
import stores from "../../store/stores";
import AddTestimonial from "./component/AddForm";
import EditTestimonial from "./component/EditForm";

const Location = observer(() => {
  const {
    locationStore: { getLocations },
  } = stores;
  const [currentPage, setCurrentPage] = useState(1);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedTestimonial, setSelectedTestimonial] = useState(null);
  const [openTestimonial, setOpenTestimonial] = useState(false);

  return (
    <Box>
      <Box display="none">
      </Box>
      <DashPageTitle
        title="Our Location"
        subTitle="What Other peoples thinks about your Organisations"
      />
      <Box>
        <TestimonialTableList
          onAdd={() => setOpenTestimonial(true)}
          onEdit={(testimonial: any) => {
            setSelectedTestimonial(testimonial);
            setIsEditing(true);
          }}
          getData={() => getLocations({page : currentPage})}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
        />
      </Box>
      {/* CREATE THE NEW tESTIMONIAL */}
      <FormModel
        open={openTestimonial}
        close={() => setOpenTestimonial(false)}
        loading={false}
        title="Add Location"
        isCentered={true}
      >
        <AddTestimonial close={() => setOpenTestimonial(false)} />
      </FormModel>
      {isEditing && selectedTestimonial && (
        <FormModel
          open={isEditing}
          close={() => setIsEditing(false)}
          title="Edit Location"
          isCentered={true}
        >
          <EditTestimonial
            location={selectedTestimonial}
            close={() => setIsEditing(false)}
            getData={() => getLocations({page : currentPage})}
          />
        </FormModel>
      )}
    </Box>
  );
});

export default Location;
