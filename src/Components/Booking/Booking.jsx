import { Field, Formik, Form } from 'formik';
import css from './Booking.module.css';

export const Booking = () => {
    return (
        <div className={css.bookingContainer}>
            <h1 className={css.bookingMainText}>Book your campervan now</h1>
            <p className={css.bookingText}>Stay connected! We are always ready to help you.</p>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    comment: ''
                }}
                onSubmit={(values, actions) => {
                    console.log(values);
                    actions.setSubmitting(false);
                }}
            >
                <Form className={css.bookingInputsContainer}>
                    <Field
                        type="text"
                        name="name"
                        placeholder="Name"
                        className={css.bookingInput}
                    />
                    <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className={css.bookingInput}
                    />
                    <Field
                       type="date"
                       name="date"
                       placeholder="Booking date"
                       className={css.bookingInput}
                    />
                    <Field
                      as="textarea"
                      name="comment"
                      placeholder="Comment"
                      className={css.bookingTextarea}
                    />
                    <button className={css.bookingSubmitBtn} type="submit">Submit</button>
                </Form>
            </Formik>
        </div>
    );
};
