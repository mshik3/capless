import { GoogleSpreadsheet } from "google-spreadsheet";
const SHEETS_ENDPOINT = "https://9k1tmytmd4.execute-api.us-east-1.amazonaws.com/prod/sheets";
const SHEET_ID = 0;

const appendSpreadsheet = async (row, apiKeys) => {
    try {
        const doc = new GoogleSpreadsheet(apiKeys.REACT_APP_SPREADSHEET_ID);
        await doc.useServiceAccountAuth({
            client_email: apiKeys.REACT_APP_GOOGLE_CLIENT_EMAIL,
            private_key: apiKeys.REACT_APP_GOOGLE_SERVICE_PRIVATE_KEY.replace(/\\n/g, "\n"),
        });
        // loads document properties and worksheets
        await doc.loadInfo();
        const sheet = doc.sheetsById[SHEET_ID];
        await sheet.addRow(row);
    } catch (e) {
        console.error("Error: ", e);
    }
};

const submitGoogleForm = async(row) => {
    // Grab API keys from S3
    let data = await fetch(SHEETS_ENDPOINT);
    let apiKeys = await data.json();

    // Submit to Google API
    await appendSpreadsheet(row, apiKeys)
}

export { submitGoogleForm };