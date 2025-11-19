# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
cp env.example .env.local
```

Edit `.env.local` and add your WhatsApp number:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hello! I would like to get in touch with you.
```

**Important:** 
- Replace `1234567890` with your actual WhatsApp number
- Include country code (e.g., `12345678900` for US, `919876543210` for India)
- Do NOT include the `+` sign

## Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Step 4: Build for Production

```bash
npm run build
npm start
```

## That's it! 🎉

Your WhatsApp button is now ready. The green button will appear in the bottom-right corner of your page.

## Next Steps

- Customize the button in `components/WhatsAppButton.tsx`
- Change styles in `components/WhatsAppButton.module.css`
- Add the component to any page in your Next.js app

For more details, see `README-NEXTJS.md`.

