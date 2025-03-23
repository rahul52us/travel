import React from "react";
import TestimonialForm from "./Form";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";
import { generateLocationsInitialValues } from "../utils/functions";
import { getStatusType } from "../../../config/utils/function";

const EditLocation = observer(({ getData, location, close }: any) => {
  const {
    auth: { openNotification },
    locationStore: { updateLocation },
  } = stores;

  const handleSubmit = async(values, { setSubmitting, resetForm }: any) => {

    const formData: any = {
      ...values,
    };

    updateLocation(location._id, formData)
    .then((data) => {
      openNotification({
        title: "Successfully Updated",
        message: `${data.message}`,
        type: "success",
      });
      getData()
      close();
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
      setSubmitting(false);
    });
  };

  return (
    <TestimonialForm
      isEdit={true}
      initialValues={generateLocationsInitialValues(location)}
      onSubmit={handleSubmit}
      close={close}
    />
  );
});

export default EditLocation;