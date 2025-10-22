export const WHATSAPP_CONFIG = {
  phoneNumber: process.env.NEXT_PUBLIC_WHATSAPP_PHONe || '+2349033753156',
  
  // Message templates
  TEMPLATES: {
    PRODUCT_INQUIRY: 'Hi! I\'m interested in the {productName}. Is it still available?',
    GENERAL_INQUIRY: 'Hi! I\'d like to know more about your products. Can you help me?',
    AVAILABILITY_CHECK: 'Hello! Is the {productName} still available?',
    PRICE_INQUIRY: 'Hi! What\'s the best price for the {productName}?'
  }
} as const;
