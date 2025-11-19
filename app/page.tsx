import WhatsAppButton from '@/components/WhatsAppButton';
import styles from './page.module.css';

export default function Home() {
  // Get configuration from environment variables or use defaults
  const phoneNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '03240414979';
  const message = process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Hello! I would like to get in touch with you.';

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1>Welcome to Our Site</h1>
        <p>We'd love to hear your feedback! Click the WhatsApp button to chat with us directly.</p>
        
        <div className={styles.info}>
          <strong>💬 How it works:</strong><br />
          • Click the green WhatsApp button in the bottom right corner<br />
          • You'll be redirected to WhatsApp with a pre-filled message<br />
          • Start chatting with us instantly - no signup required!
        </div>

        <div className={styles.configInfo}>
          <strong>⚙️ Configuration:</strong><br />
          Phone Number: {phoneNumber}<br />
          Message: {message}
        </div>
      </div>

      <WhatsAppButton 
        phoneNumber={phoneNumber}
        message={message}
        position="bottom-right"
        size="medium"
      />
    </main>
  );
}

