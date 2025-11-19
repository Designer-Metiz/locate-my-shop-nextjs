# Contact Form API Route

This Next.js API route handles contact form submissions and sends emails via SMTP.

## Environment Variables

Add the following variables to your `.env.local` file:

### Required Variables

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
```

### Optional Variables (with defaults)

```env
SMTP_FROM_EMAIL=noreply@metizsoft.com
SMTP_FROM_NAME=MSPL Store Locator
SMTP_TO_EMAIL=hello@metizsoft.com
SMTP_SECURE=false
```

## Configuration Examples

### Gmail

```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=your-email@gmail.com
SMTP_FROM_NAME=MSPL Store Locator
SMTP_TO_EMAIL=hello@metizsoft.com
SMTP_SECURE=false
```

**Note:** For Gmail, you need to use an [App Password](https://myaccount.google.com/apppasswords), not your regular password.

### Mailtrap (Testing)

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

### Other Providers

- **Outlook/Hotmail**: `smtp-mail.outlook.com`, port `587`
- **Yahoo**: `smtp.mail.yahoo.com`, port `587` or `465`
- **SendGrid**: `smtp.sendgrid.net`, port `587`
- **Mailgun**: `smtp.mailgun.org`, port `587`

## Port Configuration

- **Port 587**: Uses STARTTLS (recommended for most providers)
- **Port 465**: Uses direct TLS/SSL (set `SMTP_SECURE=true`)
- **Port 25**: Usually unencrypted (not recommended)

## API Endpoint

**POST** `/api/contact`

### Request Body

```json
{
  "firstName": "John",
  "lastName": "Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Hello, I'm interested in your services."
}
```

### Response

**Success (200):**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "messageId": "message-id-from-smtp-server"
}
```

**Error (400/500):**
```json
{
  "error": "Error message here"
}
```

## Testing

1. Make sure your `.env.local` file is configured with valid SMTP credentials
2. Start your Next.js development server: `npm run dev`
3. Submit the contact form on the `/contact` page
4. Check your email inbox for the contact form submission

## Troubleshooting

1. **Authentication failed**: Verify your SMTP credentials are correct
2. **Connection timeout**: Check if your SMTP server allows connections
3. **TLS errors**: Ensure the correct port and `SMTP_SECURE` setting match your provider's requirements
4. **Email not received**: Check spam folder and verify `SMTP_TO_EMAIL` is correct

