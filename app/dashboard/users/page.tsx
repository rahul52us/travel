"use client";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";
import stores from "../../store/stores";
import Form from "./component/Form";
import LeadsTable from "./component/Therapists/TherapistsTable";
import { initialValues } from "./component/utils/constant";
import DeleteData from "./component/Therapists/component/DeleteUser";

const LeadsPage = () => {
  const {
    userStore: { createUser, getAllUsers, updateUser },
  } = stores;
  const [isDrawerOpen, setIsDrawerOpen] = useState<any>({
    isOpen: false,
    type: "add",
    data: null,
  });
  const [refreshTrigger, setRefreshTrigger] = useState(0);
  const toast = useToast();

  const handleAddSubmit = async (formData: any) => {
    try {
      createUser({
        ...formData,
        userType: "lead",
      })
        .then(() => {
          getAllUsers({ page: 1, limit: 30 }); // Fetch all users
          setIsDrawerOpen({ isOpen: false, type: "add", data: null });
          setRefreshTrigger((prev) => prev + 1);
          toast({
            title: "Lead Added.",
            description: `${formData.name} has been successfully added.`,
            status: "success",
            duration: 5000,
            isClosable: true,
          });
        })
        .catch((err: any) => {
          toast({
            title: "Failed to create",
            description: `${err?.message}`,
            status: "error",
            duration: 5000,
            isClosable: true,
          });
        });
    } catch (err: any) {
      toast({
        title: "Failed to create",
        description: `${err?.message}`,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleEditSubmit = async (values: any) => {
    const formData: any = {
      ...values,
      userType: "lead",
    };

    updateUser(formData)
      .then(() => {
        getAllUsers({ page: 1, limit: 30 }); // Fetch all users
        setIsDrawerOpen({ isOpen: false, type: "add", data: null });
        setRefreshTrigger((prev) => prev + 1);
        toast({
          title: "Lead updated.",
          description: `${formData.name} has been successfully updated.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      })
      .catch((err: any) => {
        toast({
          title: "Failed to update",
          description: `${err?.message}`,
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      });
  };

  return (
    <Box>
      <LeadsTable
        onDelete={(ft: any) => {
          setIsDrawerOpen({ open: true, type: "delete", data: ft });
        }}
        onAdd={() => setIsDrawerOpen({ isOpen: true, type: "add", data: null })}
        onEdit={(dt: any) => {
          setIsDrawerOpen({
            isOpen: true,
            type: "edit",
            data: dt,
          });
        }}
        refreshTrigger={refreshTrigger}
      />
      
      {(isDrawerOpen.type === "add" || isDrawerOpen.type === "edit") && (
        <Drawer
          size="md"
          isOpen={isDrawerOpen.isOpen}
          placement="right"
          onClose={() =>
            setIsDrawerOpen({ isOpen: false, type: "add", data: null })
          }
          autoFocus={false}
        >
          <DrawerOverlay>
            <DrawerContent
              bg="white"
              borderRadius="lg"
              boxShadow="xl"
              maxW="80%"
              width="80%"
            >
              <DrawerCloseButton />
              <DrawerHeader
                bg="teal.500"
                color="white"
                fontSize="lg"
                fontWeight="bold"
                textAlign="center"
                bgGradient="linear(to-r, teal.400, blue.400)"
              >
                {isDrawerOpen?.type === "edit" ? "Edit Lead" : "Add Lead"}
              </DrawerHeader>
              <DrawerBody p={6} bg="gray.50">
                <Form
                  initialData={
                    isDrawerOpen?.type === "edit"
                      ? isDrawerOpen?.data
                      : null
                  }
                  onSubmit={
                    isDrawerOpen?.type === "edit"
                      ? handleEditSubmit
                      : handleAddSubmit
                  }
                  isOpen={isDrawerOpen.isOpen}
                  onClose={() =>
                    setIsDrawerOpen({ isOpen: false, type: "add", data: null })
                  }
                  isEdit={isDrawerOpen.type === "edit"}
                />
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      )}
      
      {isDrawerOpen.type === "delete" && isDrawerOpen.open && (
        <DeleteData
          getData={getAllUsers}
          data={isDrawerOpen.data}
          isOpen={isDrawerOpen.open}
          onClose={() =>
            setIsDrawerOpen({ open: false, type: "add", data: null })
          }
        />
      )}
    </Box>
  );
};

export default LeadsPage;