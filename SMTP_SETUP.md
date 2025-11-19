# SMTP Setup Guide

## Quick Fix for "Email service is not configured" Error

If you're getting this error, follow these steps:

### 1. Verify Your `.env.local` File

Make sure your `.env.local` file in the root of `locate-my-shop-nextjs` contains:

```env
SMTP_HOST=your-smtp-host
SMTP_PORT=587
SMTP_USER=your-smtp-username
SMTP_PASSWORD=your-smtp-password
SMTP_FROM_EMAIL=noreply@metizsoft.com
SMTP_FROM_NAME=MSPL Store Locator
SMTP_TO_EMAIL=hello@metizsoft.com
SMTP_SECURE=false
```

### 2. Restart Your Next.js Dev Server

**IMPORTANT:** After creating or modifying `.env.local`, you MUST restart your Next.js development server:

1. Stop the current server (Ctrl+C in the terminal)
2. Start it again: `npm run dev`

Next.js only reads environment variables when it starts, so changes won't take effect until you restart.

### 3. Verify Environment Variables Are Loaded

After restarting, check the server console. You should see the server starting without errors. If you still get the error, check:

- File location: `.env.local` must be in the root of `locate-my-shop-nextjs` (same level as `package.json`)
- No typos: Variable names must be exact (case-sensitive)
- No quotes: Don't wrap values in quotes unless the value itself contains spaces
- No spaces: No spaces around the `=` sign

### 4. Example Configurations

#### Gmail
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-16-char-app-password
SMTP_FROM_EMAIL=your-email@gmail.com
SMTP_FROM_NAME=MSPL Store Locator
SMTP_TO_EMAIL=hello@metizsoft.com
SMTP_SECURE=false
```

**Note:** For Gmail, you need an [App Password](https://myaccount.google.com/apppasswords), not your regular password.

#### Mailtrap (Testing)
```env
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your-mailtrap-username
SMTP_PASSWORD=your-mailtrap-password
SMTP_FROM_EMAIL=noreply@metizsoft.com
SMTP_FROM_NAME=MSPL Store Locator
SMTP_TO_EMAIL=hello@metizsoft.com
SMTP_SECURE=false
```

### 5. Troubleshooting

**Still not working?**

1. **Check the terminal/console** where you're running `npm run dev` - look for any error messages
2. **Verify file location**: The `.env.local` file should be at:
   ```
   locate-my-shop-nextjs/
   ├── .env.local  ← HERE
   ├── package.json
   ├── next.config.mjs
   └── app/
   ```
3. **Check for syntax errors**: Make sure there are no extra spaces or special characters
4. **Try a simple test**: Add a test variable and log it:
   ```typescript
   console.log("Test var:", process.env.SMTP_HOST);
   ```

### 6. Common Mistakes

- ❌ `SMTP_HOST = smtp.gmail.com` (spaces around =)
- ❌ `SMTP_HOST="smtp.gmail.com"` (unnecessary quotes)
- ❌ `.env` instead of `.env.local`
- ❌ File in wrong location
- ✅ `SMTP_HOST=smtp.gmail.com` (correct)

### Need Help?

If you're still having issues, check:
1. The Next.js server console for detailed error messages
2. The browser console for any client-side errors
3. The Network tab in browser DevTools to see the full API response

