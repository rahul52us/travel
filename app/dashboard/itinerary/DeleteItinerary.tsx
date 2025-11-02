import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import stores from "../../store/stores";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
} from "@chakra-ui/react";

const DeleteItinerary = observer(({ isOpen, onClose, data, getData }: any) => {
  const {
    itineraryStore: { deleteItinerary },
    auth: { openNotification },
  } = stores;
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = () => {
    setIsDeleting(true);
    deleteItinerary(data)
      .then((response: any) => {
        openNotification({
          title: "Deleted Successfully",
          message: response?.message || "Itinerary deleted",
          type: "success",
        });
        getData();
        onClose();
      })
      .catch((err: any) => {
        openNotification({
          title: "Delete Failed",
          message: err?.message || "Failed to delete itinerary",
          type: "error",
        });
      })
      .finally(() => {
        setIsDeleting(false);
      });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete Itinerary</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text>Are you sure you want to delete this itinerary? This action cannot be undone.</Text>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose} isDisabled={isDeleting}>
            Cancel
          </Button>
          <Button colorScheme="red" onClick={handleDelete} isLoading={isDeleting}>
            Delete
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
});

export default DeleteItinerary;