"use client";
import { Box, Button, Heading, Flex, Spacer } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState, useCallback } from "react";
import AddForm from "./component/AddForm";
import EditForm from "./component/EditForm";
import stores from "../../store/stores";
import Layout from "./layout/Layout";
import DeleteData from "./DeleteData";

const Location = observer(() => {
  const [currentPage, setCurrentPage] = useState(1);
  const [formModal, setFormModal] = useState({
    type: "add",
    open: false,
    data: null,
  });

  const {
    locationStore: { getLocations },
  } = stores;

  const getData = useCallback(
    ({ page } = { page: currentPage }) => {
      getLocations({ page, limit: 15 });
    },
    [currentPage, getLocations]
  );

  useEffect(() => {
    getData({ page: currentPage });
  }, [getData, currentPage]);

  return (
    <Box p={8}>
      {/* Header Section with Button */}
      <Flex align="center" mb={6}>
        <Heading as="h1" size="lg" color="blue.600">
          Country
        </Heading>
        <Spacer />
        <Button
          colorScheme="blue"
          onClick={() => setFormModal({ open: true, type: "add", data: null })}
        >
          + Add Location
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
              onClose={() => setFormModal({ open: false, type: "add", data: null })}
            />
          )}
          {formModal.type === "edit" && formModal.data && (
            <EditForm
              open={formModal.open}
              data={formModal.data}
              getData={getData}
              onClose={() => setFormModal({ open: false, type: "add", data: null })}
            />
          )}
          {formModal.type === "delete" && formModal.data && (
            <DeleteData
              isOpen={formModal.open}
              data={formModal.data}
              getData={getData}
              onClose={() => setFormModal({ open: false, type: "add", data: null })}
            />
          )}
        </>
      )}
    </Box>
  );
});

export default Location;
