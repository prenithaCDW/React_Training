import React, { useState } from 'react'
import Button from '../Button/Button.jsx';
import { BUTTON } from '../../constants/button.js';
import styles from "./Form.module.css";
import { SUB_HEADING } from '../../constants/subHeading.js';
import Input from '../Input/Input.jsx';
import LabelInput from '../LabelInput/LabelInput.jsx';
import Dropdown from '../Dropdown/Dropdown.jsx';
import { regex } from '../../constants/regex.js';
import { TOAST } from '../../constants/toast.js';
import { FORM_INITIAL_STATE, FORM_FIELDS } from '../../constants/form.js';
import PropTypes from 'prop-types';
const Form = ({ places = [] }) => {
    const [formdata, setFormdata] = useState(FORM_INITIAL_STATE);
    const [toast, setToast] = useState(false);

    const isFormValidity = regex.name.test(formdata.name) && regex.phone.test(formdata.contact) && formdata.home !== "" && formdata.togo !== "";
    const formSubmit = (e) => {
        e.preventDefault();
        if (!isFormValidity) return;
        setToast(true);
    }

    return (
        <>
            <section className={styles.formContainer}>
                <section className={styles.formHeadingContainer}>
                    <h2 className={styles.subHeadingHeader}>{SUB_HEADING.form.heading} </h2>
                    <p className={styles.subHeadingContent}>{SUB_HEADING.form.content}</p>
                </section>

                <form className={styles.formWrapper} onSubmit={formSubmit}>
                    <LabelInput htmlFor={FORM_FIELDS.name.id} labelName={FORM_FIELDS.name.label}>
                        <Input type={FORM_FIELDS.name.type} id={FORM_FIELDS.name.id} value={formdata.name} onChange={(e) => setFormdata(prev => ({ ...prev, name: e.target.value }))} />
                    </LabelInput>

                    <LabelInput htmlFor={FORM_FIELDS.home.id} labelName={FORM_FIELDS.home.label}>
                        <div className={styles.dropdownWrapper}> <Dropdown id={FORM_FIELDS.home.id} options={places} handleChange={(e) => setFormdata(prev => ({ ...prev, home: e.target.value }))} /></div>

                    </LabelInput>

                    <LabelInput htmlFor={FORM_FIELDS.togo.id} labelName={FORM_FIELDS.togo.label}>
                        <div className={styles.dropdownWrapper}> <Dropdown id={FORM_FIELDS.togo.id} options={places} handleChange={(e) => setFormdata(prev => ({ ...prev, togo: e.target.value }))} /></div>
                    </LabelInput>

                    <LabelInput htmlFor={FORM_FIELDS.contact.id} labelName={FORM_FIELDS.contact.label}>
                        <Input type={FORM_FIELDS.contact.type} id={FORM_FIELDS.contact.id} value={formdata.contact} onChange={(e) => setFormdata(prev => ({ ...prev, contact: e.target.value }))} />
                    </LabelInput>

                    <Button type="submit" label={BUTTON.submit} className={styles.formButton} disabled={!isFormValidity} />
                </form>

                {toast && (
                    <div className={styles.toast}>
                        {TOAST.initial}{" "}
                        <span className={styles.toastHighlight}>{formdata.name}</span>{" "}
                        {TOAST.content}{" "}
                        <span className={styles.toastHighlight}>{formdata.home}</span>{" "}
                        {TOAST.connector}{" "}
                        <span className={styles.toastHighlight}>{formdata.togo}</span>.
                    </div>
                )}
            </section>
        </>
    )
}
Form.propTypes = {
    places: PropTypes.arrayOf(PropTypes.string),
};
export default Form;