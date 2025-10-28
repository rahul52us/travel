import React, { useState } from "react";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";
import { readFileAsBase64 } from "../../../config/utils/utils";
import { getStatusType } from "../../../config/utils/function";
import { generateInitialValues } from "./utils/functions";
import FormComponent from "./FormComponent";
import CustomDrawer from "../../../component/common/Drawer/CustomDrawer";

const EditForm = observer(({ open, getData, data, onClose }: any) => {
  const [loading, setLoading] = useState(false);

  const {
    auth: { openNotification },
    sightSeeingStore: { updateSightSeeing },
  } = stores;

  const handleSubmit = async (values, { resetForm }: any) => {
    const formData: any = {
      ...values,
    };

    setLoading(true);
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

    delete formData.coverImage;
    delete formData.images;

    updateSightSeeing(data._id, {
      ...formData,
      destination: values?.destination?._id
        ? values.destination._id.split("-")[0] || null
        : values?.destination ? values.destination.split("-")[0] : null,
    })
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
      title={`Edit :- ${data?.title}`}
      open={open}
      close={() => {
        onClose();
      }}
    >
      <FormComponent
        isEdit={true}
        loading={loading}
        initialValues={generateInitialValues(data)}
        onSubmit={handleSubmit}
        close={() => {
          onClose();
        }}
      />
    </CustomDrawer>
  );
});

export default EditForm;