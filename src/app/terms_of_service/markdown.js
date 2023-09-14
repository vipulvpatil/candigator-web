import ReactMarkdown from "react-markdown"

const Markdown = ({effectiveDate, companyName, companyAddress, companyJurisdiction, companyEmail}) => {
  return <ReactMarkdown>{`
Effective Date: ${effectiveDate}

&nbsp;

Please read these Terms of Service and Privacy Policy ("Terms") carefully before using Prospect ("Service") provided by ${companyName} ("Company," "we," "us," or "our"). By accessing or using the Service, you agree to be bound by these Terms. If you do not agree to these Terms, please do not use the Service.

&nbsp;

**1. Acceptance of Terms**

By using the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms, as well as our Privacy Policy, which is incorporated by reference into these Terms. If you are using the Service on behalf of an organization or entity, you represent and warrant that you have the authority to bind that organization or entity to these Terms.

&nbsp;

**2. Description of Service**

Prospect is a resume processing service that allows logged-in users to securely upload and store resumes or candidate information. The Service uses Chat GPT to generate searchable JSON data from the uploaded candidate information, making it easier to manage and search for candidates efficiently.

&nbsp;

**3. User Registration**

To access and use the Service, you must register for an account. You agree to provide accurate, current, and complete information during the registration process and to update such information to keep it accurate, current, and complete. You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.

&nbsp;

**4. Data Security**

We take data security seriously. We will implement reasonable measures to protect the data you upload to the Service. However, you acknowledge that no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee the security of your data.

&nbsp;

**5. User Content**

By using the Service, you grant us a non-exclusive, worldwide, royalty-free, sublicensable, transferable right to use, reproduce, modify, create derivative works from, distribute, and display the data and information you upload to the Service for the purpose of providing and improving the Service.

&nbsp;

**6. Prohibited Activities**

You agree not to:

a. Use the Service for any illegal or unauthorized purpose.

b. Transmit any viruses, malware, or any other harmful code through the Service.

c. Attempt to gain unauthorized access to our systems or network.

d. Engage in any conduct that disrupts or interferes with the proper functioning of the Service.

&nbsp;

**7. Termination**

We reserve the right to suspend or terminate your access to the Service at our sole discretion, with or without cause, and without notice. Upon termination, all provisions of these Terms which by their nature should survive termination will survive, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.

&nbsp;

**8. Privacy Policy**

Please review our [Privacy Policy](/privacy_policy) for information on how we collect, use, and protect your personal data.

&nbsp;

**9. Disclaimer of Warranties**

THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT ANY WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED. WE DISCLAIM ALL WARRANTIES, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.

&nbsp;

**10. Limitation of Liability**

IN NO EVENT SHALL THE COMPANY, ITS OFFICERS, DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SERVICE.

&nbsp;

**11. Governing Law**

These Terms are governed by and construed in accordance with the laws of ${companyJurisdiction} without regard to its conflict of law principles.

&nbsp;

**12. Changes to Terms**

We reserve the right to modify these Terms at any time. If we make material changes to these Terms, we will notify you by email or by posting a notice on the Service. Your continued use of the Service after the effective date of the changes constitutes your acceptance of the revised Terms.

&nbsp;

**13. Contact Information**

If you have any questions or concerns about these Terms or the Service, please contact us at ${companyEmail}.

By using Prospect, you agree to abide by these Terms of Service and Privacy Policy. Thank you for using our Service!

&nbsp;

${companyName}

${companyAddress}

${companyEmail}

${effectiveDate}
`}</ReactMarkdown>
}

export default Markdown
