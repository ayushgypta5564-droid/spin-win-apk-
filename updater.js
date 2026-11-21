// Spin & Win OTA bootstrap.
// Notify Capgo immediately when the WebView loads this script.
// This must run on every launch and as early as possible.
import { CapacitorUpdater } from '@capgo/capacitor-updater';

try {
  const readyResult = await CapacitorUpdater.notifyAppReady();
  console.info('[Spin Win OTA] notifyAppReady succeeded', readyResult);
} catch (error) {
  // Keep the business app usable if OTA is unavailable.
  console.error('[Spin Win OTA] notifyAppReady failed', error);
}
