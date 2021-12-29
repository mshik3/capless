import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { SectionProps } from '../../utils/SectionProps';
import Form from './partials/WaitlistForm/Form';
import { GoogleSpreadsheet } from "google-spreadsheet";

// Config variables
const SPREADSHEET_ID = process.env.REACT_APP_SPREADSHEET_ID;
const SHEET_ID = 0;
const CLIENT_EMAIL = process.env.REACT_APP_GOOGLE_CLIENT_EMAIL;
const PRIVATE_KEY = process.env.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, '\n');

const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

const propTypes = {
  ...SectionProps.types,
  split: PropTypes.bool,
  header: PropTypes.string,
  message: PropTypes.string,
  cta_type: PropTypes.string
}

const defaultProps = {
  ...SectionProps.defaults,
  split: false,
  header: "",
  message: "",
  cta_type: "waitlist"
}

const Cta = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  split,
  ...props
}) => {

  const outerClasses = classNames(
    'cta section center-content-mobile reveal-from-bottom',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  const innerClasses = classNames(
    'cta-inner section-inner blue-image-background',
    topDivider && 'has-top-divider',
    bottomDivider && 'has-bottom-divider',
    split && 'cta-split'
  );

  const triggerText = 'Open form';

  const appendSpreadsheet = async (row) => {
    try {
      await doc.useServiceAccountAuth({
        client_email: CLIENT_EMAIL,
        private_key: PRIVATE_KEY,
      });
      // loads document properties and worksheets
      await doc.loadInfo();

      const sheet = doc.sheetsById[SHEET_ID];
      const result = await sheet.addRow(row);
    } catch (e) {
      console.error('Error: ', e);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.target.style.visibility = "hidden";
    const newRow = {
      full_name: event.target.full_name.value,
      company_name: event.target.company_name.value,
      company_email: event.target.company_email.value
    };
    appendSpreadsheet(newRow);
    document.getElementById("thank-you").style.visibility = "visible";
  };

  return (
    <section
      {...props}
      className={outerClasses}
    >
      <div>
        <div id={props.cta_type}
          className={innerClasses}
        >
          <div className="cta-slogan">
            <h2 className="m-0">Join our waitlist now!</h2>
            <p id='waitlist-info'>We'll be opening up to new members soon!<br></br>Enter your email to be notified when space opens up.</p>
          </div>
          <div className="cta-action">
            <Form onSubmit={onSubmit} />
            <h2 id="thank-you">Thank you!</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

Cta.propTypes = propTypes;
Cta.defaultProps = defaultProps;

export default Cta;