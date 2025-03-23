import React from "react";
import Form from "./Form";
import { observer } from "mobx-react-lite";
import stores from "../../../store/stores";

const AddTestimonial = observer(({ close }: any) => {
  const {
    locationStore: { createLocation },
    auth: { openNotification },
  } = stores;

  const initialValues = { name: "", description: ""};

  const handleSubmit = async (values: any, { setSubmitting, resetForm }: any) => {

    const formData = {
      ...values
    };
    createLocation(formData)
      .then((data: any) => {
        openNotification({ title: "Created Successfully", message: data?.message, type: "success" });
        resetForm();
        close();
      })
      .catch((err: any) => {
        openNotification({ title: "Create Failed", message: err?.message, type: "error" });
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return <Form initialValues={initialValues} onSubmit={handleSubmit} close={close} />;
});

export default AddTestimonial;
