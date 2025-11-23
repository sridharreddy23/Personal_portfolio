# EmailJS Setup Instructions

The contact form is now configured to use EmailJS to send emails. Follow these steps to activate it:

## Step 1: Create a Free EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account (allows 200 emails/month)

## Step 2: Create an Email Service
1. In EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. **Copy your Service ID** (you'll need this)

## Step 3: Create an Email Template
1. Go to **Email Templates** in the dashboard
2. Click **Create New Template**
3. Use this template structure:
   ```
   From Name: {{user_name}}
   From Email: {{user_email}}
   Subject: {{subject}}
   Content:
   Name: {{user_name}}
   Email: {{user_email}}
   Subject: {{subject}}
   
   Message:
   {{message}}
   ```
4. Set your **To Email** to: `sridharsri13579@gmail.com`
5. **Copy your Template ID** (you'll need this)

## Step 4: Get Your Public Key
1. Go to **Account** → **General**
2. **Copy your Public Key**

## Step 5: Update the Code
Open `script.js` and replace these placeholders:

1. Replace `YOUR_PUBLIC_KEY` with your actual Public Key (line ~76)
2. Replace `YOUR_SERVICE_ID` with your Service ID (line ~99)
3. Replace `YOUR_TEMPLATE_ID` with your Template ID (line ~99)

## Example:
```javascript
emailjs.init("abc123xyz");  // Your Public Key

emailjs.send('service_abc123', 'template_xyz789', formData)
```

## Testing
1. Test the form by submitting a message
2. Check your email inbox (sridharsri13579@gmail.com)
3. You should receive the email within seconds

## Free Tier Limits
- 200 emails per month
- Perfect for personal portfolios

## Alternative: Formspree
If you prefer, you can also use Formspree (https://formspree.io/) which is similar and also free.

