# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Connect your email account
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template:

```html
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your website contact form:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Best regards,
Your Website Contact Form
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your Public Key
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (e.g., `user_def456`)

## Step 5: Update Your Code
Replace the placeholder values in `components/ContactForm.jsx`:

```javascript
// Replace these values with your actual EmailJS credentials
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your public key

const result = await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your service ID
  'YOUR_TEMPLATE_ID', // Replace with your template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    message: formData.message,
    to_name: 'IgniteU Admin', // Change this to your name
  },
  'YOUR_PUBLIC_KEY' // Replace with your public key
);
```

## Step 6: Test the Form
1. Fill out the contact form on your website
2. Submit the form
3. Check your email inbox for the message

## Security Notes
- The public key is safe to use in frontend code
- EmailJS handles the email sending securely
- Free plan allows 200 emails per month
- Consider upgrading for more emails or advanced features

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is connected
- Ensure your template variables match the code 