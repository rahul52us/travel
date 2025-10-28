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
    sightSeeingStore: { createSightSeeing },
  } = stores;

  const handleSubmit = async (values: any, { resetForm }: any) => {
    setLoading(true);
    const formData = {
      ...values,
      destination: values?.destination?._id
        ? values.destination._id.split("-")[0] || null
        : null,
    };

    if (values.coverImage?.file && values.coverImage?.file?.length !== 0) {
      const buffer = await readFileAsBase64(values.coverImage?.file);
      const fileData = {
        buffer: buffer,
        filename: values.coverImage?.file?.name,
        type: values.coverImage?.file?.type,
        isAdd: values.coverImage?.isAdd || 1,
      };
      formData.coverImage = fileData;
    }

    if (values.images?.length > 0) {
      formData.images = await Promise.all(
        values.images.map(async (file: any) => {
          const buffer = await readFileAsBase64(file?.file);
          return {
            buffer,
            filename: file.file?.name,
            type: file.file?.type,
            isAdd: file.isAdd || 1,
          };
        })
      );
    }

    createSightSeeing(formData)
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
        title="Add SightSeeing"
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