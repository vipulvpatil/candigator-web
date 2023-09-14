import ReactMarkdown from "react-markdown"

export const PrivacyMarkdown = ({effectiveDate, companyName, companyEmail}) => {
  return <ReactMarkdown>{`
Effective Date: ${effectiveDate}

&nbsp;

Welcome to Prospect ("Service"), provided by ${companyName} ("Company," "we," "us," or "our"). This Privacy Policy is designed to help you understand how we collect, use, disclose, and safeguard your personal information when you use our Service. By accessing or using the Service, you consent to the practices described in this Privacy Policy.

&nbsp;

**1. Information We Collect**

We collect and store the following types of information when you use our Service:

- **User Registration Information:** When you register for an account, we collect information such as your name, email address, and other contact details.

- **Resume and Candidate Information:** You may upload resumes or candidate information to the Service. This information may include personal and professional details, employment history, and other related data.

- **Usage Information:** We collect data related to your interactions with the Service, including log files, device information, usage analytics, and cookies (for more details, see Section 5).

&nbsp;

**2. How We Use Your Information**

We use the information we collect for the following purposes:

- **Service Provision:** To provide you with access to and use of the Service, including storing and processing resumes and candidate information.

- **Improvement:** To improve the quality and features of our Service, including using Chat GPT to generate searchable JSON data from uploaded resumes.

- **Communication:** To communicate with you, respond to your inquiries, and provide updates about the Service.

&nbsp;

**3. Data Security**

We take data security seriously and implement reasonable measures to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no method of data transmission over the internet or electronic storage is entirely secure, and we cannot guarantee absolute security.

&nbsp;

**4. Data Retention**

We retain your personal information for as long as necessary to fulfill the purposes for which it was collected, or as required by applicable laws and regulations. You can request the deletion of your account and associated data by contacting us (see Section 8).

&nbsp;

**5. Cookies and Tracking**

We use cookies and similar tracking technologies to collect information about your usage of the Service. Cookies are small files that are stored on your device. You can manage your cookie preferences through your browser settings. For more information, please refer to our [Cookie Policy](#cookie-policy).

&nbsp;

**6. Third-Party Services**

We may use third-party services, such as hosting providers and analytics tools, to assist with the operation of the Service. These third parties may have access to your personal information, but only to the extent necessary to perform their functions on our behalf.

&nbsp;

**7. Changes to Privacy Policy**

We reserve the right to modify this Privacy Policy at any time. If we make material changes to this policy, we will notify you through the Service or by other means as required by law. Your continued use of the Service after such changes constitutes your acceptance of the updated Privacy Policy.

&nbsp;

**8. Contact Us**

If you have questions, concerns, or requests regarding this Privacy Policy, or if you wish to exercise your rights related to your personal information, please contact us at ${companyEmail}.
`}</ReactMarkdown>
}

export const CookiesMarkdown = ({companyEmail}) => {
  return <ReactMarkdown>{`
Cookies and similar tracking technologies are used on Prospect ("Service") to enhance your experience and provide important features. This Cookie Policy explains what cookies are, how we use them, and your choices regarding their management.

&nbsp;

**1. What Are Cookies?**

Cookies are small text files that are placed on your device (computer, smartphone, tablet) when you visit websites. They are widely used to make websites work efficiently and to provide information to website owners.

&nbsp;

**2. Types of Cookies We Use**

We use the following types of cookies on our Service:

- **Authentication Cookies:** These cookies are essential for user authentication and account security. They enable you to log in to your account and access our Service securely.

- **Preference Cookies:** Preference cookies store information such as your language preference and other settings to enhance your user experience on our Service.

- **Analytics Cookies (Google Analytics):** We use Google Analytics, a web analytics service provided by Google, Inc. Google Analytics cookies help us understand how users interact with our Service, including information about the pages visited, the duration of visits, and other user behavior. This information is used to improve the quality and performance of our Service.

&nbsp;

**3. Managing Cookies**

You have the ability to manage or delete cookies at any time. You can usually do this through your web browser settings. Please note that if you choose to disable cookies, some features of our Service may not function correctly.

- **Browser Controls:** Most web browsers allow you to control cookies through their settings. You can usually find these settings in the "Options," "Preferences," or "Settings" menu of your browser.

- **Opt-Out of Google Analytics:** To opt out of Google Analytics tracking, you can use the Google Analytics Opt-Out Browser Add-on, available at [Google Analytics Opt-Out](https://tools.google.com/dlpage/gaoptout/).

&nbsp;

**4. Changes to Cookie Policy**

We reserve the right to make changes to our Cookie Policy. Any updates will be posted on this page. If the changes are significant, we may also provide a notice through the Service or by other means as required by law.

&nbsp;

**5. Contact Us**

If you have any questions or concerns about our Cookie Policy or the use of cookies on our Service, please contact us at ${companyEmail}.

`}</ReactMarkdown>
}
