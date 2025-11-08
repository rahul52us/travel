"use client";
import { Box, Button, Heading, Flex, Spacer } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useCallback } from "react";
import AddForm from "./component/AddForm";
import Layout from "./layout/Layout";
import EditForm from "./component/EditForm";
import stores from "../../store/stores";
import DeleteData from "./component/DeleteData";

const Page = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formModal, setFormModal] = useState({
    type: "add",
    open: false,
    data: null,
  });

  const {
    groupTourStore: { getGroupTour },
    locationStore: { getLocations },
  } = stores;

  useEffect(() => {
    getLocations({ page: 1 , limit : 15});
  }, [getLocations]);


  const getData = useCallback(
    ({ page } = { page: currentPage }) => {
      getGroupTour({ page, limit: 15 });
    },
    [currentPage, getGroupTour]
  );

  useEffect(() => {
    getData({ page: currentPage });
  }, [getData, currentPage]);

  return (
    <Box p={8}>
      {/* Header Section with Button */}
      <Flex align="center" mb={6}>
        <Heading as="h1" size="lg" color="blue.600">
          Group Tour
        </Heading>
        <Spacer />
        <Button
          colorScheme="blue"
          onClick={() => setFormModal({ open: true, type: "add", data: null })}
        >
          + Add Group Tour
        </Button>
      </Flex>

      {/* Main Content */}
      <Layout setFormModal={setFormModal} currentPage={currentPage} setCurrentPage={setCurrentPage} />

      {/* Modals */}
      {formModal.open && (
        <>
          {formModal.type === "add" && (
            <AddForm
              getData={getData}
              open={formModal.open}
              onClose={() =>
                setFormModal({ open: false, type: "add", data: null })
              }
            />
          )}
          {formModal.type === "edit" && formModal.data && (
            <EditForm
              open={formModal.open}
              data={formModal.data}
              getData={getData}
              onClose={() =>
                setFormModal({ open: false, type: "add", data: null })
              }
            />
          )}
          {formModal.type === "delete" && formModal.data && (
            <DeleteData
              isOpen={formModal.open}
              data={formModal.data}
              getData={getData}
              onClose={() =>
                setFormModal({ open: false, type: "add", data: null })
              }
            />
          )}
        </>
      )}
    </Box>
  );
});

export default Page;