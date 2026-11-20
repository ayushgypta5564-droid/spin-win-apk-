// Spin & Win OTA bootstrap. Does not alter business logic or app data.
// Trigger OTA publishing after CAPGO_TOKEN was added to repository secrets.
import { CapacitorUpdater } from '@capgo/capacitor-updater';

const markAppReady = async () => {
  try {
    await CapacitorUpdater.notifyAppReady();
    console.info('[Spin Win] Live update runtime ready');
  } catch (error) {
    // Keep the existing app usable if the updater is unavailable.
    console.warn('[Spin Win] Live update is unavailable; continuing with bundled app.', error);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', markAppReady, { once: true });
} else {
  markAppReady();
}
