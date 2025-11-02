import React from "react";
import ItineraryForm from "./ItineraryForm";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";
import { generateItineraryInitialValues } from "./utils/functions";
import { readFileAsBase64 } from "../../../config/utils/utils";
import { getStatusType } from "../../../config/utils/function";

const EditItinerary = observer(({ getData, itinerary, close }: any) => {
  const {
    auth: { openNotification },
    itineraryStore: { updateItinerary },
  } = stores;

  const handleSubmit = async(values, { setSubmitting, resetForm }: any) => {
    const formData: any = {
      ...values,
    };

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

    updateItinerary(itinerary._id, formData)
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
    <ItineraryForm
      isEdit={true}
      initialValues={generateItineraryInitialValues(itinerary)}
      onSubmit={handleSubmit}
      close={close}
    />
  );
});

export default EditItinerary;