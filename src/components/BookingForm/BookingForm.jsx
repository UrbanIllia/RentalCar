import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./BookingForm.module.css";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required")
    .test(
      "no-consecutive-spaces",
      "Multiple consecutive spaces are not allowed",
      (value) => {
        if (!value) return true;
        return !/\s{2,}/g.test(value);
      }
    ),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  date: Yup.string()
    .required("Booking date is required")
    .test("is-future-date", "Date cannot be in the past", (value) => {
      if (!value) return false;
      const selectedDate = new Date(value);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      return selectedDate >= today;
    }),
  comment: Yup.string().max(500, "Comment must be 500 characters or less"),
});

const BookingForm = ({ carId, car }) => {
  const initialValues = {
    name: "",
    email: "",
    date: "",
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    try {
      const carIdSlice = carId.slice(0, 4);

      const booking = {
        ...values,
        carId,
        carIdSlice,
        brand: car.brand,
        model: car.model,
        createdAt: new Date().toISOString(),
      };
      const bookings = JSON.parse(localStorage.getItem("bookings") || "[]");
      bookings.push(booking);
      localStorage.setItem("bookings", JSON.stringify(bookings));
      console.log(
        "After adding:",
        JSON.parse(localStorage.getItem("bookings"))
      );
      alert(
        `Booking for ${car.brand} ${car.model} (${carIdSlice}) successful!`
      );

      resetForm();
    } catch (error) {
      console.error("Error saving to localStorage:", error);
      alert("Failed to save booking. Please try again.");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ setFieldValue, values, errors, touched }) => (
        <Form className={css.form}>
          <div className={css.formDiscription}>
            <h3>Book your car now</h3>
            <p>Stay connected! We are always ready to help you.</p>
          </div>
          <div className={css.formInputs}>
            <div className={css.formInput}>
              <Field
                type="text"
                name="name"
                placeholder="Name*"
                className={css.input}
              />
              <ErrorMessage name="name" component="div" className={css.error} />
            </div>

            <div className={css.formInput}>
              <Field
                type="email"
                name="email"
                placeholder="Email*"
                className={css.input}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={css.error}
              />
            </div>

            <div className={css.formInput}>
              <DatePicker
                selected={values.date ? new Date(values.date) : null}
                onChange={(date) => {
                  if (date) {
                    const formattedDate = date.toISOString().split("T")[0];
                    setFieldValue("date", formattedDate);
                  } else {
                    setFieldValue("date", "");
                  }
                }}
                placeholderText="Booking date"
                minDate={new Date()}
                className={css.input}
                dateFormat="yyyy-MM-dd"
                wrapperClassName={css.datePickerWrapper}
                calendarClassName={css.datePickerCalendar}
              />
              <ErrorMessage name="date" component="div" className={css.error} />
            </div>

            <div>
              <Field
                as="textarea"
                name="comment"
                placeholder="Comment"
                className={css.textarea}
              />
              <ErrorMessage
                name="comment"
                component="div"
                className={css.error}
              />
            </div>

            <button type="submit" className={css.btn}>
              Send
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default BookingForm;
