import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";
import { readFileAsBase64 } from "../../../config/utils/utils";
import { getStatusType } from "../../../config/utils/function";
import CustomDrawer from "../../../component/common/Drawer/CustomDrawer";
import FormComponent from "./Form";
import { generateInitialValues } from "../utils/functions";

const EditForm = observer(({ open, getData, data, onClose }: any) => {
    const [loading,setLoading] = useState(false)

  const {
    auth: { openNotification },
    locationStore: { updateLocation },
  } = stores;

  const handleSubmit = async (values, { resetForm }: any) => {
    const formData: any = {
      ...values,
    };

    setLoading(true)
    if (
      formData?.image?.file &&
      formData?.image?.file?.length !== 0 &&
      formData?.image?.isAdd
    ) {
      const buffer = await readFileAsBase64(formData?.image?.file);
      const fileData = {
        buffer: buffer,
        filename: formData?.image?.file?.name,
        type: formData?.image?.file?.type,
        isDeleted: formData?.image?.isDeleted || 0,
        isAdd: formData?.image?.isAdd || 0,
      };
      formData.image = fileData;
    } else {
      if (formData?.image?.isDeleted) {
        const fileData = {
          isDeleted: formData?.image?.isDeleted || 0,
          isAdd: formData?.image?.isAdd || 0,
        };
        formData.image = fileData;
      }
    }

    updateLocation(data._id, formData)
      .then((data) => {
        openNotification({
          title: "Successfully Updated",
          message: `${data.message}`,
          type: "success",
        });
        getData();
        onClose();
        resetForm();
      })
      .catch((err: any) => {
        openNotification({
          title: "Update Failed",
          message: err?.data?.message,
          type: getStatusType(err.status),
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <CustomDrawer
      width="80vw"
      title={`Edit ${data?.name}`}
      open={open}
      close={() => {
        onClose();
      }}
    >
      <FormComponent
        isEdit={true}
        initialValues={generateInitialValues(data)}
        onSubmit={handleSubmit}
        loading={loading}
        close={() => {
          onClose()
        }}      />
    </CustomDrawer>
  );
});

export default EditForm;
