# WhatsApp Chat Button - Next.js Integration

A simple, beautiful WhatsApp chat button component for Next.js applications.

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 2. Configure Environment Variables

Copy the example environment file:

```bash
cp .env.local.example .env.local
```

Edit `.env.local` and add your WhatsApp number:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=1234567890
NEXT_PUBLIC_WHATSAPP_MESSAGE=Hello! I would like to get in touch with you.
```

**Important:** 
- Use your phone number **WITHOUT** the `+` sign
- Include country code (e.g., `12345678900` for US, `919876543210` for India)

### 3. Run Development Server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

```
whatsapp/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx             # Home page
│   ├── page.module.css      # Home page styles
│   └── globals.css          # Global styles
├── components/
│   ├── WhatsAppButton.tsx   # WhatsApp button component
│   └── WhatsAppButton.module.css  # Button styles
├── .env.local.example       # Environment variables example
├── next.config.js           # Next.js configuration
├── package.json             # Dependencies
└── tsconfig.json            # TypeScript configuration
```

## 🎯 Usage

### Basic Usage

Import and use the `WhatsAppButton` component:

```tsx
import WhatsAppButton from '@/components/WhatsAppButton';

export default function MyPage() {
  return (
    <>
      {/* Your page content */}
      <WhatsAppButton 
        phoneNumber="1234567890"
        message="Hello! I need help."
      />
    </>
  );
}
```

### With Environment Variables

```tsx
import WhatsAppButton from '@/components/WhatsAppButton';

export default function MyPage() {
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '1234567890';
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Hello!';

  return (
    <>
      {/* Your page content */}
      <WhatsAppButton 
        phoneNumber={phoneNumber}
        message={message}
        position="bottom-right"
        size="medium"
      />
    </>
  );
}
```

## ⚙️ Component Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `phoneNumber` | `string` | **required** | WhatsApp number (with country code, no +) |
| `message` | `string` | `'Hello! I would like to get in touch with you.'` | Pre-filled message |
| `position` | `'bottom-right' \| 'bottom-left'` | `'bottom-right'` | Button position |
| `size` | `'small' \| 'medium' \| 'large'` | `'medium'` | Button size |
| `className` | `string` | `''` | Additional CSS classes |

## 🎨 Customization

### Change Button Position

```tsx
<WhatsAppButton 
  phoneNumber="1234567890"
  position="bottom-left"  // or "bottom-right"
/>
```

### Change Button Size

```tsx
<WhatsAppButton 
  phoneNumber="1234567890"
  size="large"  // "small", "medium", or "large"
/>
```

### Custom Styling

Edit `components/WhatsAppButton.module.css` to customize colors, animations, or spacing.

## 📱 Phone Number Format

Examples:
- **US:** `12345678900` (for +1 234-567-8900)
- **India:** `919876543210` (for +91 98765 43210)
- **UK:** `447911123456` (for +44 7911 123456)

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in [Vercel](https://vercel.com)
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 🔧 Advanced Usage

### Multiple WhatsApp Buttons

You can add multiple buttons with different numbers:

```tsx
<WhatsAppButton 
  phoneNumber="1234567890"
  message="Support"
  position="bottom-right"
/>
<WhatsAppButton 
  phoneNumber="0987654321"
  message="Sales"
  position="bottom-left"
/>
```

### Conditional Rendering

```tsx
{process.env.NEXT_PUBLIC_ENABLE_WHATSAPP === 'true' && (
  <WhatsAppButton 
    phoneNumber={process.env.NEXT_PUBLIC_WHATSAPP_NUMBER!}
  />
)}
```

## 📄 License

Free to use for any purpose.

## 🆚 Why This Solution?

- ✅ **No API keys** - Just your phone number
- ✅ **No account restrictions** - Works with any WhatsApp account
- ✅ **No server setup** - Pure client-side component
- ✅ **TypeScript support** - Full type safety
- ✅ **Next.js optimized** - Server-side rendering ready
- ✅ **Fully customizable** - Easy to style and modify

