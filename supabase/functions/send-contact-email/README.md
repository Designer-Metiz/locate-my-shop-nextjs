# SMTP Email Configuration

This Supabase Edge Function sends emails via SMTP for the contact form.

## Environment Variables

You need to set the following environment variables in your Supabase project dashboard:

1. Go to your Supabase project dashboard
2. Navigate to **Project Settings** > **Edge Functions** > **Secrets**
3. Add the following secrets:

### Required Variables

- `SMTP_HOST` - Your SMTP server hostname (e.g., `smtp.gmail.com`, `smtp.mailtrap.io`)
- `SMTP_PORT` - SMTP port (typically `587` for STARTTLS or `465` for SSL)
- `SMTP_USER` - Your SMTP username/email
- `SMTP_PASSWORD` - Your SMTP password

### Optional Variables (with defaults)

- `SMTP_FROM_EMAIL` - Sender email address (default: `noreply@metizsoft.com`)
- `SMTP_FROM_NAME` - Sender name (default: `MSPL Store Locator`)
- `SMTP_TO_EMAIL` - Recipient email address (default: `hello@metizsoft.com`)
- `SMTP_SECURE` - Set to `true` for direct TLS/SSL connection (default: `false`, uses STARTTLS for port 587)

## Example Configuration

For Gmail:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM_EMAIL=your-email@gmail.com
SMTP_FROM_NAME=MSPL Store Locator
SMTP_TO_EMAIL=hello@metizsoft.com
SMTP_SECURE=false
```

For Mailtrap (testing):
```
SMTP_HOST=smtp.mailtrap.io
SMTP_PORT=2525
SMTP_USER=your-mailtrap-username
SMTP_PASSWORD=your-mailtrap-password
SMTP_FROM_EMAIL=noreply@metizsoft.com
SMTP_FROM_NAME=MSPL Store Locator
SMTP_TO_EMAIL=hello@metizsoft.com
SMTP_SECURE=false
```

## Port Configuration

- **Port 587**: Uses STARTTLS (recommended for most providers)
- **Port 465**: Uses direct TLS/SSL connection (set `SMTP_SECURE=true`)
- **Port 25**: Usually unencrypted (not recommended)

## Testing

After setting up the environment variables, test the contact form to ensure emails are being sent successfully. Check the Supabase Edge Functions logs for any errors.

## Troubleshooting

1. **Authentication failed**: Verify your SMTP credentials are correct
2. **Connection timeout**: Check if your SMTP server allows connections from Supabase
3. **TLS errors**: Ensure the correct port and `SMTP_SECURE` setting match your provider's requirements

