// @ts-ignore
import {generatePdf} from 'html-pdf-node';
//const generatePdf = require('html-pdf-node').generatePdf;

let options = { format: 'A4' };
// Example of options with args //
// let options = { format: 'A4', args: ['--no-sandbox', '--disable-setuid-sandbox'] };

let file = { content: `<!DOCTYPE html>
<html lang="en" xmlns:th="http://www.thymeleaf.org">
<head>
    <title>360Works Rebuild Notice</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<style>
    .page {
        background-color: white;
    }
    .bodyContainer {
        max-width: 800px;
        min-width: 800px;
        width: 800px;
        margin: auto;
    }
    .paragraphFont {
        font-family: Ubuntu,sans-serif;
    }
    .boldFont {
        font-weight: 900;
    }
    .slogan {
        font-family: Ubuntu,sans-serif;
        font-style: italic;
        font-size: 18px;
    }
    .invitationHeader {
        font-weight: bold;
        font-size: 24px;
        line-height: 32px;
    }
    .paragraphContainer {
        margin: 24px;
        border-width: 1px;
        border-style: solid;
        border-color: black;
        padding-left: 12px;
        padding-right: 12px;
        padding-bottom: 8px;
        line-height: normal;
    }
    .keepSpace {
        white-space: pre-wrap;
    }
    .bulletPoint {
        padding-left: 64px;
    }
</style>
<body spellcheck="false" class="paragraphFont bodyContainer">
<table style="padding:0;margin:0;width:100%;">
    <tr><td colspan="3" style="padding:0;margin:0;font-size:20px;height:20px;" height="20"></td></tr>
    <tr>
        <td style="padding:0;margin:0;"></td>
        <td style="padding:0;margin:0;">


            <div>
                <div style="text-align: center">
                    <img alt="logo" src="https://360works.cloud/images/360CloudLogo.png" />
                </div>
            </div>

            <div class="paragraphContainer page">
                <p style="text-align: center" class="keepSpace invitationHeader">Rebuild Cancelled</p>
                <p style="text-align: center">You have chosen to cancel your rebuild. Your data will now migrate back to your old instance, and the new instance will be deleted.</p>

                <p class="keepSpace" style="margin-top: 36px">For any questions about 360Works Cloud, please visit our <a href="https://360works.com/contact-form/" target="_blank">support page</a> or contact us at: support@360works.com</p>
                <p style="margin-top: 36px">Sincerely,</p>
                <p class="boldFont">360Works</p>
            </div>
            <div style="text-align: center" class="slogan">Comprehensive hosting solutions brought to you by people you trust.</div>
        </td>
        <td style="padding:0;margin:0;"></td>
    </tr>
    <tr><td colspan="3" style="padding:0;margin:0;font-size:20px;height:20px;" height="20"></td></tr>
</table>
</body>

</html>` };

export const convertHtmlToPdfCoreFunction = async (html: string) => {
  try {
    const buffer =  await generatePdf(file, options);
    console.log("made a buffer");
    return buffer;
  } catch (e) {
    console.error(e);
  }
}
