"use client";
import { Box } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import React, { useState } from "react";
import FormComponent from "./FormComponent";
import CustomDrawer from "../../../component/common/Drawer/CustomDrawer";
import { initialValues } from "./utils/constant";
import { readFileAsBase64 } from "../../../config/utils/utils";
import stores from "../../../store/stores";

const AddForm = observer(({ open, onClose, getData }: any) => {
  const [loading, setLoading] = useState(false);
  const {
    auth: { openNotification },
    groupTourStore: { createGroupTour },
  } = stores;

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setLoading(true);
    const formData = {
      ...values,
      location: values?.location?._id,
    };

    if (values.image?.file && values.image?.file?.length !== 0) {
      const buffer = await readFileAsBase64(values.image?.file);
      const fileData = {
        buffer: buffer,
        filename: values.image?.file?.name,
        type: values.image?.file?.type,
        isAdd: values.image?.isAdd || 1,
      };
      formData.image = fileData;
    }

    createGroupTour(formData)
      .then((data: any) => {
        getData();
        openNotification({
          title: "Created Successfully",
          message: data?.message,
          type: "success",
        });
        resetForm();
        onClose();
      })
      .catch((err: any) => {
        openNotification({
          title: "Create Failed",
          message: err?.message,
          type: "error",
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <Box>
      <CustomDrawer
        width="80vw"
        title="Add Group Tour"
        open={open}
        close={() => {
          onClose();
        }}
      >
        <FormComponent
          initialValues={initialValues}
          close={() => {
            onClose();
          }}
          onSubmit={handleSubmit}
          loading={loading}
        />
      </CustomDrawer>
    </Box>
  );
});

export default AddForm;