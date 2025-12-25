# Email Setup Instructions for Portfolio Contact Form

## ✅ Current Status
The contact form will now send messages to your Gmail: **mehuldindorkar6472@gmail.com**

## 🚀 Quick Gmail Setup (3 minutes)

### Step 1: Enable 2-Factor Authentication
1. Go to [Google Account Security](https://myaccount.google.com/security)
2. Turn on **2-Step Verification** if not already enabled

### Step 2: Generate App Password
1. In Google Account settings, go to Security
2. Under "Signing in to Google", click **App passwords**
3. Select app: **Mail**
4. Select device: **Other (custom name)** → Type "Portfolio Website"
5. Click **Generate**
6. Copy the 16-character password (e.g., "abcd efgh ijkl mnop")

### Step 3: Configure Your Portfolio
Replace the placeholder environment variables:

```bash
# Your Gmail address
EMAIL_USER=mehuldindorkar6472@gmail.com

# The app password you just generated (16 characters)
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

### Step 4: Update Environment Variables
Use the DevServerControl tool to set these variables with your real credentials, then restart the server.

## 📧 How It Works

When someone fills out your contact form:

1. **They enter their details** (name, email, message)
2. **Click "Send Message"**
3. **You receive a beautifully formatted email** at mehuldindorkar6472@gmail.com with:
   - Their name and contact info
   - Their complete message
   - A **"Click to Reply"** button for instant response
   - Timestamp in Indian Standard Time

## 🎨 Email Format Preview

```
Subject: Portfolio Contact: Message from [Their Name]

New Contact Form Submission
━━━━━━━━━━━━━━━━━━━━━━━━━━

Contact Information
Name: John Doe
Email: john.doe@example.com

Message
Hi Mehul, I saw your portfolio and I'm impressed with your data analytics skills. 
We have an opening for a data analyst position...

Quick Actions
Reply to this person: [Click here to reply]

Sent at: January 8, 2025, 1:30:00 PM (IST)
```

## 🔄 Current Fallback
Until you set up Gmail credentials, messages are logged to the server console.

## 💡 Benefits

- ✅ **Professional email notifications** to mehuldindorkar6472@gmail.com
- ✅ **Beautifully formatted HTML emails** with your branding
- ✅ **One-click reply** - respond directly from the email
- ✅ **Automatic timestamps** in Indian time zone
- ✅ **No SMS costs** - completely free using Gmail
- ✅ **Email history** - all contact attempts saved in Gmail

## 🌟 Security Features

- **App-specific password** - keeps your main Gmail password secure
- **Reply-to protection** - emails come from your portfolio, but replies go to the sender
- **Input validation** - prevents spam and malicious content
- **Rate limiting ready** - can add limits to prevent abuse

Your email-powered contact form is ready to impress HR managers! 📧✨
