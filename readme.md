# 💝 Relationship Reminder Bot

Never forget your monthsary or anniversary again! This GitHub Action automatically sends you email reminders.

## 🚀 Setup Instructions

### 1. Create Repository
```bash
git clone https://github.com/aijazmahdavi/relationship-date-reminder.git
cd relationship-date-reminder
```

### 2. Create Required Files

Create these files in your repository:
- `.github/workflows/reminder.yml` (the workflow file)
- `reminder.js` (the script file)
- `package.json` (dependencies)

### 3. Get Gmail App Password

1. Go to your Google Account settings
2. Enable 2-Factor Authentication
3. Go to **Security** → **2-Step Verification** → **App passwords**
4. Create a new app password for "Mail"
5. Save this 16-character password

### 4. Configure GitHub Secrets

Go to your GitHub repository → **Settings** → **Secrets and variables** → **Actions**

Add these secrets:
- `GMAIL_USER`: Your Gmail address (e.g., yourname@gmail.com)
- `GMAIL_APP_PASSWORD`: The 16-character app password from step 3
- `RECIPIENT_EMAIL`: Email where you want to receive reminders

### 5. Set Your Relationship Date

Edit `.github/workflows/reminder.yml` and change this line:
```yaml
RELATIONSHIP_START_DATE: '2024-01-15'  # Change to YOUR date (YYYY-MM-DD)
```

### 6. Push to GitHub

```bash
git add .
git commit -m "Add relationship reminder"
git push
```

## ✨ Features

- 📅 Runs automatically every day at 9 AM UTC
- 💝 Sends email on monthly anniversaries
- 🎉 Special alerts for yearly anniversaries
- 🎊 Highlights 6-month milestones
- 🧪 Manual testing available

## 🧪 Testing

1. Go to **Actions** tab in your repository
2. Click on "Relationship Date Reminder"
3. Click **Run workflow** → **Run workflow**
4. Check if email arrives!

## ⏰ Adjusting Time

The default time is 9 AM UTC. To change it, edit the cron schedule:
```yaml
- cron: '0 9 * * *'  # Change '9' to your preferred hour (0-23 in UTC)
```

For 9 AM PKT (UTC+5), use: `- cron: '0 4 * * *'`

## 📧 What You'll Receive

- **Monthsary**: "💝 X Month Monthsary Reminder!"
- **Anniversary**: "🎉 X Year Anniversary Alert!"
- Includes date calculations and celebration ideas

## 🔧 Troubleshooting

- **No emails?** Check GitHub Actions logs for errors
- **Gmail blocking?** Make sure you used App Password, not regular password
- **Wrong date?** Verify RELATIONSHIP_START_DATE format is YYYY-MM-DD

---

Made with 💕 to never forget special dates!
