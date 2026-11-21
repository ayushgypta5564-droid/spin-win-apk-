// Spin & Win OTA bootstrap. Notify Capgo as soon as the WebView loads.
import { CapacitorUpdater } from '@capgo/capacitor-updater';

(async () => {
  try {
    const readyResult = await CapacitorUpdater.notifyAppReady();
    console.info('[Spin Win OTA] notifyAppReady succeeded', readyResult);
  } catch (error) {
    // Keep the business app usable if OTA is unavailable.
    console.error('[Spin Win OTA] notifyAppReady failed', error);
  }
})();
