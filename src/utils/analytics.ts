/**
 * Sistema de seguimiento de conversiones para VilaKeys
 * Permite capturar eventos de llamada (tel:), WhatsApp y solicitudes comerciales
 * Compatible con Google Tag Manager (dataLayer), Google Analytics 4 (gtag) y Meta Pixel.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  }
}

export type ConversionEvent =
  | 'click_to_call'
  | 'click_to_whatsapp'
  | 'service_inquiry'
  | 'locality_selected'
  | 'faq_opened';

export interface ConversionPayload {
  placement?: string;
  service?: string;
  locality?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

export const trackConversion = (event: ConversionEvent, payload: ConversionPayload = {}): void => {
  const data = {
    event,
    timestamp: new Date().toISOString(),
    ...payload
  };

  // 1. Google Tag Manager / dataLayer
  if (typeof window !== 'undefined') {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push(data);

    // 2. Google Analytics 4 (si gtag está inicializado)
    if (typeof window.gtag === 'function') {
      window.gtag('event', event, payload);
    }

    // 3. Dispatch de CustomEvent en el DOM para tracking desacoplado
    window.dispatchEvent(new CustomEvent('vilakeys:conversion', { detail: data }));
  }
};
